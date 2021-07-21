const counter = document.getElementById('counter');
const span1 = document.getElementById('s1');

/* Script for Counter */
const updateCounter = () => {
    const targetCount = Number(counter.getAttribute("data-target"));
    
    const startingCount = parseInt(counter.innerHTML);

    const increment = targetCount/100;

    if(startingCount<targetCount){
        counter.innerHTML = `${Math.round(startingCount + increment)} <span id="s1" style="float:right;"><i class="fas fa-head-side-mask"></i></span>`;
        setTimeout(updateCounter,10)
    }else{
        counter.innerHTML = targetCount;
        counter.appendChild(span1);
    }

}

/* Function for Build Table */
var myArray;
const buildTable = (locationStats) =>{

    myArray=locationStats;
    var table = document.getElementById("myTable");
    
    table.innerHTML='';
    
    for(var i=0;i<locationStats.length;i++)
    {
        var row = `<tr>
                        <td scope="col">${locationStats[i].state}</td>
                        <td scope="col">${locationStats[i].country}</td>
                        <td scope="col">${locationStats[i].latestTotalCases}</td>
                        <td scope="col">${locationStats[i].differenceFromPrevDay}</td>
                    </tr>`;
        
        table.innerHTML += row; 
    }
    
}

const apiCall = () =>{
    const setHeader = {
        headers:{
            Accept: "application/json"
        }
    }

    fetch('http://localhost:8282/',setHeader)
    .then((res) => res.json() )
    .then((data) => {
        counter.innerHTML = 0;
        var x = `${data.totalReportedCases}`;
        counter.setAttribute("data-target",x);
        updateCounter();
        buildTable(data.locationStats);
    })
    .catch((error) => {
        console.log(error);
    })
}


window.addEventListener("load",apiCall);

/* Table Sorting */

$('th').on('click',function(){
    var column = $(this).data('column');
    var order = $(this).data('order');
    // console.log('column was clicked',column, order)
    
    if(order == 'desc'){
        $(this).data('order','asc')
        myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1);


    }else{
        $(this).data('order','desc')
        myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1);
        
    }
    
    buildTable(myArray);

})

