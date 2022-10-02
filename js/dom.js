 // provide this
let currentNode;


 // provide skeleton
 function addNewParagraph() {
    currentNode = document.getElementById("paragraph1");
    input = document.getElementById("textarea1").value;
    const newNode = document.createElement("p");
    newNode.appendChild(document.createTextNode(input));
    currentNode.parentNode.insertBefore(newNode, currentNode);
 }

 // do not provide this
 function alterCell() {
    currentNode = document.getElementById("table1").rows[0].cells[1];
    const newContent = '<span id="redcell">This <strong>table cell</strong> has been altered</span>';
    currentNode.innerHTML = newContent;
 }

 // provide skeleton of this
 function domView() {
    let i;
    let nodeList;
    let output = "";

    //<p> elements
    nodeList = document.getElementsByTagName("p");
    output += "Paragraphs(" + nodeList.length + "):" + "<br>";
    for (i = 0; i < nodeList.length; i++) {
        if (nodeList[i].id != "") {
            output += nodeList[i].id + "<br>";
        }
        else {
            output += "(no id)" + "<br>";
        }
    }
    currentNode = document.getElementById("domview");
    currentNode.innerHTML = output;
    currentNode.style.visibility = "visible";
 }

 // provide this
 function domHide() {
    currentNode = document.getElementById("domview");
    currentNode.style.visibility = "hidden";
 }

 window.onload = function() {
    document.getElementById("listdom").onclick = domView;
    document.getElementById("hidedom").onclick = domHide;
    document.getElementById("addpara").onclick = addNewParagraph;
    document.getElementById("altercell").onclick = alterCell;
  };