import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(ev) {
  ev.preventDefault();
  console.log(ev.target.elements.state.value);
  console.log(ev.target.elements.delay.value);
}
