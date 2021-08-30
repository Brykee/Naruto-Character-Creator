// Prevent form postback with preventDefault
const submit = document.getElementById('submit');
const cb = document.getElementById('cb');

submit.addEventListener('click', function (e) {
  if (!cb.checked) {
    e.preventDefault();
    alert('Please verify your humanity at the bottom of the page.');
  }
});
