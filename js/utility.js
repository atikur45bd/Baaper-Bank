
function inputFieldById(inputFieldID) {
    const inputField = document.getElementById(inputFieldID);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

function textFieldById(textFieldId) {
    const textField = document.getElementById(textFieldId);
    const textFieldString = textField.innerText;
    const textFieldValue = parseFloat(textFieldString);
    textField.value = '';
    return textFieldValue;
}

function setElementById(elementId, newValue){
    const textElement= document.getElementById(elementId);
    textElement.innerText= newValue;
}
