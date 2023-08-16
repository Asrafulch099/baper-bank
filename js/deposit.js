document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

  const currentDepositeTotal = previousDepositTotal + newDepositAmmount;

    depositTotalElement.innerText = currentDepositeTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalabceTotalString = balanceTotalElement.innerText;
  const previousBalabceTotal = parseFloat(previousBalabceTotalString);

  const currentBalanceTotal = previousBalabceTotal + newDepositAmmount;
  balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';

})