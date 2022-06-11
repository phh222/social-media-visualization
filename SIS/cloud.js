

var word = new Array();
var words_list=[]
for (var i = 0; i < 12; i++) {
    words_list.push({});
}
var color_w = [];
    //eel.word(nodes);
var color_w = d3.scaleOrdinal(d3.schemePaired);

    eel.expose(deal)
    function deal(word){
        var mark = 0;
        for (var i=0; i<word.length; i++){
            
            if (word[i][0]=="辣笔"){
                words_list[i]["text"]="辣笔小球"
                words_list[i]["size"]=(word[i][1]-word[19][1])*30/(word[0][1]-word[19][1])+20;
            }
            else{
                if (word[i][0]=="小球"){mark = 1;}
                else {
                    words_list[i-mark]["text"]=word[i][0];
                    words_list[i-mark]["size"]=(word[i][1]-word[19][1])*30/(word[0][1]-word[19][1])+20;
                }
                
            }
           
            
        
        }
        
        words_list["辣笔小球"] = words_list["辣笔"];
        delete words_list["辣笔"];
        delete words_list["小球"];    
    }

    function drawword (){
        
        window.nodes=[];
        window.datecount = [];

    if(E == '纱布门'){
       d3.json("data/emapdata.json")
        .then(function prelude(d) {
            //if (document.getElementsByClassName('svg0')) clearword();
            //if (document.getElementsByClassName('svg4')) clearuser();
            console.log("start!");
            if (!d.treeArray) {
                data.treeArray = d.children;
            }
            else {
                data = d;
            }
            console.log(data);
            start = Date.parse(datecount1[0].date)
            end = Date.parse(datecount1[datecount1.length-1].date)
            for (i = 0; i < data.treeArray.length; i++) {
                cnode = data.treeArray[i];

                    nodes.push({ uid: cnode.uid, name:cnode.name,t: cnode.t, text: cnode.text, tr: cnode.tr });
                
                searchchild1(cnode, nodes);
            }
            datecount = datecount1;

            function searchchild1(d, nodes) {
                var current = d;
                if (current.children.length > 0) {
                    for (var j = 0; j < current.children.length; j++) {

                        if (current.children[j].t * 1000 <= end && current.children[j].t * 1000 >= start) {

                            nodes.push({ uid: current.children[j].uid, name: current.children[j].name, t: current.children[j].t, text: current.children[j].text, tr: current.children[j].tr });

                        }
                        if (current.children[j].children.length > 0) {
                            searchchild1(current.children[j], nodes);
                        }
                    }
                }
            }
            eel.word(nodes);
        eel.user(nodes);
        /*nodes1=[];
        d3.json("total_new.json")
        .then(function prelude(d) {
            
            data = d;
            console.log(data);
            start = Date.parse(scale.map(x2.invert, x2)[0])
            end = Date.parse(scale.map(x2.invert, x2)[1])
            for (i = 0; i < data.length; i++) {
                cnode = data[i].blog;

                if(Date.parse(cnode.created_at)<=end&&Date.parse(cnode.created_at)>=start && cnode.raw_text.indexOf("刑拘")!=-1){
                    nodes1.push({ uid: cnode.user.id, name:cnode.user.screen_name,t: Date.parse(cnode.created_at), text: cnode.raw_text });
                    }
                }
    
            eel.word(nodes1);
            eel.user(nodes1);*//*}
            ) */
           /* var nodes = [];
            if(E == '纱布门'){nodes = nodes1;}
            if(E == '董明珠'){nodes = nodes2;}
            if(E == '冯小刚喊话王健林'){nodes = nodes3;}
            if(E == '刘恺威疑似出轨'){nodes = nodes4;}
            if(E == '中关村校园欺凌'){nodes = nodes5;}
            eel.word(nodes);
            eel.user(nodes);*/
    })}

    if(E == '董明珠'){
        d3.json("data/dongmingzhuMergedTree.json")
        .then(function prelude(d) {
            //if (document.getElementsByClassName('svg0')) clearword();
            //if (document.getElementsByClassName('svg4')) clearuser();
            console.log("start!");
            if (!d.treeArray) {
                data.treeArray = d.children;
            }
            else {
                data = d;
            }
            console.log(data);
            start = Date.parse(datecount2[0].date)
            end = Date.parse(datecount2[datecount2.length-1].date)
            for (i = 0; i < data.treeArray.length; i++) {
                cnode = data.treeArray[i];

                    nodes.push({ uid: cnode.uid, name:cnode.name,t: cnode.t, text: cnode.text, tr: cnode.tr });
                
                searchchild1(cnode, nodes);
            }
            datecount = datecount2;
            function searchchild1(d, nodes) {
                var current = d;
                if (current.children.length > 0) {
                    for (var j = 0; j < current.children.length; j++) {

                        if (current.children[j].t * 1000 <= end && current.children[j].t * 1000 >= start) {

                            nodes.push({ uid: current.children[j].uid, name: current.children[j].name, t: current.children[j].t, text: current.children[j].text, tr: current.children[j].tr });

                        }
                        if (current.children[j].children.length > 0) {
                            searchchild1(current.children[j], nodes);
                        }
                    }
                }
            }
            eel.word(nodes);
        eel.user(nodes);
        })
    }
    if(E == '冯小刚喊话王健林'){
        d3.json("data/fenxiaogangMergedTree.json")
        .then(function prelude(d) {
            //if (document.getElementsByClassName('svg0')) clearword();
            //if (document.getElementsByClassName('svg4')) clearuser();
            console.log("start!");
            if (!d.treeArray) {
                data.treeArray = d.children;
            }
            else {
                data = d;
            }
            console.log(data);
            start = Date.parse(datecount3[0].date)
            end = Date.parse(datecount3[datecount3.length-1].date)
            for (i = 0; i < data.treeArray.length; i++) {
                cnode = data.treeArray[i];

                    nodes.push({ uid: cnode.uid, name:cnode.name,t: cnode.t, text: cnode.text, tr: cnode.tr });
                
                searchchild1(cnode, nodes);
            }
            datecount = datecount3;
            function searchchild1(d, nodes) {
                var current = d;
                if (current.children.length > 0) {
                    for (var j = 0; j < current.children.length; j++) {

                        if (current.children[j].t * 1000 <= end && current.children[j].t * 1000 >= start) {

                            nodes.push({ uid: current.children[j].uid, name: current.children[j].name, t: current.children[j].t, text: current.children[j].text, tr: current.children[j].tr });

                        }
                        if (current.children[j].children.length > 0) {
                            searchchild1(current.children[j], nodes);
                        }
                    }
                }
            }
            eel.word(nodes);
        eel.user(nodes);
        })
    }
    if(E == '刘恺威疑似出轨'){
        d3.json("data/liukaiweiMergedTree.json")
        .then(function prelude(d) {
            //if (document.getElementsByClassName('svg0')) clearword();
            //if (document.getElementsByClassName('svg4')) clearuser();
            console.log("start!");
            if (!d.treeArray) {
                data.treeArray = d.children;
            }
            else {
                data = d;
            }
            console.log(data);
            start = Date.parse(datecount4[0].date)
            end = Date.parse(datecount4[datecount4.length-1].date)
            for (i = 0; i < data.treeArray.length; i++) {
                cnode = data.treeArray[i];

                    nodes.push({ uid: cnode.uid, name:cnode.name,t: cnode.t, text: cnode.text, tr: cnode.tr });
                
                searchchild1(cnode, nodes);
            }
            datecount = datecount4;
            function searchchild1(d, nodes) {
                var current = d;
                if (current.children.length > 0) {
                    for (var j = 0; j < current.children.length; j++) {

                        if (current.children[j].t * 1000 <= end && current.children[j].t * 1000 >= start) {

                            nodes.push({ uid: current.children[j].uid, name: current.children[j].name, t: current.children[j].t, text: current.children[j].text, tr: current.children[j].tr });

                        }
                        if (current.children[j].children.length > 0) {
                            searchchild1(current.children[j], nodes);
                        }
                    }
                }
            }
            eel.word(nodes);
        eel.user(nodes);
        })
    }
    if(E == '中关村校园欺凌'){
        d3.json("data/zhongguancunMergedTree.json")
        .then(function prelude(d) {
            //if (document.getElementsByClassName('svg0')) clearword();
            //if (document.getElementsByClassName('svg4')) clearuser();
            console.log("start!");
            if (!d.treeArray) {
                data.treeArray = d.children;
            }
            else {
                data = d;
            }
            console.log(data);
            start = Date.parse(datecount5[0].date)
            end = Date.parse(datecount5[datecount5.length-1].date)
            for (i = 0; i < data.treeArray.length; i++) {
                cnode = data.treeArray[i];

                    nodes.push({ uid: cnode.uid, name:cnode.name,t: cnode.t, text: cnode.text, tr: cnode.tr });
                
                searchchild1(cnode, nodes);
            }
            datecount = datecount5;
            function searchchild1(d, nodes) {
                var current = d;
                if (current.children.length > 0) {
                    for (var j = 0; j < current.children.length; j++) {

                        if (current.children[j].t * 1000 <= end && current.children[j].t * 1000 >= start) {

                            nodes.push({ uid: current.children[j].uid, name: current.children[j].name, t: current.children[j].t, text: current.children[j].text, tr: current.children[j].tr });

                        }
                        if (current.children[j].children.length > 0) {
                            searchchild1(current.children[j], nodes);
                        }
                    }
                }
            }
            eel.word(nodes);
        eel.user(nodes);
        })
    }

}

