let addInput = document.querySelector('#addInp')

let addBtn = document.querySelector('#addBtn')
let Clear = document.querySelector('.Clear')
let ul = document.querySelector('.list-item')
let div2 = document.querySelector('.div2')
let n = document.querySelector('.nul')
let f = 0
let nul = 0
addBtn.addEventListener('click', () => {
    nul++
    if (addInput.value === '') {
        alert('you must write something')
    } else {
        let li = document.createElement('li')
        li.style.color ='white'
        let input = document.createElement('input')
        let label = document.createElement('label')
        let span = document.createElement('button')
        let check = document.createElement('button')
        check.innerHTML = 'Check'
        span.innerHTML = 'Dalate'
        input.id = nul
        label.setAttribute('for', nul)
        label.innerHTML = addInput.value
        n.innerHTML = nul
        console.log(addInput.value , 'sasd');
        li.appendChild(label)
        li.appendChild(span)
        ul.appendChild(li)
        li.appendChild(check)
        li.style.border = 'white 3px solid'
        li.style.padding = '10px'
        li.style.height = '45px'
        li.style.borderRadius = '5px'
        li.style.marginTop = '25px'
        check.style.position= 'absolute'
        span.style.position= 'absolute'
        check.style.right= '39%'
        check.style.background= 'green'
        check.style.color= 'white'
        check.style.border= 'none'
        check.style.borderRadius= '5px'
        check.style.padding= '5px'
        span.style.background= 'red'
        span.style.color= 'white'
        span.style.marginTop= '-5px'
        check.style.marginTop= '-5px'
        span.style.border= 'none'
        span.style.borderRadius= '5px'
        span.style.padding= '5px'
        span.style.right= '35%'
        span.style.cursor = 'pointer'
        check.style.cursor = 'pointer'

                    
        span.addEventListener('click' , ()=>{
            
            ul.removeChild(li)
        })
        check.addEventListener('click' , ()=>{
            label.classList.toggle('check')
        }) 
        Clear.addEventListener('click' ,()=>{
            if (nul>0) {
                nul.innerHTML = f
            }
            ul.removeChild(li)
        })

    }
    addInput.value = ''
})
