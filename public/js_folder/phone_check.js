// eslint-disable-next-line no-undef
window.onload = function() {
// eslint-disable-next-line no-undef
let input = document.getElementById('dropdown');
     let regexp = /\D/gi;
    

    input.addEventListener('keydown', (event)=> {

    if(input.value.length === 0) {
        if (!(event.key === '0')) {
             event.preventDefault();

        }
    }
    if(input.value.length === 0 || input.value.length === 1) {

        // eslint-disable-next-line no-undef
        document.getElementById("myDropdown").style.visibility = 'visible';
        if (!(event.key === '0')) {
             event.preventDefault();

        }
    }
    // eslint-disable-next-line no-undef
    let lists = Array.from(document.querySelectorAll('li'));


    // eslint-disable-next-line no-restricted-syntax
    for (let li of lists) {
        // eslint-disable-next-line no-loop-func
        li.onclick = function(){
            input.value += this.innerHTML;
            
            // eslint-disable-next-line no-undef
            let dr = document.getElementById('myDropdown');
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