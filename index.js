let pw1EL = document.getElementById("pw1")
let pw2EL = document.getElementById("pw2")
let pw3EL = document.getElementById("pw3")
let pw4EL = document.getElementById("pw4")
let inputEl = document.getElementById("inpu")
let lenght = 0
let validCharacters=[]
for (var i=33; i<127; i++){
  validCharacters.push(String.fromCharCode(i));
}

function setPws(){
    if(inputEl.value == ""){
        lenght = 6
    }
    else{
        lenght = inputEl.value
    }
    pw1EL.textContent = genPw()
    pw2EL.textContent = genPw()
    pw3EL.textContent = genPw()
    pw4EL.textContent = genPw()
}
function genPw(){
    let pw = ""
    for(let i = 0; i< lenght;i++){
        pw += randomChar()
    }
    return pw
}
function randomChar(){
    let randomInt = Math.floor(Math.random() * validCharacters.length)
    return validCharacters[randomInt]
}