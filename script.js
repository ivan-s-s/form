const userName = document.querySelectorAll('.form_c');
userName.forEach(e => {
    e.addEventListener('focusout', i => validateInput(i));

    e.addEventListener('keydown', y => {
        console.log(y.keyCode);
        if (y.keyCode === 13) {
            let nextEl = y.nextElementSibling;
            console.log(nextEl);
            if (nextEl.nodeName === 'INPUT') {
                nextEl.focus();
            } else {
                alert('done');
            }
        }
    })
})

const myForm = document.getElementById('my-form');
myForm.noValidate = true;

myForm.addEventListener('submit', validateForm);

function validateInput(e) {
    const element = e.target;

    if (element.checkValidity()) {
        element.parentElement.classList.remove('invalid');
    } else {
        e.preventDefault();
        element.parentElement.classList.add('invalid');
    }
}

function validateForm(e) {
    const form = e.target;

    if (form.checkValidity()) {
        console.log('OOO');
    } else {
        e.preventDefault();

        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                i.parentElement.classList.remove('invalid');
            } else {
                i.parentElement.classList.add('invalid');
            }
        })


    }
}