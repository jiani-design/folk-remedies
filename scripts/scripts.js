/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */


/*menu interact*/
const tooltip =document.getElementById("tooltip");
let selectedGroup = null;
document.querySelectorAll('svg path[id]').forEach(path => {
    const partId = path.id;

    const originalFill = path.getAttribute('fill');
    path.setAttribute('data-original-fill', originalFill);

    path.addEventListener('mouseenter', () => {
        if(selectedGroup !== partId){
            path.setAttribute('fill', '#D45A5A');
            path.setAttribute('fill-opacity', '1');
        }
    });
    
    path.addEventListener('mouseleave', () => {

        /*
        path.setAttribute('fill', path.getAttribute('data-original-fill'));
        path.setAttribute('fill-opacity', '1');*/

        if(selectedGroup !== partId){
            path.setAttribute('fill', path.getAttribute('data-original-fill'));
            path.setAttribute('fill-opacity', '1');
        }
    });

    path.addEventListener('click', () => {
        selectedGroup = partId;
        /*console.log("Clicked:", selectedGroup);*/
        document.querySelectorAll('svg path[id]').forEach(p => {
            p.setAttribute('fill', p.getAttribute('data-original-fill'));
            p.setAttribute('fill-opacity', '1')
        });

        path.setAttribute('fill', '#B44343');
        path.setAttribute('fill-opacity', '1');
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



/*jump to menu*/
document.addEventListener("DOMContentLoaded", function(){
    const modalHome =document.getElementById("started");
    const goBack = document.querySelector(".go-back");
    const startBtn = document.getElementById("Started");
    const home = document.getElementById("home");
    const banner = document.querySelector(".banner");

    goBack.addEventListener("click", function (){
        modalHome.style.display = "none";
        home.style.display = "block";
        banner.style.display = "block";
        window.scrollTo({top: 0, behavior:"smooth"});  
    });

    startBtn.addEventListener("click", function(){
        modalHome.style.display ="block";
        home.style.display = "none";
        banner.style.display = "none";
    

        const scrollPage =modalHome.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: scrollPage,
            behavior: "smooth"

        });
        
        /*modalHome.scrollIntoView({behavior: "smooth", block: "start"});*/
    });

    if(window.location.hash === "#started"){
        modalHome.style.display = "block";
        home.style.display = "none";
        banner.style.display = "none";
        window.history.replaceState(null,null, 'index.html');
    }
});


document.addEventListener("DOMContentLoaded", function(){
    const modal = document.querySelectorAll(".modal");
    const closeBtn = document.querySelectorAll(".close-btn");

    document.addEventListener("keydown", function(e){
        if(e.key === "Escape"){
            closeAllModals();
        }
    });

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

    closeBtn.forEach(span => {
        span.addEventListener("click", function(){
            closeAllModals();
        });
    });

    const btnModalOne =document.getElementById("btn-one");
    btnModalOne.addEventListener("click", function(){
        closeAllModals();
        document.getElementById("one").style.display = "block";
    });

    const btnModalTwo = document.getElementById("btn-two");
    btnModalTwo.addEventListener("click", function(){
        closeAllModals();
        document.getElementById("two").style.display = "block";
    });

    const btnModalThree = document.getElementById("btn-three");
    btnModalThree.addEventListener("click", function(){
        closeAllModals();
        document.getElementById("three").style.display = "block";
    });
 
    
});
    


