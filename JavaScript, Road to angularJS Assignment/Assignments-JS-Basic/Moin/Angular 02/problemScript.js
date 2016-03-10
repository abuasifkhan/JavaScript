/**
 * Created by asif on 10/02/16.
 */
'use strict';


function  frominputSource(){
    var str = document.getElementById('input').value.split(' ');
    var b=str.map(function(item){
        return parseInt(item, 10);
    });
    /*var mySplitResult = b.split(" ");
        for(var i = 0; i < mySplitResult.length; i++)
           {
                document.getElementById("doc").innerHTML =mySplitResult[i]);
           }*/
     document.getElementById("doc").innerHTML = b;
    }
