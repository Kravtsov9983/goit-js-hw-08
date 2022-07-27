import { throttle, times, update } from 'lodash';

const STORAGE_KEY_FEEDBACK = 'feedback-form-state';

const dataObj = localStorage.getItem(STORAGE_KEY_FEEDBACK) ? JSON.parse(localStorage.getItem(STORAGE_KEY_FEEDBACK)) : {}

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");


function parsedObject() {
  if (localStorage) {
    const savedDataObj = localStorage.getItem(STORAGE_KEY_FEEDBACK);
    return JSON.parse(savedDataObj);
  }
}

function saveDataFormInObject(evt) {
  dataObj[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(dataObj));
}

function checkDataInStorage(data) {
  console.log(localStorage);
  if (data) {
    console.log(data);
    inputEl.value = data.email || '';
    textareaEl.value = data.message || '';
  }
}

function clearLocalStorage(event) {
  event.preventDefault();

  console.log(dataObj);
  console.log(dataObj.email);
  console.log(dataObj.message);

  formEl.reset();
  localStorage.removeItem(STORAGE_KEY_FEEDBACK);
}

checkDataInStorage(parsedObject());
formEl.addEventListener('input', throttle(saveDataFormInObject, 500));
formEl.addEventListener('submit', clearLocalStorage);         