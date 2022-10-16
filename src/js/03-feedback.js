import throttle from 'lodash.throttle';


const formData = {};
const UnSubmitedData = {
    email: '',
    message: '',
};
const formRef = document.querySelector('.feedback-form');
const textAreaRef = document.querySelector('[name = "message"]');
const emailFieldRef = document.querySelector('[name = "email"] ');
const savedItems = localStorage.getItem("feedback-form-state");
const parseItems = JSON.parse(savedItems);


parseItems.email !== undefined ? emailFieldRef.value = parseItems.email : emailFieldRef.value = '';
parseItems.message !== undefined ? textAreaRef.value = parseItems.message : textAreaRef.value = ''; 




formRef.addEventListener('submit', onSubmit);
textAreaRef.addEventListener('input',  throttle(onMessageInput, 500));
emailFieldRef.addEventListener('input', throttle(onEmailInput, 500));


function onEmailInput(evt) {
    
    UnSubmitedData.email = evt.target.value;
    UnSubmitedData.message = textAreaRef.value;
    return localStorage.setItem("feedback-form-state", JSON.stringify(UnSubmitedData));

}

function onMessageInput(evt) {
    UnSubmitedData.email = emailFieldRef.value;
    UnSubmitedData.message = evt.target.value;
    return localStorage.setItem("feedback-form-state", JSON.stringify(UnSubmitedData));

}



function onSubmit(evt) {
    evt.preventDefault();
    formData.email = evt.target.email.value;
    formData.message = evt.target.message.value; 
    UnSubmitedData.email = ' ';
    UnSubmitedData.message = ' ';    
    localStorage.setItem("feedback-form-state", JSON.stringify(UnSubmitedData));
    evt.currentTarget.reset();
    
    console.log(formData);
    return formData;
}


