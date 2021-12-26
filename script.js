const btnEl = document.getElementById('btn')
const form = document.getElementById('frm')
const amountEl = document.getElementById('principal')
const intEl = document.getElementById('interest')
const periodEl = document.getElementById('time')
const totalPay = document.getElementById('tot')
const month = document.getElementById('month')
const interestEl = document.getElementById('int')

calculate()

function calculate(){
    const loanAmount = Number(amountEl.value)
    const interestRate = intEl.value/100
    
    const period = periodEl.value * 12
    
    const total = loanAmount * interestRate * period
    
    const totalPayable = loanAmount + total
    
    totalPay.innerText = '₦' + totalPayable.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const monthly = totalPayable/12

    const m = monthly.toFixed(0)
    month.innerText = '₦' + m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const interest = loanAmount * period * interestRate

    interestEl.innerText = '₦' + interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    console.log(interest)
}





btnEl.addEventListener('click', calculate)
form.addEventListener('submit', (e)=>{
    e.preventDefault()
})