/*var words_list = [
        {text:"医院", size:'40'},
        {text:"医生", size:'30'},
        {text:"山东", size:'28.2'},
        {text:"纱布", size:'27'},
        {text:"媒体", size:'21.5'},
        {text:"生活", size:'21.3'},
        {text:"回复", size:'18.3'},
        {text:"记者", size:'16.6'},
        {text:"患者", size:'16.2'},
        {text:"医疗", size:'13.3'},
        {text:"电视台", size:'12'},
    ];*/

    window.keywordlist = [];
    
var fill = d3.schemePaired;
    eel.expose(run)
    function run(){
        layout = d3.layout.cloud()
        .size([400, 420])  //size([x,y]) 词云显示的大小
        .words(words_list)
        .padding(5)
        .rotate(function() { return ~~(Math.random() * 2) * 0; })
        .font("Impact")
        .fontSize(function(d) { return d.size; })
        .on("end", draw);
        layout.start();
    }
function draw(words) {
    color = [];
    d3.select("body").append("svg")
        .attr("class", "svg0")
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function (d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function (d, i) { color.push([d.text, color_w(i)]); return 'black'; })
        .attr("text-anchor", "middle")
        .attr("transform", function (d) {
            return "translate(" + [d.x - 2, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function (d) { return d.text; })
        .on("click", function ( c,  i) {
            if (keywordlist.indexOf(c.text) == -1) {
                keywordlist.push(c.text);
                for (j = 0; j < color.length; j++) {
                    if (color[j][0] == c.text) {
                        var fill1 = color[j][1];
                        break;
                    }
                }
                d3.select(this).style(
                    'fill', fill1
                )
            } else {
                keywordlist = keywordlist.reduce((arr, keyword) => keyword == c.text ? arr : [...arr, keyword], [])
                d3.select(this).style(
                    'fill', 'black'
                )
            }
        });
}
    function show(){
        alert(keywordlist);
    }
