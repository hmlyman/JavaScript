let myInputElement = document.getElementById("myInput");
let myResultElement = document.getElementById("myResult");


myInputElement.addEventListener("input", ()=>{
    if (myInputElement.value % 2 == 0) {
        myResultElement.innerHTML = "Your number is even.";
    }
    else if (myInputElement.value % 2 != 0) {
        myResultElement.innerHTML = "Your number is odd.";
    }

});

