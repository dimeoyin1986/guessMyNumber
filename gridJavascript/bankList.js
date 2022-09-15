const account1 = {
    owner: "Oladokun Ismail",
    movements: [10, 3400, -150, -790, -3120, -1000, 8500, -35, 1900, 700, 900, 100],
    interestRate: 1.5,
    pin: 1982
}

const account2 = {
    owner: "AbdulAzeez Jeleelah",
    movements: [5000, 3400, -150, -790, -3120, -1000, 8500, -35],
    interestRate: 1.2,
    pin: 1988
}


const account3 = {
    owner: "Oladokun AbduLlaah",
    movements: [5000, 340000, -150, -790, -3120, -1000, 8500, -35],
    interestRate: 1.0,
    pin: 2015
}

const account4 = {
    owner: "Oladokun Aisha oyindunmola",
    movements: [5000, 48400, -150, -790, -3120, -1000, 85000, -35],
    interestRate: 0.8,
    pin: 2018
}

const account5 = {
    owner: "Oladokun AbdulRahman olarewaju",
    movements: [5000, 46900, -140, -890, -3120, -1000, 8500, -35],
    interestRate: 0.7,
    pin: 2020
}




const containerMovements = document.querySelector(".movements")
const labelBalance = document.querySelector(".balance-value")
const labelSumIn = document.querySelector(".summary-value-in")
const labelSumOut = document.querySelector(".summary-value-out")
const labelSumInterest = document.querySelector(".summary-value-interest")
const formInputUser = document.querySelector(".login-input-user")
const formInputPin = document.querySelector(".login-input-pin")
const loginButton = document.querySelector(".login-btn")
const welcome = document.querySelector(".welcome")
const app = document.querySelector(".app")
const formTransfer = document.querySelector(".form-input-to")
const formAmount = document.querySelector(".form-input-amount")
const formBtn = document.querySelector(".form-btn-transfer")
const closeAccount = document.querySelector(".form-btn-close")
const formCloseUsername = document.querySelector(".form-input-user")
const formClosePin = document.querySelector(".form-input-pin")
const btnLoan = document.querySelector(".form-btn-loan")
const inputLoan = document.querySelector(".form-input-loan-amount")
const btnSort = document.querySelector(".btn-sort")
const money = document.querySelector(".money")
const date = document.querySelector(".date")
console.log(date)







const accounts = [account1, account2, account3, account4, account5]



const createUserName = (accs) => {
    accs.forEach((acc) => {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((init) => init[0]).join("")
    })


}
createUserName(accounts)
// updateUI FUNCTIONALITY
const updateUI = (updateAcc) => {
    // Display movements
    displayMovement(updateAcc)
    // Display balance
    calDisplayBalance(updateAcc)
    //Display summary
    calDisplaySummary(updateAcc)
}



