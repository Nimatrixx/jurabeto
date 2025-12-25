document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('job-application-form');
    const phoneInput = form.querySelector('input[type="tel"]');

    // regex pattern for iranian phone numbers
    const phoneRegex = /^(09[0-9]{9}|۰۹[۰-۹]{9})$/;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // validate phone number
        const phoneValue = phoneInput.value.trim();
        let isPhoneValid = false;

        // check if phone is empty
        if (!phoneValue) {
            phoneInput.style.borderColor = '#ff4444';
            phoneInput.nextElementSibling?.remove();
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'شماره موبایل الزامی است';
            errorMsg.style.color = '#ff4444';
            errorMsg.style.fontSize = '0.85rem';
            errorMsg.style.marginTop = '5px';
            phoneInput.parentNode.appendChild(errorMsg);
            isPhoneValid = false;
        }
        // validate phone format
        else if (!phoneRegex.test(phoneValue)) {
            phoneInput.style.borderColor = '#ff4444';
            phoneInput.nextElementSibling?.remove();
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'شماره موبایل معتبر نیست (مثال: 09123456789)';
            errorMsg.style.color = '#ff4444';
            errorMsg.style.fontSize = '0.85rem';
            errorMsg.style.marginTop = '5px';
            phoneInput.parentNode.appendChild(errorMsg);
            isPhoneValid = false;
        }
        // phone is valid
        else {
            phoneInput.style.borderColor = '#4CAF50';
            phoneInput.nextElementSibling?.remove();
            isPhoneValid = true;
        }

        // validate other required fields
        const requiredInputs = form.querySelectorAll('input[required]:not([type="tel"]), select[required], textarea[required]');
        let otherFieldsValid = true;

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ff4444';
                otherFieldsValid = false;
            } else {
                input.style.borderColor = '#4CAF50';
            }
        });

        // check if all validations passed
        if (isPhoneValid && otherFieldsValid) {
            // show success message
            alert('درخواست شما با موفقیت ثبت شد!');
            form.reset();

            // reset all border colors
            form.querySelectorAll('.form-input').forEach(input => {
                input.style.borderColor = '#e0e0e0';
            });

            // remove any error messages
            form.querySelectorAll('.error-message').forEach(msg => msg.remove());
        } else if (!isPhoneValid) {
            alert('لطفاً شماره موبایل معتبر وارد کنید.');
            phoneInput.focus();
        } else {
            alert('لطفاً تمام فیلدهای الزامی را پر کنید.');
        }
    });

    // real-time phone validation on input
    phoneInput.addEventListener('input', function () {
        const value = this.value.trim();

        // remove previous error message
        this.nextElementSibling?.remove();

        // validate as user types
        if (value && !phoneRegex.test(value)) {
            this.style.borderColor = '#ff9800'; // warning color
        } else if (value && phoneRegex.test(value)) {
            this.style.borderColor = '#4CAF50'; // success color
        } else {
            this.style.borderColor = '#e0e0e0'; // default
        }
    });

    // allow only digits and persian/english numbers
    phoneInput.addEventListener('keypress', function (e) {
        const char = String.fromCharCode(e.keyCode || e.which);
        const allowedChars = /[0-9۰-۹]/;

        if (!allowedChars.test(char)) {
            e.preventDefault();
        }
    });

    // reset border color on other inputs
    form.querySelectorAll('.form-input:not([type="tel"])').forEach(input => {
        input.addEventListener('input', function () {
            this.style.borderColor = '#e0e0e0';
            this.nextElementSibling?.remove();
        });
    });
});