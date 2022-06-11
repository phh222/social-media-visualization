
var users_list=[{},{},{},{},{},{},{},{},{},{}];
//eel.user(nodes)
var userlabel = [[],[]];

eel.expose(deal_u)
function deal_u(important_user, rela) {
        for (i=0; i<9; i++){
            users_list[i]["uid"]=important_user[i][0];
            users_list[i]['text'] = rela[important_user[i][0]]
            users_list[i]["size"] = important_user[i][1]
            
            //users_list[i]["size"]=(important_user[i][1]-important_user[9][1])*30/(important_user[0][1]-important_user[9][1])+15;
        }
    }
var fill_u = d3.schemeCategory10
window.keyuid = []; ;  //输出20种类别的颜色 ---颜色比例尺
eel.expose(run_u)
function run_u() {
    const data = users_list;
    color_u = []
    //横轴的比例尺
    const xScale = d3.scaleLinear().domain([0, d3.max(data, d => d.size)]).range([0, 400]);
    //纵轴的比例尺
    //padding(0.1)：0.1表示的1%，预留出1%的位置
    const yScale = d3.scaleBand().domain(data.map(d => d.text)).range([100, 420]).padding(0.1);

    const g =     d3.select("body")
    .append("svg")
    .attr("class","svg4")
        .attr("width", 600)
        .attr("height", 400)

    const xAxis = d3.axisTop(xScale);
    const yAxis = d3.axisLeft(yScale);

    g.append('g').call(yAxis).attr('transform', `translate(100, 0)`);
    g.append('g').call(xAxis).attr('transform', `translate(100, 100)`)
    data.forEach(function (d, i) {
        color_u.push([d.uid, d.text, fill_u[i]]);
        g.append('rect')
            .attr('transform', `translate(100, 0)`)
            .attr('width', xScale(d.size))
            .attr('height', yScale.bandwidth())
            .attr('id',d.text)
            .style("fill", 'black')
            .attr("stroke-width", 1)
            .attr('y', yScale(d.text))
            .on("click", (function (d) {
                for(j=0;j<10;j++){
                    if (this.id == users_list[j]['text'] && keyuid.indexOf(users_list[j]['uid']) == -1) {
                        keyuid.push(users_list[j]['uid']);
                        for (k = 0; k < color_u.length; k++) {
                            if (color_u[k][1] == this.id) {
                                var fill1 = color_u[k][2];
                                break;
                            }
                        }
                        d3.select(this).style(
                            'fill', fill1
                        )
                    } else if (this.id == users_list[j]['text']) {
                        keyuid = keyuid.reduce((arr, uid) => uid == users_list[j]['uid'] ? arr : [...arr, uid], [])
                        d3.select(this).style(
                            'fill', 'black'
                        )
                    }
                }
                
            }));
    })

}

function draw_u(users) {


    //d3.select("body")
    //.append("svg")
    //.attr("class","svg4")
    //    .attr("width", layout_u.size()[0])
    //    .attr("height", layout_u.size()[1])
    //    .append("g")
    //    .call(yAxis)
    //    .call(xAxis).attr('transform', `translate(0, ${innerHeight})`)
    //    .attr("transform", "translate(" + layout_u.size()[0] / 2 + "," + layout_u.size()[1] / 2 + ")")
    //    .selectAll("text")
    //    .data(users, function (d) { return d; })
    //    .enter()
    //    .append('rect')
    //    .attr('width', xScale(d.size))
    //    .attr('height', yScale.bandwidth())
    //    .attr('y', yScale(d.uid))
    //    .style("fill", function (d, i) {
    //        color_u.push([d.uid, d.text, fill_u[i]]);
    //        return fill_u[i];
    //        return 'black';
    //    })
    //    .attr("text-anchor", "middle")
    //    .text(function(d) { return d.text; })
        //.on("click", function(d,c){
        //    for(i=0;i<10;i++){
        //        if (d.target.innerHTML == users_list[i]['text'] && keyuid.indexOf(users_list[i]['uid'])==-1){
        //            keyuid.push(users_list[i]['uid']);
        //        }

        //        for (j = 0; j < color_u.length; j++) {
        //            if (color_u[j][1] == c.text) {
        //                var fill1 = color_u[j][2];
        //                break;
        //            }
        //        }
        //        d3.select(this).style(
        //            'fill', fill1
        //        )
        //    }
        //});
}
