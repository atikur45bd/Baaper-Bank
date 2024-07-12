document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputWithdraw=inputFieldById('withdraw-amount');
    const displayWithdraw = textFieldById('display-withdraw');

    const newTotalWithdraw= inputWithdraw + displayWithdraw;
    setElementById('display-withdraw',newTotalWithdraw);
    const previousBalance= textFieldById('display-balance');
    const totalBalance= previousBalance - inputWithdraw;
    setElementById('display-balance',totalBalance);


    // const inputWithdraw= document.getElementById('withdraw-amount');
    // const stringInputWithdraw= inputWithdraw.value;
    // const newInputWithdraw= parseFloat(stringInputWithdraw);
    // inputWithdraw.value='';
    // const displayWithdraw= document.getElementById('display-withdraw');
    // const stringDisplayWithdraw= displayWithdraw.innerText;
    // const newDisplayWithdraw= parseFloat(stringDisplayWithdraw);
    // const newTotalWithdraw= newInputWithdraw + newDisplayWithdraw;
    // displayWithdraw.innerText= newTotalWithdraw;
    // // update balance
    // const displayBalance= document.getElementById('display-balance');
    // const stringDisplayBalance= displayBalance.innerText;
    // const newDisplayBalance= parseFloat(stringDisplayBalance);
    // const newTotalBalance= newDisplayBalance - newInputWithdraw;
    // displayBalance.innerText= newTotalBalance;
})