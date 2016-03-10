"use strict";
function myFunction() {

    var inputText = document.getElementById("inputContainer").value;
    inputText = inputText.split('\n');

    var numberOfTestCases = inputText[0];
    var inputTestCases = inputText.slice(1, inputText.length);
    var testCasesList = new Array();

    var index = 0;
    var range = 0;
    for (var k = 0; k < numberOfTestCases; k++) {
        range = Number(inputTestCases[index]) + index;
        var sliceingTestCase = inputTestCases.slice(index, range + 1);
        testCasesList.push(sliceingTestCase);
        range += 1;
        index = range;
        console.log(sliceingTestCase);
    }
    function placeCommentIntoHtml(commentText) {

        var targetedElement = document.getElementById("commentDisplay");
        var paragraph = document.createElement("p");
        paragraph.setAttribute("style", "background-color:white;");
        var node = document.createTextNode(commentText);
        paragraph.appendChild(node);
        targetedElement.appendChild(paragraph);

    }

    for (var i = 0; i < numberOfTestCases; i++) {

        rearrangeingComments(testCasesList[i]);
       
        console.log("==========");


    }


    function rearrangeingComments(inputText) {
        var numberOfComments = inputText[0];
        var comments = new Array();

        for (var i = 1; i <= numberOfComments; i++) {

            var line = inputText[i].split(" ");
            var comment = {
                parentIndex: line[0],
                ownIndex: line[1],
                priority: line[2],
                commentText: line[3],
                toString: function () {
                    var element = "";

                    for (var j = 0; j < this.parentIndex; j++) {
                        element += "-" + " ";
                    }
                    element += this.ownIndex + " " + this.commentText;
                    return element;
                }
            }

            comments.push(comment);
        }

        function soryByOwnIndex(comment1, comment2) {

            if (comment1.ownIndex < comment2.ownIndex)
                return -1;
            else if (comment1.ownIndex > comment2.ownIndex)
                return 1;
            else return 0;
        }

        function sortByPriority(comment1, comment2) {
            if (comment1.priority > comment2.priority)
                return -1;
            else if (comment1.priority < comment2.priority)
                return 1;
            else if (comment1.priority == comment2.priority) {

                soryByOwnIndex(comment1, comment2);
            }

            return 0;
        }



        function sortByParentIndex(comment1, comment2) {
            if (comment1.parentIndex < comment2.parentIndex)
                return -1;
            else if (comment1.parentIndex > comment2.parentIndex)
                return 1;
            else if (comment1.parentIndex == comment2.parentIndex) {

                return sortByPriority(comment1, comment2);
            }

            return 0;
        }



        function printOutput(comments) {
            comments.sort(sortByParentIndex);


            for (var j = 0; j < comments.length; j++) {

                // console.log(comments[j]);
                console.log(comments[j].toString());
                placeCommentIntoHtml(comments[j].toString());

            }
            placeCommentIntoHtml("==========");
        }
        printOutput(comments);

    }


}


