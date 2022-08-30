



let producto = prompt("ESCOJE LA BEBIDA QUE NECESITAS: 1.AGUA PLANETA AZUL 2.COCACOLA 3.KOLA REAL 4.PEPSI 5.COUNTRY CLUB 6.SEVEN UP")

if(producto.toLowerCase() == 1){
let respuesta = prompt("LA BEBIDA QUE ESCOGIO ES AGUA PLANETA AZUL ES CORRECTO? RESPONDA 1 SI ES 'SI' Y 2 SI ES 'NO'")
    if(respuesta == 1 ){
        
            console.log("que tenga buen dia y disfrute su bebida")
        
    }
    if(respuesta == 2){

        alert("por favor reinice vuelva a intentarlo")
    }
    if(respuesta > 2 ){
    alert("la respuesta no es ninguna de las opociones")
    }
    }
    if(producto.toLowerCase() == 2){
        let respuesta = prompt("LA BEBIDA QUE ESCOGIO ES COCACOLA ES CORRECTO? RESPONDA 1 SI ES 'SI' Y 2 SI ES 'NO'")
            if(respuesta == 1 ){
                let dinero = prompt("INGRESE EL DINERO")
                if(dinero >= 25){
                    dinero = dinero - 25
                    console.log("su cambio es", dinero, "que tenga buen dia y disfrute su bebida")
                }else{
                    alert("el monto ingresado no es el indicado por favor reinicie y vuelva a intentar")
                }
            }
            if(respuesta == 2){
                alert("por favor reinice vuelva a intentarlo")
            }
            if(respuesta > 2 ){
            alert("la respuesta no es ninguna de las opociones")
            }
            }
            
     if(producto.toLowerCase() == 3){
         let respuesta = prompt("LA BEBIDA QUE ESCOGIO ES KOLA REAL ES CORRECTO? RESPONDA 1 SI ES 'SI' Y 2 SI ES 'NO'")
              if(respuesta == 1 ){
                        let dinero = prompt("INGRESE EL DINERO")
                  if(dinero >= 20){
                    dinero = dinero - 20
                    console.log("su cambio es", dinero, "que tenga buen dia y disfrute su bebida")
                   }else{
                    alert("el monto ingresado no es el indicado por favor reinicie y vuelva a intentar")
                 }
            }
            if(respuesta == 2){
                   alert("por favor reinice vuelva a intentarlo")
            }
            if(respuesta > 2 ){
            alert("la respuesta no es ninguna de las opociones")
                    }
            }
     if(producto.toLowerCase() == 4){
         let respuesta = prompt("LA BEBIDA QUE ESCOGIO ES PEPSI ES CORRECTO? RESPONDA 1 SI ES 'SI' Y 2 SI ES 'NO'")
                if(respuesta == 1 ){
                               let dinero = prompt("INGRESE EL DINERO")
                         if(dinero >= 25){
                           dinero = dinero - 25
                           console.log("su cambio es", dinero, "que tenga buen dia y disfrute su bebida")
                          }else{
                           alert("el monto ingresado no es el indicado por favor reinicie y vuelva a intentar")
                        }
                   }
                   if(respuesta == 2){
                          alert("por favor reinice vuelva a intentarlo")
                   }
                   if(respuesta > 2 ){
                   alert("la respuesta no es ninguna de las opociones")
                           }
                   }

                   if(producto.toLowerCase() == 5){
                    let respuesta = prompt("LA BEBIDA QUE ESCOGIO ES COUNTRY CLUB ES CORRECTO? RESPONDA 1 SI ES 'SI' Y 2 SI ES 'NO'")
                           if(respuesta == 1 ){
                                          let dinero = prompt("INGRESE EL DINERO")
                                    if(dinero >= 30){
                                      dinero = dinero - 30
                                      console.log("su cambio es", dinero, "que tenga buen dia y disfrute su bebida")
                                     }else{
                                      alert("el monto ingresado no es el indicado por favor reinicie y vuelva a intentar")
                                   }
                              }
                              if(respuesta == 2){
                                     alert("por favor reinice vuelva a intentarlo")
                              }
                              if(respuesta > 2 ){
                              alert("la respuesta no es ninguna de las opociones")
                                      }
                              }
                              if(producto.toLowerCase() == 6){
                                let respuesta = prompt("LA BEBIDA QUE ESCOGIO ES SEVEN UP ES CORRECTO? RESPONDA 1 SI ES 'SI' Y 2 SI ES 'NO'")
                                       if(respuesta == 1 ){
                                                      let dinero = prompt("INGRESE EL DINERO")
                                                if(dinero >= 15){
                                                  dinero = dinero - 15
                                                  console.log("su cambio es", dinero, "que tenga buen dia y disfrute su bebida")
                                                 }else{
                                                  alert("el monto ingresado no es el indicado por favor reinicie y vuelva a intentar")
                                               }
                                          }
                                          if(respuesta == 2){
                                                 alert("por favor reinice vuelva a intentarlo")
                                          }
                                          if(respuesta > 2 ){
                                          alert("la respuesta no es ninguna de las opociones")
                                                  }
                                          }