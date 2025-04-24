/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/*home page button*/
/*const StartedBtn = document.getElementById("Started");
if(StartedBtn){
    StartedBtn.addEventListener("click", () => {
        window.location.href = "menu.html";
    });
}*/

/*menu page interaction*/
/*document.addEventListener("DOMContentLoaded",()=> {
    const bodyParts = document.querySelectorAll(".body-part");

    bodyParts.forEach(part => {
        const symptoms = part.querySelectorAll(".symptom");

        part.addEventListener("mouseenter", () => {
            symptoms.forEach(symptom => {
                symptom.style.display ="block";
            });
        });

        part.addEventListener("mouseleave", () => {
            symptoms.forEach(symptom => {
                symptom.style.display ="none";
            });
        });
});

});*/

/*Menu Interact*/
const tooltip =document.getElementById("tooltip");
let selectedGroup = null;
document.querySelectorAll('svg path[id]').forEach(path => {
    const partId = path.id;

    path.addEventListener('mouseenter', () => {
        path.setAttribute('data-original-fill', path.getAttribute('fill'));
        path.setAttribute('fill', '#D45A5A');
        path.setAttribute('fill-opacity', '0.6');

    });
    
    path.addEventListener('mouseleave', () => {
        path.setAttribute('fill', path.getAttribute('data-original-fill'));
        path.setAttribute('fill-opacity', '1');
    });

    path.addEventListener('click', () => {
        selectedGroup = partId;
        console.log("Clicked:", selectedGroup);
        updateHighlights(selectedGroup);
    });
});

function updateHighlights(group){
    const allSymptoms = document.querySelectorAll('.symptoms li');

    allSymptoms.forEach(li => {
        const groupAttr = li.getAttribute('data-group');
        if(groupAttr === group){
            li.classList.add('visible');
        }else{
            li.classList.remove('visible');
        }
    });
}

/*
document.querySelectorAll('.part').forEach(part =>{
part.addEventListener('mousemove', (e) => {
    const label = part.getAttribute('data-label');
    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
    tooltip.style.display ='block';
    tooltip.innerText = label;
});

part.addEventListener('mouseleave', () => {
    tooltip.style.display='none';
});

part.addEventListener('click', () => {
    console.log('Clicked:', part);
    if(part.classList.contains('face')){
        selectedGroup = 'face';
    }
    else if(part.classList.contains('head')){
        selectedGroup = 'head';
    }
    else if(part.classList.contains('back')){
        selectedGroup = 'back';
    }
    else if(part.classList.contains('forehead')){
        selectedGroup = 'forehead';
    }
    else{
        selectedGroup = 'body';
    }

    updateHighlights();
});

/*function updateHighlights(){
    document.querySelectorAll('.symptoms li').forEach(li => {
        const group = li.getAttribute('data-group');
        li.classList.toggle('highlight', group === selectedGroup);
    });
}*/


/*
function updateHighlights(){
    document.querySelectorAll('.symptoms li').forEach(li => {
        const group = li.getAttribute('data-group');
        const match = group === selectedGroup;
        li.classList.toggle('highlight', match);
        li.classList.toggle('visible', match);
    });
}*/



/*jump to menu*/
document.addEventListener("DOMContentLoaded", function(){
    const modalHome =document.getElementById("started");
    const goBack = document.querySelector(".go-back");
    const startBtn = document.getElementById("Started");
    const home = document.getElementById("home");

    goBack.addEventListener('click', function (){
        modalHome.style.display = "none";
        home.style.display = "block";
        window.scrollTo({top: 0, behavior:"smooth"});  
    });

    startBtn.onclick = function(){
        modalHome.style.display ="block";
        home.style.display = "none";

        const scrollPage =modalHome.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: scrollPage,
            behavior: "smooth"

        });
        
        /*modalHome.scrollIntoView({behavior: "smooth", block: "start"});*/
    }


    /*document.getElementById("Started").onclick = function(){
        const modalStart = document.getElementById("started");
        modalStart.style.display = "block";
        modalStart.scrollIntoView({behavior: "smooth", block: "start"});
    };*/

});


document.addEventListener("DOMContentLoaded", function(){
    const modal = document.querySelectorAll(".modal");
    const closeBtn = document.querySelectorAll(".close-btn");

    function closeAllModals(){
        modal.forEach(modal => {
            modal.style.display = "none";
        });
    }

    document.addEventListener('click', function(e){
        if(e.target.classList.contains('close-btn')){
            closeAllModals();
        }
    });
    
    document.getElementById("btn-one").onclick = function (){
        closeAllModals();
        document.getElementById("one").style.display = "block";
    };
    
    document.getElementById("btn-two").onclick = function (){
        closeAllModals();
        document.getElementById("two").style.display = "block";
    };

    document.getElementById("btn-three").onclick = function (){
        closeAllModals();
        document.getElementById("three").style.display = "block";
    };

    closeBtn.forEach(span => {
        span.onclick = function (){
            closeAllModals();
        }
    })

});