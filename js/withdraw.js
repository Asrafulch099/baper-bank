document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalabceTotalString = balanceTotalElement.innerText;
    const previousBalabceTotal = parseFloat(previousBalabceTotalString);

    const newBalanceTotal = previousBalabceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value = '';
})