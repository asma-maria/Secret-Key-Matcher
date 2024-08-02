document.addEventListener('DOMContentLoaded',()=>
{

    const keyGenerateBtn= document.getElementById("generateKeyBtn");
    const secretKeyOutput=document.getElementById("displayKey");
    const entryPin=document.getElementById("pinEntry");
    const keypadButtons = document.querySelectorAll('.keypad-btn');

    let displayKey='';

    //For Random  Secret Key generate 
    function generateSecretKey()
    {
        displayKey=Math.floor(100000+Math.random()*900000).toString();
        secretKeyOutput.textContent=displayKey;
        console.log(displayKey);
    }

    keyGenerateBtn.addEventListener('click',generateSecretKey);






})