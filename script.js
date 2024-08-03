document.addEventListener('DOMContentLoaded', () => {
    const generateKeyBtn = document.getElementById('generateKeyBtn');
    const secretKeyDisplay = document.getElementById('secretKey');
    const showMessage = document.getElementById('showMessage');
    let secretKey = '';
    const Input = document.getElementById('pinInput');
    const keypadButtons = document.querySelectorAll('.keypad-btn');



    function generateKey() {
        secretKey = Math.floor(100000 + Math.random() * 900000).toString();
        secretKeyDisplay.innerHTML = secretKey;
        showMessage.innerHTML = '';
        Input.value = '';
    }
    generateKeyBtn.addEventListener('click', generateKey);

    function checkPin() {
        if (Input.value == secretKey) {
            showMessage.innerHTML = '  <img src="correctIcon.png" alt="check icon" style="width: 15px; height: 15px;"> Your Secret Key is Matched!';
            showMessage.style.color = 'green';
            showMessage.style.fontSize='25px';
            showMessage.style.fontFamily='Times New Roman';
        } else {
            showMessage.innerHTML = '  <img src="cross-mark-in-the-red-square-free-vector.jpg" alt="check icon" style="width: 15px; height: 15px;"> Wrong Secret Key!';
            showMessage.style.color = 'red';
            showMessage.style.fontSize='25px';
            showMessage.style.fontFamily='Times New Roman';
        }
    }

   

    keypadButtons.forEach(button => {
        button.addEventListener('click', () => {

            if (button.id == 'clearBtn')
            {
                Input.value = '';
                showMessage.textContent = '';
            } 
            else if (button.id == 'backspaceBtn')
            {
                Input.value = Input.value.slice(0, -1);
            } 
            else if (button.id =='submitBtn') 
            {
                checkPin();
            } 
            else 
            {
                if (Input.value.length < 6)
                {
                    Input.value = Input.value +  button.textContent;
                }
            }
        });
    });
});
