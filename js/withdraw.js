document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    const withdrawTotalElement = document.getElementById('withdraw-text');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    

    

    const balanceTotalElement = document.getElementById('balance-text');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    withdrawField.value = ''; 
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Insfficient balance');
        return;
    }

    

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    
    // if(currentWithdrawTotal <= currentBalanceTotal){
        
        
    // }
    // else{
    //     alert('Insufficient balance');
    // }

    
})