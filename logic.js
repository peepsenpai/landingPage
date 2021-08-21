//navbar toggling
$(document).ready(function(){
    $('#toggleBTN').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('toggleNAV');
    });
})

//read more or less button
const btn = document.querySelectorAll('.moreBTN');

btn.forEach(function(a){
    a.addEventListener('click' , function(){
        a.parentNode.classList.toggle('active')
    })
})

