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

console.log(headerEl)
calculate()

function calculate(){
    const loanAmount = Number(amountEl.value)
    const time = Number(periodEl.value)
    console.log(time)


    const interestRate = intEl.value/100
    
    const period = time * 12 

    
    const total = loanAmount * period * interestRate
    // console.log(total)
    
    const totalPayable = loanAmount + total
    
    totalPay.innerText = '₦' + totalPayable.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const monthly = totalPayable/ period


    const m = monthly 
 

    month.innerText = '₦' + m.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const interest = loanAmount * period * interestRate

    interestEl.innerText = '₦' + interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    // console.log(interest)
}


btnEl.addEventListener('click', calculate)
form.addEventListener('submit', (e)=>{
    e.preventDefault()
})

function dark(){
    sectionEl.classList.toggle('darkMode')
    headerEl.classList.toggle('darkMode')
    darkModeToggle.classList.toggle('lgt')    
}

darkModeToggle.addEventListener('click', dark)