function useSelectors() {
    let box = document.querySelector(".box");
    box.style.border = "2px solid black";

    let firstPara = document.querySelector(".text");
    firstPara.style.color = "blue";

    let allPara = document.querySelectorAll(".text");
    allPara.forEach(function(p) {
        p.style.backgroundColor = "yellow";
    });
}