const bgcolors = ['red' , 'green' , 'blue' , 'yellow' , 'brown' , 'purple']

const colorName = document.querySelector('span')


// const btn = document.getElementById('btn')
// console.log(btn.nextSibling)
// console.log(btn.parentElement)
// console.log(btn.textContent)

function colorHandler(){
const randomGeneratedNumber = Math.floor(Math.random() * 7)
// console.log('chal gay')
console.log(randomGeneratedNumber)
colorName.textContent = bgcolors[randomGeneratedNumber]
document.body.style.backgroundColor = bgcolors[randomGeneratedNumber]

    
}