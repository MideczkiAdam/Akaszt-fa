let buttonHolder = document.getElementById("right-wrapper")
let letters = "AÁBCDEÉFGHIÍJKLMNOÓUPQRSTVWXYZ"
let word = "ALMALÉ"

let mistake = 0

// betű gombok elhelyezése
for( let i = 0; i < letters.length; i ++){
    buttonHolder.innerHTML += '<button onclick="letterButtonClicked(this)" >'+letters[i]+'</button>'
}
// alsó vonalak
for( let i=0; i < word.length; i++){
    document.getElementById("status").innerText += '_'
}

// kikapcsol a gomb
function letterButtonClicked(button){
    button.disabled = "true"

    // TODO betű tesztelése

    let letter = button.innerText // melyik betűt vizsgáljuk
    if(word.includes(letter)){
        alert("benne van")

        let actual = document.getElementById("status").innerText
        let newStatus = ""

        for(let i = 0; i < word.length; i++){
            if(word[i] == letter){
                newStatus += letter
            }   else{
                newStatus += actual[i]
            }
        }
        document.getElementById("status").innerText = newStatus

       }   else{
        mistake += 1
            alert("nincs benne! " + mistake + " hiba!")

        } 

        document.getElementById("left-wrapper").innerHTML = `<img width="100%" src="${mistake}.png">`
        // Altgr + 7
}