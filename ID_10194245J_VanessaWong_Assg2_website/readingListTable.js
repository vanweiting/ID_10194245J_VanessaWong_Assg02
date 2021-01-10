// JavaScript Document
var rIndex,
    table = document.getElementById("table");

function addHtmlTableRow()
{
  var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    number = document.getElementById("number").value,
    btitle = document.getElementById("btitle").value,
    rating = document.getElementById("rating").value;
  
  cell1.innerHTML = number;
  cell2.innerHTML = btitle;
  cell3.innerHTML = rating;

  selectedRowToInput();
}

function selectedRowToInput()
{
  
  for(var i = 1; i < table.row.length; i++)
  {
    table.rows[i].onclick = function()
    {
      rIndex = this.rowIndex;
      document.getElementById("number").value = this.cells[0].innerHTML;
      document.getElementById("btitle").value = this.cells[1].innerHTML;
      document.getElementById("rating").value = this.cells[2].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTableSelectedRow()
{
  var number = document.getElementById("number").value,
      btitle = document.getElementById("btitle").value,
      rating = document.getElementById("rating").value;

  table.rows[rIndex].cells[0].innerHTML = number;
  table.rows[rIndex].cells[1].innerHTML = btitle;
  table.rows[rIndex].cells[2].innerHTML = rating;
}

function removeSelectedRow()
{
  table.deleteRow(rIndex);

  document.getElementById("number").value="";
  document.getElementById("btitle").value="";
  document.getElementById("rating").value="";
}