const now = new Date();
const day = `${now.getDay()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0)
const year = now.getFullYear()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()


date.textContent = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

// Display movement both deposit and withdrawer
const displayMovement = (account, sort) => {

    const movSort = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements
    containerMovements.innerHTML = "";
    movSort.forEach((mov, i) => {

        const typeOfTransaction = mov > 0 ? "deposit" : "withdraw"
        const myHtml = `<div class="movement-row">
            <div class="movements-type movement-type-${typeOfTransaction}">${i + 1} ${typeOfTransaction}</div>
         
            <div class="movement-value">${(mov)}€</div>
        </div>`;
        containerMovements.insertAdjacentHTML("afterbegin", myHtml)
        console.log(mov)
    });
}

//displayMovement(account1.movements)

//calculating the balance
const calDisplayBalance = (account) => {
    account.myBalance = account.movements.reduce((acc, mov) => acc + mov,
        0)
    console.log(account.myBalance)
    labelBalance.textContent = `${account.myBalance}€`
}
//calDisplayBalance(account1.movements)


const calDisplaySummary = (account) => {
    const incomes = account.movements
        .filter(mov => mov > 0)
        .reduce((acc, cur) => acc + cur, 0)
    labelSumIn.textContent = `${incomes}€`

    const expenditure = account.movements
        .filter(mov => mov < 0)
        .reduce((acc, cur) => acc + cur, 0)
    labelSumOut.textContent = `${Math.abs(expenditure)}€`
    const interest = account.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * account.interestRate / 100), 0)
        .filter((int, i, arr) => {
            console.log(arr)
            return int > 1
        })

        .reduce((acc, int) => acc + int)
    labelSumInterest.textContent = `${interest.toFixed(2)}€`

}

//calDisplaySummary(account1.movements)



/*console.log(accounts);*/
const movements = [5000, 46900, -140, -890, -3120, -1000, 8500, -35]
const deposits = movements.filter(mov => mov > 0)
const withdraw = movements.filter(mov => mov < 0)



// login functionality
let currentAccount;
loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    currentAccount = accounts.find(acc => acc.username === formInputUser.value)
    console.log(currentAccount)

    if (currentAccount && currentAccount.pin === Number(formInputPin.value)) {
        // Display UI and message
        welcome.textContent = `ALlaahu Akbar you are welcome, ${currentAccount.owner.split(" ")[1]}`
        app.style.opacity = 1;
        /*  formInputPin.style.opacity = formInputUser.style.opacity = loginButton.style.opacity = 0;*/
        formInputPin.value = formInputUser.value = "";
        /*formInputPin.value.blur()*/


        updateUI(currentAccount)
    }
})



btnLoan.addEventListener("click", (e) => {
    e.preventDefault();
    const requestedLoan = Number(inputLoan.value);
    if (requestedLoan > 0 && currentAccount.movements.some(mov => mov >= requestedLoan * 0.1)) {
        currentAccount.movements.push(requestedLoan);
        updateUI(currentAccount)
    }
    inputLoan.value = "";
})


// Implementation of transfer money
formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const amountToTransfer = Number(formAmount.value);
    const receiverAccount = accounts.find(acc => acc.username === (formTransfer.value))
    formAmount.value = formTransfer.value = ""
    console.log(amountToTransfer, receiverAccount)
    if (amountToTransfer > 0 && receiverAccount && currentAccount.myBalance >= amountToTransfer && receiverAccount?.username !== currentAccount.username) {
        currentAccount.movements.push(-amountToTransfer);
        receiverAccount.movements.push(amountToTransfer)
        updateUI(currentAccount)
    }
})

closeAccount.addEventListener("click", (e) => {
    e.preventDefault();
    if (formCloseUsername.value === currentAccount.username && Number(formClosePin.value) === currentAccount.pin) {
        console.log(/*currentAccount,*/ Number(formClosePin.value), currentAccount.username, formCloseUsername.value, currentAccount.pin)

        const index = accounts.findIndex(acc => acc.username === currentAccount.username)
        console.log(currentAccount)
        console.log(index)
        accounts.splice(index, 1)
        app.style.opacity = 0;

    }
    formCloseUsername.value = formClosePin.value = "";
})

let sorted = false
btnSort.addEventListener("click", (e) => {
    e.preventDefault();
    displayMovement(currentAccount, !sorted)
    sorted = !sorted
})




// FLAT ARRAY
const sumOfMovement = accounts.map(acc => acc.movements).flat().reduce((acc, cur) => acc + cur, 0)
console.log(sumOfMovement)
// FLATMAP
const sumOfMovement2 = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => acc + cur)
console.log(sumOfMovement2)


//array creation process
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = new Array(1, 2, 3, 4, 5, 6);
const arr3 = new Array(7)
arr3.fill(23)
const arr4 = Array.from({ length: 7 }, () => 1)
const arr5 = Array.from({ length: 7 }, (_, i) => i + 1)
console.log(arr, arr2, arr3, arr4, arr5)


/*const wholeDeposit = () => {
    const bankDeposit = accounts.flatMap(acc => acc.movements).reduce((acc, sum) => acc + sum, 0)
    return bankDeposit;
}

console.log(wholeDeposit());*/

const depositAbove1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => /*(cur > 1000 ? count + 1 : count)*/ //15
    /*(cur > 1000 ? count++ : count)*/// 0
    (cur > 1000 ? ++count : count)
    , 0)//15
console.log(depositAbove1000)
const depositAboveOnethousand = accounts.flatMap(acc => acc.movements).filter(acc => acc >= 1000).length
console.log(depositAboveOnethousand)

const { deposit, withdrawal } = accounts.flatMap((acc) => acc.movements).reduce((accSum, cur) => {
    /* cur > 0 ? (accSum.deposit += cur) : (accSum.withdrawal += cur);*/
    accSum[cur > 1 ? "deposit" : "withdrawal"] += cur
    return accSum;
}, { deposit: 0, withdrawal: 0 })
console.log(deposit, withdrawal)






const convertTitleCase = (title) => {
    const capitalize = str => str[0].toUpperCase() + str.slice(1)
    const exeptions = ["a", "an", "the", "on", "in", "or", "with", "but", "and"]
    const titleCase = title.toLowerCase().split(" ").map(word => exeptions.includes(word) ? word : capitalize(word)).join(" ");
    return capitalize(titleCase)
}

console.log(convertTitleCase("my name is ismail i love ALLAAH"))
console.log(convertTitleCase("i am a student of an institution"))
console.log(convertTitleCase("and i am a student of lautech"))
