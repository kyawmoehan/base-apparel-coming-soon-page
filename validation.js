const input = document.querySelector('input');
const btn = document.querySelector('button');
const invalidEmail = document.querySelector('.form p');
const erroImg = document.querySelector('.error');

const pattern = {
    email: /^([a-z\d\._]+)@([a-z\d_]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};


function validate(field,regex ){
    if(regex.test(field)) {
        invalidEmail.textContent = '';
        erroImg.classList.remove('error-show');
    }else{
        invalidEmail.textContent = 'Please provide a valid email';
        erroImg.classList.add('error-show');
    }
}

btn.addEventListener('click', (e) => {
    const value = input.value;
    validate(value, pattern["email"]);
});