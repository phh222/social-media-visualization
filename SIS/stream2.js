var quickSort1 = function(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot_d = arr.splice(pivotIndex, 1)[0]
    var pivot = pivot_d.x;
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].x < pivot) {
        left.push(arr[i]);
        } else {
        right.push(arr[i]);
        }
    }
    return quickSort1(left).concat([pivot_d], quickSort1(right));
};
function num(text, keyword){
    var index = text.indexOf(keyword);
    var num = 0;
    while(index !== -1) {
        num++; // 每出现一次 次数加一
        index = text.indexOf(keyword,index + 1); // 从字符串出现的位置的下一位置开始继续查找
    }
    return num;
}
//data = [[],[],[],[],[],[],[],[],[],[],[]];
function stream2(){
var data = new Array();

//data1 = [];
//data2 = [];
var dict = {};
var relationship = {};
//keywordlist = ["医院", "医生", "山东", "纱布"];
//keyuid = ["3743622090",'3171830177','1907166177','1591684244','2593097581','2038000243','5670024759','5071470693','2532036733','1150434204','2293271880'];
//keyuid = ["3743622090",'3171830177','1907166177','1591684244','2593097581'];
var keyname = new Array();
for(i = 0; i<keyuid.length; i++){
    data.push(new Array());
}
users_list=[{},{},{},{},{},{},{},{},{},{}];

            //for (i = 0; i < data.length; i++) {
            //    data[i].t = timestampToTime(data[i].t);
            //}
    //start = Date.parse(scale.map(x2.invert, x2)[0])
    //end = Date.parse(scale.map(x2.invert, x2)[1])

    //var dateParse = d3.time.format("%Y/%m/%d %H:%M").parse;
    for(i=0;i<nodes.length;i++){
        uid = nodes[i].uid;
        time = nodes[i].t*1000;
        name = nodes[i].name;
        //hotness = (d[i].hotness-16435)/(6392754-16435);
        //time = Date.parse(d[i].time);
        //time = (time-1604487600000)/(1604544180000-1604487600000)*1000
        text = nodes[i].text;
        if (keyuid.indexOf(uid)!=-1){
            /*if(text.indexOf(keywordlist[0])!=-1){
                //keyword=keywordlist[0];
                keyword = 1;
            }
            else{//keyword=keywordlist[1];
                keyword = 2;
            }*/
            relationship[uid]=name;
            max = 0;
            index = 0;
            for(j=0;j<keywordlist.length;j++){
                number = num(text, keywordlist[j]);
                if(number>max){
                    max = number;
                    index = j;
                }
            }
            keyword = keywordlist[index];
            data[keyuid.indexOf(uid)].push({'x':time,'y':name,'keyword':keyword})
            dict[time]=keyword;
        }
        
        
        
    }
    for(i = 0; i<data.length; i++){
        data[i] = quickSort1(data[i]);
    }
    for(i = 0; i<keyuid.length; i++){
        keyname.push(relationship[keyuid[i]]);
    }
/*data1 = data;
data2 = data;
for(i=0;i<data.length;i++){
    for(j=0;j<data[i].length;j++){
        data1[i][j].y=parseInt(data1[i][j].y)+data[i][j].hotness/2
        data2[i][j].y=parseInt(data2[i][j].y)-data[i][j].hotness/2
    }
}*/
      
    /*var colors = [
    'steelblue',
    'green',
    'red',
    'purple'
];*/
    //var colors = d3.scale.category20().range();
    var colors = d3.scaleOrdinal(d3.schemePaired).range();
var margin = {top: 50, right: 60, bottom: 30, left: 100},
        width =1000 - margin.left - margin.right,
        //height = 500 - margin.top - margin.bottom;
        height = 400;
var keyuid_range =new Array;
for(i=keyuid.length;i>0;i--){
    keyuid_range.push(i*height/keyuid.length);
}

//for(i=0;i<data.length;i++){
//    max_t = data[i][data[i].length-1].x;
//    min_t = data[i][0].x;
//    bath = 4
//    step = (max_t-min_t)/bath;
//    for(j=0;j<data[i].length;j++){
//        if(data[i][j].x){}
//    }
//    for(j=0;j<bath;j++){
//        down = min_t+j*step ;
//        up =  min_t+(j+1)*step;
//    }
//}

/*var x = d3.scale.linear()
        .domain([1604487600000, 1604544180000])
        .range([0, width]);

var y = d3.scale.linear()
        .domain([-1, 4000000])
        .range([height, 0]);*/

var x = d3.scaleTime()
        //.domain([start, end])
        .domain([datecount[0].date, datecount[datecount.length-1].date])
        .range([0, width]);
        

var y = d3.scaleOrdinal()
        .domain(keyname)
        .range(keyuid_range);
//x轴设置
var xAxis = d3.axisBottom(x)
        //.tickFormat(d3.time.format("%Y/%m/%d %H:%M"))
        ;

//y轴设置
var yAxis = d3.axisLeft(y)
        /*.tickPadding(10)
        .tickSize(-width)
        .tickSubdivide(true)*/
        ;

//缩放拖拽
var zoom = d3.zoom()
        .scaleExtent([-10, 10])//可缩放的范围
        .on("zoom", zoomed);

    var svg6 = d3.select("body").append("svg")
        .attr("class", "svg6")
        .call(zoom)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg6.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

svg6.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg6.append("g")
        .attr("class", "y axis")
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", (-margin.left) + 10)
        .attr("x", -height / 2)
        .text('Key Users')
        .attr("font-size", 30);

svg6.append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", width)
        .attr("height", height);

var line2 = d3.line()
        .curve(d3.curveBasis)
        .x(function(d) { return x(d.x); })
        .y(function(d) { return y(d.y); });

/*var line2 = d3.svg6.line()
        .interpolate("linear")
        .x(function(d) { return x(d.x); })
        .y(function(d) { return y(d.y-d.hotness/2); });  */      

svg6.selectAll('.line')
        .data(data)
        .enter()
        .append("path")
        .attr("class", "line")
        //.attr("clip-path", "url(#clip)")
        .attr('stroke', function(d,i){
            for (k = 0; k < color_u.length; k++) {
                if (color_u[k][1] == d[0].y) {
                    var fill1 = color_u[k][2];
                    return fill1;
                }
            }
            return "black";
        })
        .style("stroke-width",5)
        .attr("d", line2)
        //.attr("d", line2);

var points = svg6.selectAll('.dots')
        .data(data)
        .enter()
        .append("g")
        .attr("class", "dots");

/*svg6.selectAll('.path')
*/
points.selectAll('.dot')
        .data(function(d, index){
            var a = [];
            d.forEach(function(point,i){
                a.push({'index': index, 'point': point});
            });
            return a;
        })
        .enter()
        .append('circle')
        .attr('class','dot')
        .attr("r", 5)
    .attr('fill', function (d, i) {
        for (k = 0; k < color.length; k++) {
            if (color[k][0] == dict[d.point.x]) {
                var fill1 = color[k][1];
                return fill1;
            }
        }
        return "black";
        }
)
        .attr("transform", function(d) {
            return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
        )

        .on("mouseover",function(d,i){
            svg6
                .append('text')
                .attr("x",x(d.point.x))
                .attr("id","keyword")
                .attr("y",y(d.point.y))
                .style('font-weight', 500)
                .style('font-family', 'Arial')
                .style('font-size',30)
                .style('stroke-width',30)
                .style('fill', 'black')
                .text(d.point.keyword)
        })
        .on("mouseout",function(d,i){
            d3.select("#keyword").remove();
        })
        ;

    function add_keyword(x,y,keyword){
        svg6
            .append('text')
            .attr("x",x)
            .attr("y",y)
            .style('font-weight', 500)
            .style('font-family', 'Arial')
            .style('font-size',15)
            .style('stroke-width',20)
            .style('fill', 'black')
            .text(keyword)
    }
        for(i = 0;i<data.length;i++){
            let l=data[i].length;
            let p_x = x(data[i][0].x);
            let p_y = y(data[i][0].y);
            let keyword = data[i][0].keyword;
            add_keyword(p_x,p_y,keyword);
            for(var j = 0;j<l;j++){
                if(x(data[i][j].x)-p_x>40){
                    p_x = x(data[i][j].x);
                    p_y = y(data[i][j].y);
                    keyword = data[i][j].keyword;
                    add_keyword(p_x,p_y,keyword);
                }
            }
            /*svg6
            .append('text')
            .attr("x",x(data[i][0].x))
            .attr("y",y(data[i][0].y))
            .style('font-weight', 500)
            .style('font-family', 'Arial')
            .style('font-size',20)
            .style('stroke-width',20)
            .style('fill', 'black')
            .text(data[i][0].keyword)
            svg6
            .append('text')
            .attr("x",x(data[i][Math.round(l/2)].x))
            .attr("y",y(data[i][Math.round(l/2)].y))
            .style('font-weight', 500)
            .style('font-family', 'Arial')
            .style('font-size',20)
            .style('stroke-width',20)
            .style('fill', 'black')
            .text(data[i][Math.round(l/2)].keyword)
            svg6
            .append('text')
            .attr("x",x(data[i][l-1].x))
            .attr("y",y(data[i][l-1].y))
            .style('font-weight', 500)
            .style('font-family', 'Arial')
            .style('font-size',20)
            .style('stroke-width',20)
            .style('fill', 'black')
            .text(data[i][l-1].keyword)*/
    }

function zoomed() {
    svg6.select(".x.axis").call(xAxis);
    svg6.select(".y.axis").call(yAxis);
    svg6.selectAll('path.line').attr('d', line2);
    //svg6.selectAll('path.line').attr('d', line2);

    points.selectAll('circle').attr("transform", function(d) {
        return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
    );
}
      
}
