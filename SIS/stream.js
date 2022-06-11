import Chart from "./chart/chart.js";

function timestampToTime1(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate()<10 ? '0'+(date.getDate()) : date.getDate());
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return new Date(Y + M + D);
}

function count_keyword(d, nodes, keyword) {
    var count = 0;
    var date0 = d;//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date0.getFullYear();
    var M = date0.getMonth();
    var D = date0.getDate();
    for (var i = 0; i < nodes.length; i++) {
        let date1 = timestampToTime1(nodes[i].t);
        let text = nodes[i].text;

        if (date1.getFullYear() == Y && date1.getMonth() == M && date1.getDate() == D && (text.indexOf(keyword) != -1) ) {
            count++
        }
    }
    return count;
}
function stream(){
    var data = new Array();

    var keywords_count = {};
    for(var i = 0;i<keywordlist.length;i++){
        let keyword = keywordlist[i];
        count_keyword(nodes, keyword)
    }
    var i = datecount[0].date;
    while(i - datecounts[datecounts1.length-1].date!=0){

        let keywords_count = {};
        keywords_count.date = i;
        for(var j = 0;j<keywordlist.length;j++){
            let keyword = keywordlist[j];
            keywords_count.keywordlist[j]=count_keyword(j,nodes, keyword);
        }

        data.push(keywords_cout);

        i = i.setDate(i.getDate()+1);
        i = new Date(i);
    }

    const chart1 = new Chart();
    var chart = chart1;
    const config = {
        margins: {top: 80, left: 80, bottom: 50, right: 80},
        textColor: 'black',
        gridColor: 'gray',
        title: '基础河流图',
        animateDuration: 1000
    }

    chart.margins(config.margins);

    /* ----------------------------尺度转换------------------------  */
    chart.scaleX = d3.scaleTime()
                    .domain([datecount1[0].date, datecount1[datecount1.length-1].date])
                    .range([0, chart.getBodyWidth()]);

    chart.scaleY = d3.scaleLinear()
                    /*.domain([0, (Math.floor((
                        d3.max(data, (d) => d.E1) +
                        d3.max(data, (d) => d.E2) +
                        d3.max(data, (d) => d.E3) +
                        d3.max(data, (d) => d.E4) +
                        d3.max(data, (d) => d.E5)
                        )/10) + 1)*10])*/
                    .domain([-5000,10000])
                    .range([chart.getBodyHeight(), 0])

    chart.stack = d3.stack()
                    .keys(['纱布门', '董明珠', '冯小刚喊话王健林', '刘恺威疑似出轨', '中关村校园欺凌'])
                    .order(d3.stackOrderInsideOut)
                    .offset(d3.stackOffsetWiggle);

    /* ----------------------------渲染面------------------------  */
    chart.renderArea = function(){
        const areas = chart.body().insert('g',':first-child')
                        //.attr('transform', 'translate(0, -' +  d3.max(data, (d) => d3.mean(Object.values(d))) + ')')   // 使流图的位置处于Y轴中部
                        .selectAll('.area')
                        .data(chart.stack(data));

              areas.enter()
                        .append('path')
                        .attr('class', (d) => 'area area-' + d.key)
                    .merge(areas)
                        .style('fill', (d,i) => chart._colors(i))
                        .transition().duration(config.animateDuration)
                        .attrTween('d', areaTween);

        //中间帧函数
        function areaTween(_d){
            if (!_d) return;
            const generateArea = d3.area()
                        .x((d) => d[0])
                        .y0((d) => d[1])
                        .y1((d) => d[2])
                        .curve(d3.curveCardinal.tension(0));

            const pointX = data.map((d) => chart.scaleX(new Date(d.date)));
            const pointY0 = _d.map((d) => chart.scaleY(d[0]));
            const pointY1 = _d.map((d) => chart.scaleY(d[1]));

            const interpolate = getAreaInterpolate(pointX, pointY0, pointY1);

            const ponits = [];

            return function(t){
                ponits.push([interpolate.x(t), interpolate.y0(t), interpolate.y1(t)]);
                return generateArea(ponits);
            }
        }

        //点插值
        function getAreaInterpolate(pointX, pointY0, pointY1){

            const domain = d3.range(0, 1, 1/(pointX.length-1));
            domain.push(1);

            const interpolateX = d3.scaleLinear()
                                    .domain(domain)
                                    .range(pointX);

            const interpolateY0 = d3.scaleLinear()
                                    .domain(domain)
                                    .range(pointY0);

             const interpolateY1 = d3.scaleLinear()
                                    .domain(domain)
                                    .range(pointY1);
            return {
                x: interpolateX,
                y0: interpolateY0,
                y1: interpolateY1
            };

        }

    }

    /* ----------------------------渲染坐标轴------------------------  */
    chart.renderX = function(){
        chart.svg().insert('g','.body')
                .attr('transform', 'translate(' + chart.bodyX() + ',' + (chart.bodyY() + chart.getBodyHeight()) + ')')
                .attr('class', 'xAxis')
                .call(d3.axisBottom(chart.scaleX));
    }

    chart.renderY = function(){
        chart.svg().insert('g','.body')
                .attr('transform', 'translate(' + chart.bodyX() + ',' + chart.bodyY() + ')')
                .attr('class', 'yAxis')
                .call(d3.axisLeft(chart.scaleY));
    }

    chart.renderAxis = function(){
        chart.renderX();
        chart.renderY();
    }

    /* ----------------------------渲染文本标签------------------------  */
    chart.renderText = function(){
        d3.select('.xAxis').append('text')
                            .attr('class', 'axisText')
                            .attr('x', chart.getBodyWidth())
                            .attr('y', 0)
                            .attr("font-size",20)
                            .attr('fill', config.textColor)
                            .attr('dy', 40)
                            .text('时间');

        d3.select('.yAxis').append('text')
                            .attr('class', 'axisText')
                            .attr('x', 0)
                            .attr('y', 0)
                            .attr('fill', config.textColor)
                            .attr('transform', 'rotate(-90)')
                            .attr('dy', -40)
                            .attr('text-anchor','end')
                            .text('热度');
    }

    /* ----------------------------渲染网格线------------------------  */
    chart.renderGrid = function(){
        d3.selectAll('.xAxis .tick')
            .append('line')
            .attr('class','grid')
            .attr('stroke', config.gridColor)
            .attr('stroke-dasharray', '10,10')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 0)
            .attr('y2', -chart.getBodyHeight());
    }

    /* ----------------------------渲染图标题------------------------  */
    chart.renderTitle = function(){
        chart.svg().append('text')
                .classed('title', true)
                .attr('x', chart.width()/2)
                .attr('y', 0)
                .attr('dy', '2em')
                .text(config.title)
                .attr('fill', config.textColor)
                .attr('text-anchor', 'middle')
                .attr('stroke', config.textColor);

    }

    /* ----------------------------绑定鼠标交互事件------------------------  */
    chart.addMouseOn = function(){
        //防抖函数
        function debounce(fn, time){
            let timeId = null;
            return function(){
                const context = this;
                const event = d3.event;
                timeId && clearTimeout(timeId)
                timeId = setTimeout(function(){
                    d3.event = event;
                    fn.apply(context, arguments);
                }, time);
            }
        }

        d3.selectAll('.area')
            .on('mouseover', function(d){
                const e = d3.event;
                const position = d3.mouse(chart.svg().node());
                e.target.style.cursor = 'hand'

                d3.selectAll('.area')
                    .attr('fill-opacity', 0.3);

                d3.select(e.target)
                    .attr('fill-opacity', 1);

                chart.svg()
                    .append('text')
                    .classed('tip', true)
                    .attr('x', position[0]+5)
                    .attr('y', position[1])
                    .attr('fill', config.textColor)
                    .text(d.key);
            })
            .on('mouseleave', function(){
                const e = d3.event;

                d3.selectAll('.area')
                    .attr('fill-opacity', 1);

                d3.select('.tip').remove();
            })
            .on('mousemove', debounce(function(){
                    const position = d3.mouse(chart.svg().node());
                    d3.select('.tip')
                    .attr('x', position[0]+5)
                    .attr('y', position[1]-5);
                }, 6)
            )
            
            ;
    }

    chart.render = function(){

        chart.renderAxis();

        chart.renderText();

        chart.renderGrid();

        chart.renderTitle();

        chart.renderArea();
        chart.addMouseOn();

        
    }

    chart.renderChart();



}