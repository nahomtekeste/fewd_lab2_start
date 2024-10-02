let currentNode;

function addNewParagraph() {
  
  // Create a new paragraph element
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph.";

  // Find the first paragraph element in the document
  let firstParagraph = document.getElementsByTagName("p")[0];

  // If a first paragraph exists, insert the new paragraph before it
  if (firstParagraph) {
    firstParagraph.parentNode.insertBefore(newParagraph, firstParagraph);
  } else {
    // If no paragraphs exist, append the new paragraph to the body
    document.body.appendChild(newParagraph);
  }
}

function domView() {
  let i;
  let nodeList;
  let output = "";

  //<p> elements
  nodeList = document.getElementsByTagName("p");
  output = "<h4> List of paragraphs<h4>"; 
  
  //to be completed

  for(let i = 0 ; i <nodeList.length; i++){
    output += `<li>Paragraph ${i + 1}: ${nodeList[i].textContent}</li>`;
  }

  output += "</ul>";
  
  currentNode = document.getElementById("domview");
  currentNode.innerHTML = output;
  currentNode.style.visibility = "visible";
}

// provide this
function domHide() {
  currentNode = document.getElementById("domview");
  currentNode.style.visibility = "hidden";
}

function alterCell() {
  // Find the table in the DOM (assuming there's only one table in the document)
  let table = document.getElementsByTagName("table")[0];

  // Check if the table and the first row exist
  if (table && table.rows.length > 0) {
    // Get the first row of the table
    let firstRow = table.rows[0];

    // Check if the first row has at least two cells (columns)
    if (firstRow.cells.length > 1) {
      // Change the content of the second cell in the first row
      firstRow.cells[1].innerHTML = '<span id="redcell" style="color: red;">This table cell has been altered</span>';
    }
  }
}

window.onload = function () {
  document.getElementById("listdom").onclick = domView;
  document.getElementById("hidedom").onclick = domHide;
  document.getElementById("addpara").onclick = addNewParagraph;
  document.getElementById("altercell").onclick = alterCell;
};
