function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);

    inputField.value = '';
    return inputAmount;
}

function displayTotalValue(display, dipositAmount) {
    const displayTotal = document.getElementById(display);
    const displayTotalText = displayTotal.innerText;
    const updatedDisplayValue = parseFloat(displayTotalText);

    displayTotal.innerText = dipositAmount + updatedDisplayValue;
    // console.log(displayTotal.innerText);
}

function updateBalance(display, isAdd) {
    const balanceTotal = document.getElementById('balance-display');
    const balanceTotalText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceTotalText);
    // console.log(balanceTotalText);


    if (isAdd == true) {
        balanceTotal.innerText = balanceAmount + display;
    }
    else {
        balanceTotal.innerText = balanceAmount - display;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('user-deposit');
    // console.log(depositAmount);


    displayTotalValue('deposit-display', depositAmount);

    // const balanceTotal = document.getElementById('balance-display');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceAmount = parseFloat(balanceTotalText);
    // // console.log(balanceTotalText);

    // balanceTotal.innerText = balanceAmount + depositAmount;
    updateBalance(depositAmount, true);

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('user-withdraw');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('user-withdraw')

    displayTotalValue('withdraw-display', withdrawAmount);

    updateBalance(withdrawAmount, false);
    // const balanceTotal = document.getElementById('balance-display');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceAmount = parseFloat(balanceTotalText);

})