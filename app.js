(function(){

 let screen = document.querySelector('.screen');
 let buttons = document.querySelectorAll('.btn');
 let clear = document.querySelector('.btn-clear');
 let equal = document.querySelector('.equal');

// document.querySelector(".equal").style.background = "green";
// equal.style.borderRadius = "50%";


buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equal.addEventListener('click', function(e){
    if (screen.value === ''){
        screen.value = "Please enter";
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

clear.addEventListener('click', function(e){
     screen.value = "";
})


})();


