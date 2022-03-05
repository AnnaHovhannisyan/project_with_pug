window.onload=function() {
    let regexp= new RegExp(/\D/, 'gi');
    let input2=document.getElementById('dropdown1');

    input2.addEventListener('keydown',function (event) {


        if(input2.value.length === 0) {
            if (!(event.key === '0')) {
                event.preventDefault();

            }
        }
        if(input2.value.length === 0 || input2.value.length === 1) {

            document.getElementById("myDropdown1").style.visibility = 'visible';
            if (!(event.key === '0')) {
                event.preventDefault();

            }
        }
        let lists=document.querySelectorAll('li');
        for (let li of lists) {
            li.onclick=function(){
                input2.value += this.innerHTML;
                let dr=document.getElementById('myDropdown1');
                dr.style.visibility='hidden';
                input2.focus()
            }
        }

        if(input2.value.length > 0){

            if(regexp.test(input2.value)){
                event.preventDefault();
                input2.value='';
            }

        }

    });



};