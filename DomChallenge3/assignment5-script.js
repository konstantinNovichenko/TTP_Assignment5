let addRows = 0;
let addColumns = 0;
let removeRows = 0;
let removeColumns = 0;
let rows = 0;
let columns = 0;
let buttonS = document.getElementById("button-submit");
let tbl = document.getElementById("grid-table");

buttonS.addEventListener("click", function(event){
addRows = Number(document.getElementById("addRows").value);
addColumns = Number(document.getElementById("addColumns").value);
removeRows = Number(document.getElementById("removeRows").value);
removeColumns = Number(document.getElementById("removeColumns").value);

console.log(typeof addRows);
console.log(typeof addColumns);

if(addRows < 0)
{
    alert("Invalid Input! Can't add a negative number of rows!")
}
else if(addRows !== 0 ||  addRows !== '')
{
    addNewRows(addRows);
    rowStart = 1;
}

if(addColumns < 0)
{
    alert("Invalid Input! Can't add a negative number of columns!")
}
else if(addColumns !== 0 || addColumns !== '')
{
    addNewColumns(addColumns);
    columnStart = 1;
}



addColumns = 0;
removeRows = 0;
removeRows = 0;
removeColumns = 0;
document.getElementById("addRows").value = '';
document.getElementById("addColumns").value = '';
document.getElementById("removeRows").value = '';
document.getElementById("removeColumns").value = '';
});


function addNewRows(numRows)
{
    console.log("addNewRows");
    console.log("Rows: " + rows + "numRows: " + numRows);
    console.log("Columns: " + columns);
    for(let i = rows; i < rows + numRows; i++)
    {
        
        let newRow = tbl.insertRow(i);
        newRow.setAttribute("id", "row"+i.toString());
        for(let j = 0; j < columns; j ++)
        {
            
            let newCell = newRow.insertCell(j); 
            newCell.innerHTML = j.toString();
            newCell.style.borderColor = "black";
        }

    }
    
    rows += numRows;
}


function addNewColumns(numCol)
{
    console.log("addNewColumns");
    console.log("Columns: " + columns + "numCol: " + numCol);
    for(let i = 0; i < rows; i++)
    {
        console.log("Row: " + i.toString());
        let currentRow = document.getElementById("row"+i.toString());
        for(let j = columns; j < columns + numCol; j++)
        {
            console.log("j loop: " + j);
            let newCell = currentRow.insertCell(j); 
            newCell.innerHTML = j.toString();
            newCell.style.borderColor = "black";
        }

    }

    columns += numCol;
}