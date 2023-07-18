const quantrlSection = document.getElementById('quantrl-section');
const newQuantrl = document.getElementById('new-quantrl');
const submitButton = document.getElementById('submit-button');
const errorList = document.getElementById('error-list');

window.addEventListener('load', ()=>{
    if(newQuantrl !== null){
        (newQuantrl.childElementCount > 0)?
        quantrlSection.style.opacity=1:
        quantrlSection.style.opacity=0;
    }

    if(errorList !== null){
        (errorList.childElementCount > 0)?
        quantrlSection.style.opacity=1:
        quantrlSection.style.opacity=0;
    }
})