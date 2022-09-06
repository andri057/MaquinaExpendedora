
function maquinaExpendedora() {
    const producto = prompt("ESCOJE LA BEBIDA QUE NECESITAS: \n 1.AGUA PLANETA AZUL \n 2.COCACOLA \n 3.KOLA REAL \n 4.PEPSI \n 5.COUNTRY CLUB \n 6.SEVEN UP \n 7.SALIR")

    switch(producto) {
        case '1':
            buyADrink('AGUA PLANETA AZUL', 0);
            break;
        case '2':
            buyADrink('COCA-COLA', 25);
            break;
        case '3':
            buyADrink('KOLA-REAL', 20);
            break;
        case '4':
            buyADrink('PEPSI', 25)
            break;
        case '5':
            buyADrink('COUNTRY-CLUB', 30);
            break;
        case '6':
            buyADrink('SEVEN-UP', 20);
            break;
        default:
            alert("Tenga un buen dia");
    }
}

function buyADrink(drink, price) {
    let respuesta = prompt(`LA BEBIDA QUE ESCOGIO ES ${drink} ES CORRECTO? RESPONDA 1 SI ES 'SI' Y 2 SI ES 'NO'`)

    if (respuesta === '1' ) {
        let dinero = prompt("INGRESE EL DINERO");
        if(dinero >= price){
            dinero = dinero - price
            console.log("su cambio es", dinero, "que tenga buen dia y disfrute su bebida");
        }else{
            alert("el monto ingresado no es el indicado por favor reinicie y vuelva a intentar");
            maquinaExpendedora();
        }

    } else if (respuesta === '2'){
        alert("por favor vuelva a intentarlo");
        maquinaExpendedora();
    } else {
        alert("la respuesta no es ninguna de las opociones");
    }
}

maquinaExpendedora();
