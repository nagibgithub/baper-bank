document.getElementById("btn-deposit").addEventListener("click", function () {
  // console.log('click');
  const newDepositAmount = getInputFieldValueById("deposit-field");
  // console.log(newDepositAmount);
  const previousDepositTotal = getTextElementValueById("deposit-total");
  // console.log(previousDepositTotal);

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // console.log(newDepositTotal);
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  // setTextElementValueById("deposit-total", newDepositTotal);
  document.getElementById('deposit-total').innerText = newDepositTotal;

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  console.log(previousBalanceTotal);
  
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  console.log(newBalanceTotal);

  document.getElementById('balance-total').innerText = newBalanceTotal;

  document.getElementById('deposit-field').value = "";

  // setTextElementValueById("balance-total", newBalanceTotal);
});