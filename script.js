const container = document.querySelector('.container');
const count = document.getElementById ('count');
const amount= document.getElementById ('amount');

container.addEventListener('click', function(e){
if(e.target.classList.contains('seat')&& !(e.target.classList.contains('reserved'))){
e.target.classList.toggle('selected');

let selectedSeatCount = container.querySelectorAll('.seat.selected').length;

}

});

