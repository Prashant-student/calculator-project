type State = {
    prev: string;
    display: string;
    operator: string | null;
  };

const state:State ={
    prev : '',
    display : '',
    operator : null
}

const updateOutput = () => 
{ 
    outputEle.innerHTML = state.display
}

const append = (x:string) =>
{
    if(x === '.' && state.display.includes('.')) 
        return
    state.display += x
    updateOutput()
}

const addOperator = (x:string) =>
{
    calc()
    state.operator = x
    state.prev = state.display
    state.display = ''
    console.log(state.operator)
}

const calc = () => {
    let computation:number
    const prev = parseFloat(state.prev)
    const current = parseFloat(state.display)
    if (isNaN(prev) || isNaN(current)) return
    switch (state.operator) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    console.log(computation)
    state.display = computation.toString()
    updateOutput()
    state.operator = null
    state.prev = ''
}


const clear = () => {
    state.display = ''
    state.prev = ''
    state.operator = null
    updateOutput()
  }

const outputEle = document.querySelector('.output')
const numbers = document.querySelectorAll('.number') 
const operators = document.querySelectorAll('.operator') 
const equalsEle = document.querySelector('.equals')
const deleteEle = document.querySelector('.delete')
const allclear = document.querySelector('.allclear')

numbers.forEach(button => button.addEventListener('click',()=>append(button.innerHTML)))

operators.forEach(button => button.addEventListener('click',()=>addOperator(button.innerHTML)))

allclear.addEventListener('click',()=>clear())

deleteEle.addEventListener('click',()=>{
    state.display = state.display.toString().slice(0, -1)
    updateOutput()})

equalsEle.addEventListener('click',()=>calc())