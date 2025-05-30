const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');

let formData = {
    email: "",
    message: "",
}

const savedInfo = localStorage.getItem(STORAGE_KEY);
if (savedInfo) {
    formData = JSON.parse(savedInfo);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
}



form.addEventListener("input", handleTextAreaInput);

function handleTextAreaInput(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields!");
        return;
    } else {
    console.log(formData);
}
    formData = {
        email: "",
        message: "",
    }
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}