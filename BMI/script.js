var age = document.getElementById('age');
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var male = document.getElementById('m');
var female = document.getElementById('f');
var form = document.getElementById('form');
let resultArea = document.querySelector('.comment');
let result1Area = document.querySelector('.comment1');

modalContent = document.querySelector('.modal-content');
modalText = document.querySelector('#modalText');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

function calculate() {
  if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
    modal.style.display = 'block';
    modalText.innerHTML = `Diharapkan Mengisi Semua tabel yang tertera!`;
  } else {
    countBmi();
    countBmr();
  }
}

function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push('male');
  } else if (female.checked) {
    p.push('female');
  }

  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  var result = '';
  if (bmi < 18.5) {
    result = 'Kekurangan Berat Badan';
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = 'Normal (Ideal)';
  } else if (25 <= bmi && bmi <= 29.9) {
    result = 'Kelebihan Berat Badan';
  } else if (30 <= bmi && bmi <= 34.9) {
    result = 'Obesitas';
  } else if (35 <= bmi) {
    result = 'Extremely obesitas';
  }

  resultArea.style.display = 'block';
  document.querySelector('.comment').innerHTML = `Anda <span id="comment">${result}</span>`;
  document.querySelector('#result').innerHTML = bmi.toFixed(2);
}

function countBmr() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push('male');
  } else if (female.checked) {
    p.push('female');
  }

  var bmr = 0;

  // Rumus perhitungan BMR untuk pria dan wanita
  if (p[3] === 'male') {
    bmr = 13.397 * weight.value + 66.5 + 5.003 * height.value - 6.75 * age.value;
  } else if (p[3] === 'female') {
    bmr = 9.563 * weight.value + 655 + 1.85 * height.value - 4.676 * age.value;
  }
  var bmr = bmr / 1000;
  result1Area.style.display = 'block';
  document.querySelector('#result1').innerHTML = bmr.toFixed(3) + ' kalori/hari';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
