export function saveFormData(formData) {
    if(Object.keys(formData).length){  // check if object is empty 
        let serializedJSON = JSON.stringify(formData);
        return localStorage.setItem('formData', serializedJSON);
    }
}

export function getFormData() {
    return JSON.parse(localStorage.getItem('formData'));
}