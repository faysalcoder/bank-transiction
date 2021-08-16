//Deposite and Withdraw

const depositeCall = document.getElementById('deposite-btn');
depositeCall.addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = document.getElementById('deposite-amount');

    const depositeMoney = parseFloat(depositeAmount.innerText);
    const newDepositeAmount = parseFloat(depositeInput.value) + depositeMoney;
    const acountBalance = document.getElementById('acount-balance');
    if (newDepositeAmount > 0) {
        depositeAmount.innerText = newDepositeAmount;

        depositeInput.value = '';



        acountBalance.innerText = newDepositeAmount + parseFloat(acountBalance.innerText);
    }

    else {
        alert("Deposite impossible")
    }


})

const withdrawCall = document.getElementById('withdraw-btn');

withdrawCall.addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = document.getElementById('withdraw-amount');

    const withdrawMoney = parseFloat(withdrawAmount.innerText);
    const newWithdrawInput = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInput.value) + withdrawMoney;



    const totalAcountBalance = document.getElementById('acount-balance');
    const totalBalance = parseFloat(totalAcountBalance.innerText) - newWithdrawAmount;
    if (totalBalance > 0 && totalBalance > newWithdrawAmount) {
        withdrawAmount.innerText = newWithdrawAmount;

        withdrawInput.value = '';
        totalAcountBalance.innerText = parseFloat(totalAcountBalance.innerText) - newWithdrawInput;
    }
    else {
        alert("Withdraw impossible")
    }



})