const account = (accountType) => {
    let balance = {
        pesos: 0,
        dollars: 0
    }
    
    const depositMoney = (amount) => {
        if (accountType == 'pesos') {
            balance.pesos += amount
            console.log(`You have $${balance.pesos} ${accountType}`)
        } else if (accountType == 'dollars'){
            balance.dollars += amount
            console.log(`You have $${balance.dollars} ${accountType}`)
        } else {
            console.log("Please Enter a valid money")
        } 
    }
    return depositMoney
}

// Test
const accountPesos = account('pesos')
accountPesos(100)
accountPesos(200)
const accountDollars = account('dollars')
accountDollars(150)
accountDollars(150)