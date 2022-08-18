document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    const withdrawTotalElement = document.getElementById('withdraw-text');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    

    const balanceTotalElement = document.getElementById('balance-text');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBlanceTotal = previousBalanceTotal - newWithdrawAmount;
    
    
    if(currentWithdrawTotal < currentBlanceTotal){
        withdrawTotalElement.innerText = currentWithdrawTotal;
        balanceTotalElement.innerText = currentBlanceTotal;
    }
    else{
        alert('Insufficient balance');
    }

    withdrawField.value = '';
})