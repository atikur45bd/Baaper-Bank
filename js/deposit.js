    document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-amount');
    const stringDepositAmount = depositInput.value;
    const depositAmount = parseFloat(stringDepositAmount);
    depositInput.value = '';
    const displayDeposit= document.getElementById('display-deposit');
    const stringDepositTotal= displayDeposit.innerText;
    const previousDepositTotal= parseFloat(stringDepositTotal);
    const newTotalDeposit= depositAmount+previousDepositTotal;
    displayDeposit.innerText=newTotalDeposit;

    //update balance
    const displayBalanceTotal= document.getElementById('display-balance');
    const stringBalanceTotal= displayBalanceTotal.innerText;
    const previousDisplayBalanceTotal= parseFloat(stringBalanceTotal);
    const newTotalDepositBalance= depositAmount+previousDisplayBalanceTotal;
    displayBalanceTotal.innerText=newTotalDepositBalance;

})
