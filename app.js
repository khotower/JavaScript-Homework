// from data.js
var tableData = data;



// YOUR CODE HERE!

//let newRow= document.createElement("tr")
//let tableRow= document.querySelector("#ufo-table>thead")
//console.log(tableRow);
//tableRow.append(newRow);

//let tableRow1= document.querySelectorAll("#ufo-table>thead>tr")

for(let i=0;i<tableData.length;i++){

 let newRow= document.createElement("tr")
let tableRow= document.querySelector("#ufo-table>thead")
//console.log(tableRow);
tableRow.append(newRow);

let tableRow1= document.querySelectorAll("#ufo-table>thead>tr")


let datecol= document.createElement("td");
datecol.innerText=tableData[i].datetime;
tableRow1[i+1].append(datecol);

let citycol= document.createElement("td");
citycol.innerText=tableData[i].city;
tableRow1[i+1].append(citycol);

let statecol= document.createElement("td");
statecol.innerText=tableData[i].state;
tableRow1[i+1].append(statecol);

let Countrycol= document.createElement("td");
Countrycol.innerText=tableData[i].country;
tableRow1[i+1].append(Countrycol);

let Shapecol= document.createElement("td");
Shapecol.innerText=tableData[i].shape;
tableRow1[i+1].append(Shapecol);

let Durationcol= document.createElement("td");
Durationcol.innerText=tableData[i].durationMinutes;
tableRow1[i+1].append(Durationcol);

let Commentscol= document.createElement("td");
Commentscol.innerText=tableData[i].comments;
tableRow1[i+1].append(Commentscol);

}


let filterbutton=document.getElementById("filter-btn")
filterbutton.addEventListener("click", function(){
    let inputdata=document.getElementById("datetime")
    let filterdata=inputdata.value;

    console.log("enter dta"+filterdata)
    let tableRow1= document.querySelectorAll("#ufo-table>thead>tr")
    
   //console.log("column data"+columnRow1.textContent)
   // console.log("column data"+tableRow1[0].textContent)
     for(let i=1;i<tableRow1.length;i++){
        let columnRow1= tableRow1[i].firstElementChild;

        if(columnRow1.textContent!==filterdata){
           
            tableRow1[i].style.display="none";
        }else{
            
        }

     }

})





