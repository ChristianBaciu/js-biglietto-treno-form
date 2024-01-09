const nomeGognomeHtml = document.getElementById( "nomeCognome" )
const kmHtml = document.getElementById( "km" )
const etaHtml = document.getElementById( "eta" )
const bottoneGeneraHtml = document.getElementById( "bottoneGenera" )
const numeroCarrozzaHtml = document.getElementById( "numeroCarrozza" )
const numeroCpHtml = document.getElementById( "numeroCp" )
const bigliettoNascostoHtml = document.getElementById( "bigliettoNascosto" )
const nomeBigliettoHtml = document.getElementById( 'nomeBiglietto' )
const costoBigliettoHtml = document.getElementById( 'costoBiglietto' )


// per mettere in display-none la section biglietto
bigliettoNascostoHtml.style.display = "none"


// al click del bottone attiva
bottoneGeneraHtml.addEventListener( 'click', function() {

    // per mettere in display-block la section biglietto
    bigliettoNascostoHtml.style.display = "block"

    // mette un numero casuale 
    let numeroCarrozza = RandomNumber ( 0,10 )
    let numeroCp = RandomNumber ( 100,10000 )
    numeroCarrozzaHtml.innerHTML = numeroCarrozza
    numeroCpHtml.innerHTML = numeroCp

    // per mettere il nome cognome nel biglietto
    nomeBigliettoHtml.innerHTML = nomeGognomeHtml.value
    if( etaHtml.value === "minorenne" ){
        costoBigliettoHtml.innerHTML = (kmHtml.value * 0.21) * 0.8
  
    }else if( etaHtml.value === "maggiorenne" ){  
        costoBigliettoHtml.innerHTML = (kmHtml.value * 0.21) * 0.2
  
    }else if( etaHtml.value === "over65" ){  
        costoBigliettoHtml.innerHTML = (kmHtml.value * 0.21) * 0.6
    }
})

// genera un numero casuale 
function RandomNumber( min,max ){
    return Math.floor( Math.random()*(max-min + 1) + min)
}