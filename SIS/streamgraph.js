import Chart from "./chart.js";
//import drawword from './cloud.js';


function count(d, newdata) {
    var count = 0;
    var date0 = d;//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date0.getFullYear();
    var M = date0.getMonth();
    var D = date0.getDate();
    for (var i = 0; i < newdata.length; i++) {
        var date1 = newdata[i]

        if (date1.getFullYear() == Y && date1.getMonth() == M && date1.getDate() == D) {
            count++
        }
    }
    return count;
    
/*     var count = 0;
    var date0 = d;//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date0.getFullYear();
    var M = date0.getMonth();
    var D = date0.getDate();
    var H = date0.getHours();
    var m = date0.getMinutes();
    for (var i = 0; i < newdata.length; i++) {
        var date1 = newdata[i];

        if (date1.getFullYear() == Y && date1.getMonth() == M && date1.getDate() == D&& date1.getHours()==H && Math.floor(date1.getMinutes()/10)==Math.floor(m/10)) {
            count++
        }
    }
    return count; */
}

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
function timestampToTime2(timestamp) {
    var date = new Date(timestamp*1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes();
    var s = date.getSeconds();
    return new Date(Y + M + D + h );/*+ h + m + s*/
}

function searchchild(d, nodes) {  
    var current = d;
    if (current.children.length > 0) {
        for (var j = 0; j < current.children.length; j++) {
            nodes.push({ uid: current.children[j].uid, t: current.children[j].t, text: current.children[j].text, size: 1 });
            if (current.children[j].children.length > 0) {
                searchchild(current.children[j], nodes);
            }
        }
    }
    
}
window.nodes1 = new Array();
window.datecount1 = new Array();
window.nodes2 = new Array();
window.datecount2 = new Array();
window.nodes3 = new Array();
window.datecount3 = new Array();
window.nodes3 = new Array();
window.datecount3 = new Array();
window.nodes4 = new Array();
window.datecount4 = new Array();
window.nodes5 = new Array();
window.datecount5 = new Array();

window.data = new Array();



//title_list = ["海底捞申请池底捞海底捡等商标","男子10秒内2次躲过死神","周迅王一博电影质感封面","梁静茹方承认恋情","朱梓骁表演深渊巨口"];
d3.json("data/emapdata.json")
    .then(function prelude(d) {
        var data = new Array();
        console.log("start!");
        if (!d.treeArray) {
            data = d.children;
        }
        else {
            data = d.treeArray;
        }
        //for (i = 0; i < data.length; i++) {
        //    data[i].t = timestampToTime(data[i].t);
        //}

        for (var i = 0; i < data.length; i++) {
            let cnode = data[i];
            
            nodes1.push({ uid: cnode.uid, t: cnode.t, text: cnode.text, size: 1 });
            searchchild(cnode,nodes1);
        }

        

        var newdata = new Array()
        for (i = 0; i < nodes1.length; i++) {
            newdata.push(timestampToTime1(nodes1[i].t));
        }

        newdata.sort(function (a, b) { return a.getTime() - b.getTime() });
        
        var max = 0;
        for (var j = 0; j < newdata.length; j++) {
            let v = count(newdata[j],newdata);
            datecount1.push({ date: newdata[j], value: v });
            if (v > max) {
                max = v;
            }
                
        }
        d3.json("data/dongmingzhuMergedTree.json")
    .then(function prelude(d) {
        var data = new Array();
        console.log("start!");
        if (!d.treeArray) {
            data = d.children;
        }
        else {
            data = d.treeArray;
        }
        //for (i = 0; i < data.length; i++) {
        //    data[i].t = timestampToTime(data[i].t);
        //}

        for (var i = 0; i < data.length; i++) {
            let cnode = data[i];
            
            nodes2.push({ uid: cnode.uid, t: cnode.t, text: cnode.text, size: 1 });
            searchchild(cnode,nodes2);
        }

        

        var newdata = new Array()
        for (i = 0; i < nodes2.length; i++) {
            newdata.push(timestampToTime1(nodes2[i].t));
        }

        newdata.sort(function (a, b) { return a.getTime() - b.getTime() });
        
        var max = 0;
        for (var j = 0; j < newdata.length; j++) {
            let v = count(newdata[j],newdata);
            datecount2.push({ date: newdata[j], value: v });
            if (v > max) {
                max = v;
            }
                
        }
        d3.json("data/fenxiaogangMergedTree.json")
    .then(function prelude(d) {
    var data = new Array();
    console.log("start!");
    if (!d.treeArray) {
        data = d.children;
    }
    else {
        data = d.treeArray;
    }
    //for (i = 0; i < data.length; i++) {
    //    data[i].t = timestampToTime(data[i].t);
    //}


    for (var i = 0; i < data.length; i++) {
        let cnode = data[i];
        
        nodes3.push({ uid: cnode.uid, t: cnode.t, text: cnode.text, size: 1 });
        searchchild(cnode,nodes3);
    }

    

    var newdata = new Array()
    for (i = 0; i < nodes3.length; i++) {
        newdata.push(timestampToTime1(nodes3[i].t));
    }

    newdata.sort(function (a, b) { return a.getTime() - b.getTime() });
    
    var max = 0;
    for (var j = 0; j < newdata.length; j++) {
        let v = count(newdata[j],newdata);
        datecount3.push({ date: newdata[j], value: v });
        if (v > max) {
            max = v;
        }
            
    }
    d3.json("data/liukaiweiMergedTree.json")
    .then(function prelude(d) {
    var data = new Array();
    console.log("start!");
    if (!d.treeArray) {
        data = d.children;
    }
    else {
        data = d.treeArray;
    }
    //for (i = 0; i < data.length; i++) {
    //    data[i].t = timestampToTime(data[i].t);
    //}

    for (var i = 0; i < data.length; i++) {
        let cnode = data[i];
        
        nodes4.push({ uid: cnode.uid, t: cnode.t, text: cnode.text, size: 1 });
        searchchild(cnode,nodes4);
    }

    

    var newdata = new Array()
    for (i = 0; i < nodes4.length; i++) {
        newdata.push(timestampToTime1(nodes4[i].t));
    }

    newdata.sort(function (a, b) { return a.getTime() - b.getTime() });
    
    var max = 0;
    for (var j = 0; j < newdata.length; j++) {
        let v = count(newdata[j],newdata);
        datecount4.push({ date: newdata[j], value: v });
        if (v > max) {
            max = v;
        }
            
    }
    d3.json("data/zhongguancunMergedTree.json")
    .then(function prelude(d) {
    var data = new Array();
    console.log("start!");
    if (!d.treeArray) {
        data = d.children;
    }
    else {
        data = d.treeArray;
    }
    //for (i = 0; i < data.length; i++) {
    //    data[i].t = timestampToTime(data[i].t);
    //}

    for (var i = 0; i < data.length; i++) {
        let cnode = data[i];
        
        nodes5.push({ uid: cnode.uid, t: cnode.t, text: cnode.text, size: 1 });
        searchchild(cnode,nodes5);
    }

    

    var newdata = new Array()
    for (i = 0; i < nodes5.length; i++) {
        newdata.push(timestampToTime1(nodes5[i].t));
    }

    newdata.sort(function (a, b) { return a.getTime() - b.getTime() });
    
    var max = 0;
    for (var j = 0; j < newdata.length; j++) {
        let v = count(newdata[j],newdata);
        datecount5.push({ date: newdata[j], value: v });
        if (v > max) {
            max = v;
        }
            
    }




    var data = new Array();   
    var i = datecount1[0].date;
    const datecounts1 = datecount1;
    const datecounts2 = datecount2;
    const datecounts3 = datecount3;
    const datecounts4 = datecount4;
    const datecounts5 = datecount5;
    while(i - datecounts1[datecounts1.length-1].date!=0){
        let V1 = 0;
        let V2 = 0;
        let V3 = 0;
        let V4 = 0;
        let V5 = 0;
        for(var j=0;j<datecounts1.length;j+=datecounts1[j].value){
            if(i - datecounts1[j].date==0){
                V1=datecounts1[j].value;
                break;
            }
        }
        for(var j=0;j<datecounts2.length;j+=datecounts2[j].value){
            if(i - datecounts2[j].date==0){
                V2=datecounts2[j].value;
                break;
            }
        }
        for(var j=0;j<datecounts3.length;j+=datecounts3[j].value){
            if(i - datecounts3[j].date==0){
                V3=datecounts3[j].value;
                break;
            }
        }
        for(var j=0;j<datecounts4.length;j+=datecounts4[j].value){
            if(i - datecounts4[j].date==0){
                V4=datecounts4[j].value;
                break;
            }
        }
        for(var j=0;j<datecounts5.length;j+=datecounts5[j].value){
            if(i - datecounts5[j].date==0){
                V5=datecounts5[j].value;
                break;
            }
        }
        data.push({date:i, '纱布门':V1, '董明珠':V2, '冯小刚喊话王健林':V3, '刘恺威疑似出轨':V4, '中关村校园欺凌':V5 })

        i = i.setDate(i.getDate()+1);
        i = new Date(i);
        
    }
    /*var max_1 = d3.max(data, (d)=>d.E1);
    var max_2 = d3.max(data, (d)=>d.E2);
    var max_3 = d3.max(data, (d)=>d.E3);
    var max_4 = d3.max(data, (d)=>d.E4);
    var max_5 = d3.max(data, (d)=>d.E5);
    var max = d3.max([max_1, max_2, max_3, max_4, max_5]);
    var min = 0;
    for(var i=0;i<data.length;i++){
        data[i].E1 =Math.max(0,(data[i].E1-min)/(max-min)*100);
        data[i].E2 = Math.max(0,(data[i].E2-min)/(max-min)*100);
        data[i].E3 = Math.max(0,(data[i].E3-min)/(max-min)*100);
        data[i].E4 = Math.max(0,(data[i].E4-min)/(max-min)*100);
        data[i].E5 = Math.max(0,(data[i].E5-min)/(max-min)*100);
    }*/

    /* ----------------------------配置参数------------------------  */
    const chart = new Chart();
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
            .on('click', (function(d){
                window.E = d.key;
                drawword();
            }))
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




});
});
});

});
});








