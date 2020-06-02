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

//Add rows check
if(addRows < 0)
{
    alert("Invalid Input! Can't add a negative number of rows!")
}
else if(addRows !== 0 ||  addRows !== '')
{
    addNewRows(addRows);    
}

//Add columns check
if(addColumns < 0)
{
    alert("Invalid Input! Can't add a negative number of columns!")
}
else if(addColumns !== 0 || addColumns !== '')
{
    addNewColumns(addColumns);    
}

//Remove rows check
if(removeRows < 0 || removeRows > rows)
{
    alert("Invalid Input! Can't remove a negative number of rows!")
}
else if(removeRows !== 0)
{    
    removeTableRows(removeRows);
}

//Remove columns check
if(removeColumns < 0 || removeColumns > columns)
{
    alert("Invalid Input! Can't remove a negative number of columns!")
}
else if(removeColumns !== 0)
{    
    removeTableColumns(removeColumns);
}


//reset values
addColumns = 0;
removeRows = 0;
removeRows = 0;
removeColumns = 0;
document.getElementById("addRows").value = '';
document.getElementById("addColumns").value = '';
document.getElementById("removeRows").value = '';
document.getElementById("removeColumns").value = '';
});


//Adds new rows in the table
function addNewRows(numRows)
{    
    for(let i = rows; i < rows + numRows; i++)
    {
        
        let newRow = tbl.insertRow(i);
        newRow.setAttribute("id", "row"+i.toString());
        for(let j = 0; j < columns; j ++)
        {
            
            let newCell = newRow.insertCell(j); 
            newCell.innerHTML = j.toString();            
        }

    }
    
    //update number of rows
    rows += numRows;
}

//Adds new columns in the table
function addNewColumns(numCol)
{
    for(let i = 0; i < rows; i++)
    {
        let currentRow = document.getElementById("row"+i.toString());
        for(let j = columns; j < columns + numCol; j++)
        {            
            let newCell = currentRow.insertCell(j); 
            newCell.innerHTML = j.toString();            
        }
    }

    //update number of columns
    columns += numCol;
}

//Removes rows in the table
function removeTableRows(numRows)
{    
    for(let i = rows - 1; i > rows - numRows - 1; i--)
    {         
        tbl.deleteRow(i);
    }

    rows -= numRows;
}


//Removes columns in the table
function removeTableColumns(numCol)
{
    for(let i = 0; i < rows; i++)
    {
        let currentRow = document.getElementById("row"+i.toString());
        for(let j = columns - 1; j >= columns - numCol; j--)
        {            
            currentRow.deleteCell(j);    
        }
    }

    //update number of columns
    columns -= numCol;
}