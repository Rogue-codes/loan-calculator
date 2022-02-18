const btnEl = document.getElementById('btn')
const sectionEl = document.getElementById('sect') 
const headerEl = document.getElementById('head')
const darkModeToggle = document.getElementById('dark')
const form = document.getElementById('frm')
const amountEl = document.getElementById('principal')
const intEl = document.getElementById('interest')
const periodEl = document.getElementById('time')
const totalPay = document.getElementById('tot')
const month = document.getElementById('month')
const interestEl = document.getElementById('int')
const paymentDate = document.getElementById('paymentDate')
const warn = document.getElementById('warning')

console.log(headerEl)
// calculate()

function calculate(){


    const loanAmount = Number(amountEl.value)
    const time = Number(periodEl.value)
    console.log(time)

    if(!periodEl.value & !amountEl.value){
        setTimeout(function(){
            warn.innerText = `Period and amount fields can't be left empty`
            warn.style.color = 'red'
            warn.style.fontSize = '10px'

        },5000)
        return
    }
    const interestRate = intEl.value/100
    
    const period = time * 12 

    
    const total = loanAmount * period * interestRate
    // console.log(total)
    
    const totalPayable = loanAmount + total
    
    totalPay.innerText = '₦' + totalPayable.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const monthly = totalPayable/ period

    let monthlyResp = monthly.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    if (monthlyResp === "NaN") month.innerText = '₦' + 0;
    else {
        monthlyResp = month.innerText = '₦' + monthlyResp;
    }

    const interest = loanAmount * period * interestRate

    interestEl.innerText = '₦' + interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    var date = new Date()
    var mainPaymentStartDate = new Date(date.setMonth(date.getMonth()+4))
    console.log('Payment starts on ' + mainPaymentStartDate)
    paymentDate.innerText = 'Payment starts on ' + mainPaymentStartDate

}
btnEl.addEventListener('click', calculate)
form.addEventListener('submit', (e)=>{
    e.preventDefault()
})

let nightMode = localStorage.getItem('nightMode')

function enableNightMode(){
    sectionEl.classList.add('darkMode')
    headerEl.classList.add('darkMode')
    localStorage.setItem('nightMode', 'enabled')
}

function disableNightMode(){
    sectionEl.classList.remove('darkMode')
    headerEl.classList.remove('darkMode')
    localStorage.setItem('nightMode', null)
 
}


if(nightMode === 'enabled'){
    enableNightMode()
}else{
    disableNightMode()
}

darkModeToggle.addEventListener('click', () => {
    nightMode = localStorage.getItem('nightMode')
    
    if (nightMode == 'enabled'){
        disableNightMode()
        
    }else{
        enableNightMode()
    }

    darkModeToggle.classList.toggle('lgt')

})
