function validateForm() {
    // Basic form validation
    const requiredFields = ['name', 'email', 'phone', 'guests', 'date', 'time'];
    for (let field of requiredFields) {
        if (!document.getElementById(field).value) {
            alert('Please fill out all required fields');
            return false;
        }
    }
    return true;
}