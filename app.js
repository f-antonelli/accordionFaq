const d = document;

const accordion = d.querySelectorAll('.faq');
const answers = d.querySelectorAll('.faq-answer');

accordion.forEach(e => {
    e.addEventListener('click', () => {

        if(e.classList.contains('active')) {
            e.classList.toggle('active');
        } else {
            accordion.forEach(e => {
                e.classList.remove('active');
            });
            e.classList.toggle('active');
        }
    });
});
