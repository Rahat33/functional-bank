function getInputValue() {
    const depositInput = document.getElementById('user-deposit');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    depositInput.value = '';
    return depositAmount;
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depositInput = document.getElementById('user-deposit');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmountText);
    const depositAmount = getInputValue();


    // update deposit total

    const depositTotal = document.getElementById('deposit-display');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = depositAmount + previousDepositTotal;
    // console.log(depositTotal.innerText);

    const balanceTotal = document.getElementById('balance-display');
    const balanceTotalText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceTotalText);
    // console.log(balanceTotalText);

    balanceTotal.innerText = balanceAmount + depositAmount;

    
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('user-withdraw');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-display');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;


    const balanceTotal = document.getElementById('balance-display');
    const balanceTotalText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = balanceAmount - withdrawAmount;

    withdrawInput.value = '';
})