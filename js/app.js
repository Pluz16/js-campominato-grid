const gridContainer = document.querySelector(".grid");
let btnPlay = document.querySelector("#play");

btnPlay.addEventListener("click", function(){

    gridContainer.innerHTML = "";

    gridContainer.classList.add("grid");
    gridContainer.style.visibility = "visible";



        for (let i = 1; i <= 100; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }

})
