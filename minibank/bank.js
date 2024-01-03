let cree = document.getElementById('cree')
let virement = document.getElementById('virement')
let creenom = document.getElementById('creenom')
let creeprenom = document.getElementById('creeprenom')
let fornom = document.getElementById('fornom')
let forprenom = document.getElementById('forprenom')
let forsolde = document.getElementById('forsolde')
let creesolde = document.getElementById('creesolde')

// function de cree
function creee() {
    creenom.style.display = 'block'
    creenom.style.transition = '0.5s'
    cree.style.display = 'none'
    cree.style.transition = '0.5s'
    fornom.focus()
}

function nextnom() {
    if (fornom.value != '') {
        creenom.style.display = 'none'
        creenom.style.transition = '0.5s'
        creeprenom.style.display = 'block'
        creenom.style.transition = '0.5s'
        forprenom.focus()
    } else {
        alert('you most entre your name')
    }
}

function prevnom() {
        cree.style.display = 'flex'
        cree.style.alignItems = 'center'
        cree.style.justifyContent = 'center'
        cree.style.transition = '0.5s'
        creenom.style.display = 'none'
        creenom.style.transition = '0.5s'
}

function nextprenom() {
    if (forprenom.value != '') {
        creeprenom.style.display = 'none'
        creeprenom.style.transition = '0.5s'
        creesolde.style.display = 'block'
        creesolde.style.transition = '0.5s'
        forsolde.focus()
    } else {
        alert('you most entre your last name')
    }
}

function prevprenom() {
    creenom.style.display = 'block'
    creenom.style.transition = '0.5s'
    creeprenom.style.display = 'none'
    creeprenom.style.transition = '0.5s'
    fornom.focus()
}

let lestcompte = [];
// // save localStorage
if (localStorage.compte != null) {
    lestcompte = JSON.parse(localStorage.compte)
} else {
    lestcompte = []
}

function nextsolde() {
    if (forsolde.value != '' && forsolde.value >= 0) {
        let newcompte = {
            nom:fornom.value,
            prenom:forprenom.value,
            solde:forsolde.value,
        }
        creesolde.style.display = 'none'
        creesolde.style.transition = '0.5s'
        cree.style.display = 'block'
        cree.style.transition = '0.5s'
        alert('you compte a cree')
        fornom.value = ''
        forprenom.value = ''
        forsolde.value = ''
        lestcompte.push(newcompte)
        localStorage.setItem('compte',JSON.stringify(lestcompte))
        cree.style.display = 'flex'
        cree.style.alignItems = 'center'
        cree.style.justifyContent = 'center'
showdata()
    }
    else{
        forsolde.value = ' '
    }
}

function prevsolde() {
    creeprenom.style.display = 'block'
    creeprenom.style.transition = '0.5s'
    creesolde.style.display = 'none'
    creesolde.style.transition = '0.5s'
    forprenom.focus()
}
    
function showdata() {
    let body = '' ;
    for (let i = 0; i < lestcompte.length; i++) {
        body += `
    <tr>
    <td>${lestcompte[i].nom}</td>
    <td>${lestcompte[i].prenom}</td>
    <td>${lestcompte[i].solde}DH</td>
    </tr>
    `        
    }
    
    document.getElementById('tbody').innerHTML = body
    localStorage.setItem('compte',JSON.stringify(lestcompte))
    lestcompte = JSON.parse(localStorage.compte)
}

    localStorage.setItem('compte',JSON.stringify(lestcompte))
    lestcompte = JSON.parse(localStorage.compte)
    showdata()
// ajouter une retrait
let creeretrait = document.getElementById('creeretrait')
let creenomretrait  = document.getElementById('creenomretrait')
let inputnomretrait  = document.getElementById('inputnomretrait')
let creesolderetrait  = document.getElementById('creesolderetrait')
let llabel  = document.getElementById('llabel')
let abel  = document.getElementById('abel')
let forsolderetrait  = document.getElementById('forsolderetrait')
let x ;

function retrrait() {
        creeretrait.style.display = 'none'
        creenomretrait.style.display = 'block'
        
}

function nextrnom() {
    for (let j = 0; j < lestcompte.length; j++) {
        if (inputnomretrait.value == lestcompte[j].nom && +forsolderetrait.value <= lestcompte[j].solde && forsolderetrait.value != '' && forsolderetrait.value > 0   ) {   
            lestcompte[j].solde -= forsolderetrait.value
            abel.innerHTML = '.retrait secsuss '
            abel.style.color = 'green'
            forsolderetrait.value = ''
            inputnomretrait.value = ''
        }else if (inputnomretrait.value == lestcompte[j].nom  ||  +forsolderetrait.value > lestcompte[j].solde ||    forsolderetrait.value != '') {
            abel.style.color = 'red'
            abel.innerHTML = '.votre information incorect  vieller essayer  '
            forsolderetrait.value = ''
            inputnomretrait.value = ''
        }{
        }
        localStorage.setItem('compte',JSON.stringify(lestcompte))
        lestcompte = JSON.parse(localStorage.compte)
        showdata()
    }
    
}

function prevrnom() {
    creeretrait.style.display = 'flex'
    creeretrait.style.alignItems = 'center'
    creenomretrait.style.display = 'none'
}

// ajouter une verement
let creevirement = document.getElementById('creevirement')
let creenomverment  = document.getElementById('creenomverment')
let inputnomverement  = document.getElementById('inputnomverement')
let forsoldeverment  = document.getElementById('forsoldeverment')
let bel  = document.getElementById('bel')

function vver() {
        creevirement.style.display = 'none'
        creenomverment.style.display = 'block'
        
}


function nextvnom() {
    localStorage.setItem('compte',JSON.stringify(lestcompte))
    lestcompte = JSON.parse(localStorage.compte)
    showdata()
    for (let i = 0; i < lestcompte.length; i++) {
        if (inputnomverement.value == lestcompte[i].nom && forsoldeverment.value != ''&& forsoldeverment.value > 0) {   
            lestcompte[i].solde += +forsoldeverment.value
            bel.innerHTML = 'verment sacssuful '
            bel.style.color = 'green'
            forsoldeverment.value = ''
            inputnomverement.value = ''
        }else if (inputnomverement.value == lestcompte[i].nom || forsoldeverment.value != '') {
            bel.style.color = 'red'
            bel.innerHTML = '.votre information incorect  vieller essayer  '
            forsoldeverment.value = ''
            inputnomverement.value = ''
        }{
            
        }
    }
    localStorage.setItem('compte',JSON.stringify(lestcompte))
    lestcompte = JSON.parse(localStorage.compte)
    showdata()
}

function prevvnom() {
    creevirement.style.display = 'flex'
    creevirement.style.alignItems = 'center'
    creenomverment.style.display = 'none'
    // localStorage.clear()
    // lestcompte.splice(0)
    // showdata()
}

    localStorage.setItem('compte',JSON.stringify(lestcompte))
    lestcompte = JSON.parse(localStorage.compte)
    showdata()


// let test  = document.getElementById('test')
// let test1  = document.getElementById('test1')

// function teee() {
//     for (let index = 0; index < lestcompte.length; index++) {
//     if (test.value == lestcompte[index].nom) {
//         console.log('yes')
//     } else if(test.value != lestcompte[index].nom) {
//         console.log('no')
//     }
    
// }
// }

