const inputGroup = document.querySelectorAll('.input-group .input')
const formGroup = document.querySelectorAll('.input-group')
inputGroup.forEach(input => {
    input.addEventListener('change', () => {
        if(input.value !== ''){
            input.parentElement.parentElement.classList.add('active')
        }else{
            input.parentElement.parentElement.classList.remove('active')
        }
    })
    input.addEventListener('click', () => {
        if(input.value == ''){
            if(!input.parentElement.parentElement.classList.contains('active')){
                // removeExistingActiveClass()
                input.parentElement.parentElement.classList.add('active')
            }
        }
    })
})
document.body.addEventListener('click', checkIfInputIsFocus)
function checkIfInputIsFocus(){
    formGroup.forEach(el => {
        if(el.classList.contains('active')){
            const input = el.querySelector('.input')
            if(input.value == ''){
                if(input !== document.activeElement){
                    input.parentElement.parentElement.classList.remove('active')
                }else{
                    return false
                }
            }else{return false}
        }else{
            return false
        }
    })
}
function removeExistingActiveClass(){
    formGroup.forEach(el => {
        if(el.classList.contains('active')){
            el.classList.remove('active')
        }
    })
}