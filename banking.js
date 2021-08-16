//Deposite and Withdraw

const depositeCall = document.getElementById('deposite-btn');
depositeCall.addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = document.getElementById('deposite-amount');

    const depositeMoney = parseFloat(depositeAmount.innerText);
    const depositeInputAmount = parseFloat(depositeInput.value);

    const acountBalance = document.getElementById('acount-balance');
    if (parseFloat(depositeInput.value) > 0) {
        const newDepositeAmount = depositeInputAmount + depositeMoney;
        depositeAmount.innerText = newDepositeAmount;

        depositeInput.value = '';



        acountBalance.innerText = depositeInputAmount + parseFloat(acountBalance.innerText);
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
    const newWithdrawInput = parseFloat(withdrawInput.value);
    const newWithdrawAmount = newWithdrawInput + withdrawMoney;



    const totalAcountBalance = document.getElementById('acount-balance');
    const totalBalance = parseFloat(totalAcountBalance.innerText) - newWithdrawInput;
    if (totalBalance > 0) {
        withdrawAmount.innerText = newWithdrawAmount;

        withdrawInput.value = '';
        totalAcountBalance.innerText = parseFloat(totalAcountBalance.innerText) - newWithdrawInput;
    }
    else {
        alert("Withdraw impossible")
    }



})