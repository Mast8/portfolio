(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    
    })();



//change color theme
document.querySelector(".theme-btn").addEventListener("click", () => {
    let mode = theme();
    console.log(mode)
    mode === "dark" ? light() : dark(); 
});

//activate color theme
mode();
function mode( ){
    let mode = theme();
    if (mode === "dark") 
        dark();
    else 
        light(); 
}

function theme(){
    return localStorage.getItem("mode");
}

function light(){
    document.body.classList.add("light-mode");
    localStorage.setItem("mode", "light");
}

function dark (){
    document.body.classList.remove("light-mode");
    localStorage.setItem("mode", "dark");
}

    




