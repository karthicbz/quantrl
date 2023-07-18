const quantrlSection = document.getElementById('new-quantrl');
const submitButton = document.getElementById('submit-button');
const errorList = document.getElementById('error-list');

window.addEventListener('load', ()=>{
    (errorList.childElementCount > 0)?
    quantrlSection.style.opacity=1:
    quantrlSection.style.opacity=0;
})