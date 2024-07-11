document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputWithdraw= document.getElementById('withdraw-amount');
    const stringInputWithdraw= inputWithdraw.value;
    const newInputWithdraw= parseFloat(stringInputWithdraw);
    inputWithdraw.value='';
    const displayWithdraw= document.getElementById('display-withdraw');
    const stringDisplayWithdraw= displayWithdraw.innerText;
    const newDisplayWithdraw= parseFloat(stringDisplayWithdraw);
    const newTotalWithdraw= newInputWithdraw + newDisplayWithdraw;
    displayWithdraw.innerText= newTotalWithdraw;
    // update balance
    const displayBalance= document.getElementById('display-balance');
    const stringDisplayBalance= displayBalance.innerText;
    const newDisplayBalance= parseFloat(stringDisplayBalance);
    const newTotalBalance= newDisplayBalance - newInputWithdraw;
    displayBalance.innerText= newTotalBalance;
})