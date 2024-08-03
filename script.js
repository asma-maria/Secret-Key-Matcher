document.addEventListener('DOMContentLoaded', () => {
    const generateKeyBtn = document.getElementById('generateKeyBtn');
    const secretKeyDisplay = document.getElementById('secretKey');
    const pinInput = document.getElementById('pinInput');
    const keypadButtons = document.querySelectorAll('.keypad-btn');
    const showMessage = document.getElementById('showMessage');
    let secretKey = '';

    function generateSecretKey() {
        secretKey = Math.floor(100000 + Math.random() * 900000).toString();
        secretKeyDisplay.innerHTML = secretKey;
        showMessage.innerHTML = '';
        pinInput.value = '';
    }
    generateKeyBtn.addEventListener('click', generateSecretKey);

    function checkPin() {
        if (pinInput.value === secretKey) {
            showMessage.innerHTML = '  <img src="check_mark_Png_Editor.png" alt="check icon" style="width: 15px; height: 15px;"> Your Secret Key is matched!';
            showMessage.style.color = 'green';
            showMessage.style.fontSize='25px';
        } else {
            showMessage.innerHTML = '  <img src="cross.jpg" alt="check icon" style="width: 15px; height: 15px;">  Incorrect Key!';
            showMessage.style.color = 'red';
            showMessage.style.fontSize='25px';
        }
    }

   

    keypadButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'clearBtn') {
                pinInput.value = '';
                showMessage.textContent = '';
            } else if (button.id === 'backspaceBtn') {
                pinInput.value = pinInput.value.slice(0, -1);
            } else if (button.id === 'submitBtn') {
                checkPin();
            } else {
                if (pinInput.value.length < 6) {
                    pinInput.value += button.textContent;
                }
            }
        });
    });
});
