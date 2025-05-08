// 1. The old bank account example from the lecture looked as follows:
function Account(initial) {
    var myAccount={}
   myAccount.balance = initial
myAccount.withdraw= withDraw
   myAccount.deposit=deposit
   return myAccount
}
var withDraw=function (amount) {
              if (this.balance - amount >= 0) {
                   this.balance = this.balance - amount;
                   return 'Here is your money: $' + amount;
              }
         return 'Insufficient founds.'
         }
var deposit=function(amount) {
              this.balance = this.balance + amount
              return 'Your balance is: $' + this.balance
         }

// 2. Our stopwatch exercise looked like this when complete:
function Stopwatch() {
    var watch={}
    watch.time=0
    watch.stop=stop
    watch.reset=reset
    watch.start=start
    watch.pause=pause
    return watch
     }
var start= function() {
              var refer=this
              refer.stop = setInterval(function() {
              refer.time = refer.time + 1
              console.log('Elapsed time: ' + refer.time + 's.')
         }, 1000)
    }
var pause= function() {
              clearInterval(this.stop)
         }
var reset= function() {
              clearInterval(this.stop)
              this.time = 0
         }
//  More Practice/
// 1. addToast: This method should accept a string representing 'toast' as a parameter, e.g. 'white bread', and set the toast property of the Toaster instance to that piece of toast.
function Toaster() {
    var instance = {}
    instance.addToast=addToast
    instance.eject=eject
    instance.toast=undefined
    instance.time=0
    
return instance
}
var addToast=function(toast){
   return this.toast=toast
}
// 2. eject: This method should accept no parameters, and return one of two things:
var eject=function(){
     if(this.toast===''){
          return 'The toaster is empty' 
     }
     var temp=this.toast
      this.toast=undefined
      return temp
}
// 3. start: The start method is responsible for actually toasting the toast -- we can achieve this using the built-in setTimeout function that accepts two parameters: a function and a time (number) in milliseconds (e.g. 1000 represents one second) -- setTimeout will then invoke that function once after the time has passed. setTimeout also returns a number that can be passed to clearTimeout to cancel the invocation (it works almost identically to setInterval, but only executes its function argument once instead of repeatedly).
var start=function(){
     var refer=this
     refer.stop=setTimeout(function(){
          refer.time = refer.time + 1
          refer.toast=toast+'(toasted)'
          console.log('Ding!' + refer.time)
     },1000)
}


