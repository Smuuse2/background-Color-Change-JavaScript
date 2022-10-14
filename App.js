// const Jamaal =
// {
// id: 1,
// Product: 'Iphone Hayaay',
// productPrice: 1200,
// Password: 267127,

// }

// ;

// const neededMsg = (`iphone ka qiimahiisu waa ${Jamaal.productPrice} alaabta Magacedu waa ${Jamaal.Product} `)
// console.log(neededMsg)

// const btn = document.querySelector('.btn')
// const heading = document.querySelector('.heading')

// function Bedel (){

//     heading.innerHTML ='Galab Wanagsan'
// }

// btn.addEventListener('click',Bedel)





// Recurse Fuction 
// arrow Fuction
// clusure Fuction
// Regular Fuction
//() parameter 
// let kamaal = document.querySelector('.heading')
// let cismaan = document.querySelector(".btn")
// const newEl = document.querySelector(".h3")

// function jamaal (){

//     kamaal.innerHTML = 'Cabdiqaadir Mohamud '
// kamaal.style.backgroundColor = "blue"
// kamaal.style.textAlign = "center";
// newEl.sel
// }
// cismaan.addEventListener('click',jamaal)
const btn = document.querySelector('#Class')
btn.addEventListener('click',function(){

const r = Math.floor(Math.random() * 256 )
const g = Math.floor(Math.random() *256 )
const b = Math.floor (Math.random () * 256)
const newColor = `rgb(${r},${g},${b})`
document.body.style.backgroundColor = newColor;


})