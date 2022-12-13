const close = document.querySelector('div.modal div.close');
const modal = document.querySelector('div.modal');

close.addEventListener('click', e => {
    modal.style.display = 'none';
})