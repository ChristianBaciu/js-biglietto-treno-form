const nomeGognomeHtml = document.getElementById("nomeCognome")
const kmHtml = document.getElementById("km")
const etaHtml = document.getElementById("eta")
const numeroCarrozzaHtml = document.getElementById("numeroCarrozza")
const numeroCpHtml = document.getElementById("numeroCp")
const bigliettoNascostoHtml = document.getElementById("bigliettoNascosto" )
const nomeBigliettoHtml = document.getElementById("nomeBiglietto")
const costoBigliettoHtml = document.getElementById("costoBiglietto")
const risultatoBigliettoHtml = document.getElementById( 'risultatoBiglietto' )

// biglietto in none
bigliettoNascostoHtml.style.display = "none"

// bottone attivazione
const bottoneGeneraHtml = document.getElementById( "bottoneGenera" )
bottoneGeneraHtml.addEventListener( 'click', function() {

    // biglietto in block
    bigliettoNascostoHtml.style.display = "block"

    // mette un numero casuale in HTML
    let numeroCarrozza = RandomNumber ( 1,10 )
    let numeroCp = RandomNumber ( 1000,10000 )
    numeroCarrozzaHtml.innerHTML = numeroCarrozza
    numeroCpHtml.innerHTML = numeroCp

    // per mettere il nome cognome in HTML
    nomeBigliettoHtml.innerHTML = nomeGognomeHtml.value

    if( etaHtml.value === "minorenne" ){
        risultatoBigliettoHtml.innerHTML = "Biglietto scontato del 20%"
        // costo del biglietto con lo sconto per minorenne
        costoBigliettoHtml.innerHTML = ((kmHtml.value * 0.21)*0.8).toFixed(2) + "€"

    }else if( etaHtml.value === "maggiorenne" ){
        risultatoBigliettoHtml.innerHTML = "Biglietto standard"
        // costo del biglietto standard
        costoBigliettoHtml.innerHTML = (kmHtml.value * 0.21).toFixed(2) + "€"

    }else if( etaHtml.value === "over"){
        risultatoBigliettoHtml.innerHTML = "Biglietto scontato del 80%"
        // costo del biglietto con lo sconto per over65
        costoBigliettoHtml.innerHTML = ((kmHtml.value * 0.21)*0.2).toFixed(2) + "€"
    }
})

function RandomNumber( min,max ){
    return Math.floor( Math.random()*(max-min + 1) + min)
}
