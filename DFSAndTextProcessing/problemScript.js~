/**
 * Created by asif on 10/02/16.
 */
'use strict';

var Edge = function (x, y, z, a) {
    return{
        U:x,
        V:y,
        W:z,
        Message: a,
        Depth: 0
    }
}

var g;

// Compare function
function compare (a,b){
    if(a.W> b.W)return -1;
    else if(a.W< b.W) return 1;
    else return 0;
}

// lol its a dfs code. :P
var dfs = function(u, depth){
    for(var kt=0;kt<g[u].length;kt++){
        var v = g[u][kt].V;
        for(var i=0;i<depth;i++)
            document.write("-");
        document.write(v.toString());
        document.write(" ");
        document.write(g[u][kt].Message);
        document.write("<br>");
        dfs(v,depth+1);
    }
}

function  doTheChores(){
    var raw = document.getElementById('input').value.split('\n');
    var test = parseInt(raw[0],10);
    var j=1;
    for(var i=1;i<=test;i++){
        var edges = parseInt(raw[j],10);
        j++;
        g=new Array(edges+1);
        for(var k=0;k<=edges;k++)
            g[k]=new Array();

        // String Processing and Graph Constructing
        for(var ttt=1;ttt<=edges;ttt++) {
            var message = "";
            var inp = "";
            var flag = false;
            for (var k=0; k < raw[j].length; k++) {
                if (raw[j][k] == '\"')
                    flag = true;
                if (flag == true)
                    message += raw[j][k];
                if (flag == false) inp += raw[j][k];
            }
            j++;

            //document.write(message);
            //document.write(" ");
            var temp = inp.split(" ");
            //document.write(temp);
            var u = parseInt(temp[0].toString(),10);
            var v = parseInt(temp[1].toString(),10);
            var w = parseInt(temp[2].toString(),10);
            var tmp = Edge(u,v,w,message);
            //document.write(tmp);
            g[u].push(tmp);
        }

        // sorting
        for(var k=0;k<=edges; k++)
            g[k].sort(compare);

        //Just Printing the adjacency list

        //for(var k=0;k<=edges;k++){
        //    document.write(k);
        //    document.write(": ");
        //    for(var kt=0;kt<g[k].length;kt++){
        //        document.write(g[k][kt].V);
        //        document.write(" ");
        //    }
        //    document.write("<br>");
        //}
        dfs(0,0);
        document.write("<br>");
    }
}
