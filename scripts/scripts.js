/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/*home page button*/
const StartedBtn = document.getElementById("Started");
if(StartedBtn){
    StartedBtn.addEventListener("click", () => {
        window.location.href = "menu.html";
    });
}

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
    selectedGroup = part.classList.contains('head')? 'head' : 'body';
    updateHighlights();
});

function updateHighlights(){
    document.querySelectorAll('.symptoms li').forEach(li => {
        const group = li.getAttribute('data-group');
        li.classList.toggle('highlight', group === selectedGroup);
    });
}

});






/*Migraine interact modal*/
document.addEventListener("DOMContentLoaded", function (){
const modal = document.getElementById("cross");
const btn = document.getElementById("cross-btn");
const span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}

});
