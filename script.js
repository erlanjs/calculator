let result = document.getElementById("inputext");
let exBtn = document.querySelectorAll('.ex-btn')
let cleanBtn = document.querySelector('.clean-btn')
let delBtn = document.querySelector('.del-btn')
let equal = document.querySelector('.equal')

exBtn.forEach(btn => {
    btn.addEventListener('click', (e) => calculate(e))
})
cleanBtn.addEventListener('click', () => clr())
delBtn.addEventListener('click', () => del())
equal.addEventListener('click', () => resultAnswer())

let calculate = (e) => {
    result.value += e.target.innerText;
}

let resultAnswer = () =>{
    result.value=eval(result.value).toFixed(2)
}

function clr(){
    result.value = ""
}

function del(){
    result.value = result.value.slice(0,-1)
}