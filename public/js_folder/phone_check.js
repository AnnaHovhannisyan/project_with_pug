window.onload=function() {
let input=document.getElementById('dropdown');
    let regexp= new RegExp(/\D/, 'gi');

    input.addEventListener('keydown',function (event) {

    if(input.value.length === 0) {
        if (!(event.key === '0')) {
             event.preventDefault();


        }
    }
    if(input.value.length === 0 || input.value.length === 1) {

        document.getElementById("myDropdown").style.visibility = 'visible';
        if (!(event.key === '0')) {
             event.preventDefault();

        }
    }
    let lists=document.querySelectorAll('li');
    for (let li of lists) {
        li.onclick=function(){
            input.value += this.innerHTML;
            let dr=document.getElementById('myDropdown');
            dr.style.visibility='hidden';
            input.focus()
        }
    }
    if(input.value.length > 0){

        if(regexp.test(input.value)){
            event.preventDefault();
            input.value='';
        }


    }


})


};