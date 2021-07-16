

/* Script for Counter */

const counter = document.getElementById('counter');
const span1 = document.getElementById('s1');

counter.innerHTML= 0;


const updateCounter = () => {
    const targetCount = Number(counter.getAttribute('data-target'));
    
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

updateCounter();