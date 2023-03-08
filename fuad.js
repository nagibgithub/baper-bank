function btnKeyUp(inputFieldID, btnID) {

    const inputValue = document.getElementById(inputFieldID).value;
    const btnField = document.getElementById(btnID);

    if (inputValue == '') {
        btnField.disabled = true;
        btnField.style.cursor = 'not-allowed';
        btnField.classList.replace('bg-blue-600', 'bg-blue-400');
    } else {
        btnField.disabled = false;
        btnField.classList.replace('bg-blue-400', 'bg-blue-600');
        btnField.style.cursor = 'pointer';
    }
}

function mainCalculation(isDeposit, depositInputId, depositOrWithdrawTotalId, btnID) {

    const inputField = document.getElementById(depositInputId);
    const depositOrWithdrawField = document.getElementById(depositOrWithdrawTotalId);
    const btnField = document.getElementById(btnID);
    const balanceField = document.getElementById('balance-total');

    if (inputField.value === '') {
        alert('Input Field is empty')
    } else if (inputField.value <= 0) {
        alert('Input number can not be negative')
    } else {

        const newDepositAmount = parseFloat(depositOrWithdrawField.innerText) + parseFloat(inputField.value);
        const newBalanceAmount = parseFloat(balanceField.innerText) + parseFloat(inputField.value);
        const newWithdrayBalanceAmount = parseFloat(balanceField.innerText) - parseFloat(inputField.value);

        if (isDeposit === true) {
            depositOrWithdrawField.innerText = newDepositAmount.toFixed(2);
            balanceField.innerText = newBalanceAmount.toFixed(2);
        } else {
            if (parseFloat(balanceField.innerText) >= parseFloat(inputField.value)) {
                depositOrWithdrawField.innerText = newDepositAmount;
                balanceField.innerText = newWithdrayBalanceAmount;
            } else {
                alert('withdraw can not be more than balance')
            }
        }
    }
    inputField.value = '';

    btnField.disabled = true;
    btnField.classList.replace('bg-blue-600', 'bg-blue-400');
    btnField.style.cursor = 'not-allowed';
}

function keypressEnter(isDeposit, depositInputId, depositOrWithdrawTotalId, btnID) {
    document.getElementById(depositInputId).addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            mainCalculation(isDeposit, depositInputId, depositOrWithdrawTotalId, btnID);
        }
    })
    document.getElementById(btnID).addEventListener('click', function(){
        console.log('click');
        mainCalculation(isDeposit, depositInputId, depositOrWithdrawTotalId, btnID);
    })
}




// Deposit input keypress call
keypressEnter(true, 'deposit-field', 'deposit-total', 'btn-deposit');

// withdraw input keypress call
keypressEnter(false, 'withdraw-field', 'withdraw-total', 'btn-withdraw');