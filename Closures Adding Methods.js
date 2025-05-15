//1. Modify the makeAccount function from the lecture so that the returned object contains an additional key called checkBalance, the value of which is a function that takes no arguments and returns a string representing the current balance. You should be able to use it like this:
function makeAccount(initial) {
    var balance = initial;
    return {
        withdraw: function(amount) {
            if (balance - amount >= 0) {
                balance -= amount;
                return "Here’s your money $" + amount;
            }
            return 'Insufficient funds.';
        },
        deposit: function(amount) {
            balance += amount;
            return 'Your balance is: $' + balance;
        },
        checkBalance: function() {
            return "Current balance is: $" + balance;
        }
    };
}
//2. Let's revisit the counter exercise. Currently, makeCounter only allows us to count up -- what if we want to count down too? Modify makeCounter so that it returns an object that contains two keys: up and down, each of which has functions as values. up should make the count increase, and down should make the count decreasefunction makeCounter() {
 function makeCounter() {
    var count = 0;
    return {
        up: function() {
            count++;
            return count;
        },
        down: function() {
            count--;
            return count;
        }
    };
}
//3. Give your counter a reset capability as well, that resets the count back to its initial value.
function makeCounter(initial = 0) {
    var count = initial
    var start = initial
    return {
        up: function() {
            count++
            return count
        },
        down: function() {
            count--
            return count
        },
        reset: function() {
            count = start
            return count
        }
    }
}
//More Practice
//1. Remember the guessing game from the first week? When we wrote the first version of the game, we didn't know about closures and stored all of our state (variables) in the global scope. Rewrite the guessing game to take advantage of closures so that you can create multiple games. Here is some starter code:
function randInt(n) {
    return Math.floor(Math.random() * (n + 1))
}

function makeGuessingGame(upperBound) {
    const secretNumber = randInt(upperBound)

    return function(guess) {
        if (guess > upperBound || guess < 0) {
            return "nun money Please try a number between 0 and " + upperBound + ""
        } else if (guess === secretNumber) {
            return "true"
        } else {
            return "false"
        }
    }
}
//2. You will need to define a function makeGame, and at the minimum, you should be able to play the game like this
function randInt(n) {
    return Math.floor(Math.random() * (n + 1))
}

function makeGame(upperBound) {
    let secretNumber = randInt(upperBound)
    let guesses = 0
    let isOver = false

    function game(guess) {
        if (isOver) {
            return "The game is over. Please start a new game or reset."
        }

        guesses++

        if (guess < 0 || guess > upperBound) {
            return "out of money , Please try a number between 0 and $ (upperBound)."
        }

        if (guess === secretNumber) {
            isOver = true;
            return "You guessed my number!"
        }

        return "false"
    }
    game.numGuesses = function() {
        return guesses
    }
    game.giveUp = function() {
        const oldAnswer = secretNumber
        secretNumber = randInt(upperBound)
        guesses = 0
        isOver = false
        return "The answer was ${oldAnswer}. A new number has been chosen. Try again!"
    }

    return game
}
//3.  Write a function someEven that, given an array of numbers as an argument, returns true if at least one of the numbers is even.
function someEven(numbers) {
    return numbers.some(function(num) {
        return num % 2 === 0;
    });
}
//4. Write the functions someOdd, somePositive, and someNegative that work similarly to someEven.
1*
function someOdd(numbers) {
    return numbers.some(function(num)) {
        return num % 2 !== 0
    }
}
2*
function somePositive(numbers) {
    return numbers.some(function(num)) {
        return num > 0
    }
}
3*
function someNegative(numbers) {
    return numbers.some(function(num)) {
        return num < 0
    }
}
//5. Write a function some that accepts an array as its first parameter, and a predicate (a function that returns true or false) as its second parameter. If the predicate returns true for any of the elements in the array, some should return true
function some(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return true
        }
    }
    return false
}
//6. Using some, determine if some of the words in the following string have a length greater than 4:
function some(array,perdicate){
    for(let i = 0;i < array.length; i++){
        if(perdicate(array[i])){
            return true
        }
}
return false
}
let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");

let result = some(words, function(word) {
    return word.length > 4
})
//Advanced
//1. Most banks keep records of the transactions that take place in an account. Implement a transaction log that keeps track of all transactions that occur in a given account. A single transaction should probably be represented by an object, for instance:
function makeAccount(initial) {
    let balance = initial
    const transactions = []

    function logTransaction(type, amount, before, after, status) {
        transactions.push({
            type: type
            amount: amount
            before: before
            after: after
            status: status
            timestamp: new Date().toISOString()
        })
    }

    return {
        deposit: function(amount) {
            const before = balance
            balance += amount
            const after = balance
            logTransaction('deposit', amount, before, after, 'approved')
            return "Deposited $${amount}. New balance: $${balance}"
        },

        withdraw: function(amount) {
            const before = balance
            if (amount > balance) {
                logTransaction('withdrawal', amount, before, before, 'denied')
                return 'Insufficient funds.'
            }
            balance -= amount
            const after = balance
            logTransaction('withdrawal', amount, before, after, 'approved');
            return "Withdrew $${amount}. New balance: $${balance}"
        }

        checkBalance: function() {
            return `Current balance: $${balance}`
        }

        transactionHistory: function(n) {
            return transactions.slice(-n)
        }

        getLastDeposits: function(n) {
            return transactions.filter(tx => tx.type === 'deposit').slice(-n)
        }

        getLastWithdrawals: function(n) {
            return transactions.filter(tx => tx.type === 'withdrawal').slice(-n)
        }

        averageDeposits: function() {
            const deposits = transactions.filter(tx => tx.type === 'deposit' && tx.status === 'approved')
            if (deposits.length === 0) return 0
            const total = deposits.reduce((sum, tx) => sum + tx.amount, 0)
            return total / deposits.length
        }
        averageWithdrawals: function() {
            const withdrawals = transactions.filter(tx => tx.type === 'withdrawal' && tx.status === 'approved')
            if (withdrawals.length === 0) return 0
            const total = withdrawals.reduce((sum, tx) => sum + tx.amount, 0)
            return total / withdrawals.length
        }
    };
}
//Nightmare Mode(optional, only if you have finished the above)
