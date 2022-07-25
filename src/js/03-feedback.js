import { throttle, times, update } from 'lodash';

const form = document.querySelector(".feedback-form")
const LOCALSTORAGE_KEY = "feedback-form-state"

// form.addEventListener("input", throttle(savedAddInput, 500))
// form.addEventListener("submit", submitForm)

// updateInput()

// function savedAddInput(event) {
//     event.preventDefault()

//     const {email, massage} = event.currentTarget
// }