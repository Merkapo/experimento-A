



 // este es otro tipo de condicional
 let typeCard = "tarjeta de credito"
 switch(typeCard){
   case "tarjeta de credito":
       console.log("this is a credit card")
       break
   case "tarjeta de debito":
       console.log("this is a debit card")
       break
       default:
           console.log("tarjeta no valida")
 } 
 
 let sueldo = prompt("INGRESE SU SUELDO (en U$D):")
 if (sueldo >= 1000000){
     alert("Felicidades Puto!!! Sos Millonario")
 }
 else if (sueldo >= 10000){
   
     alert("no sos millonario pero vas a estar muy bien en cualquier parte del mundo")
 }
 else if (sueldo >= 1000){
     alert("estas bien en latinoamerica")
 }
 else if (sueldo >= 500){
     alert("estas bien en Argentina")
 }
 else if (sueldo >= 200){
     alert("estas bien en Venezuela")
 }
 else if (sueldo >= 200){
     alert("estas bien en Venezuela")
 }
 else{
     alert("sos pobre")
 
 }
  
   /*deje el video de fazt en 1:23:58
   en donde empezaba a tocar
 el tema de los bucles
   */
 
 nombre = "Pedro"
 frase = `Soy ${nombre} y me la aguanto a morir`/*${} solo funciona con acento fuerte
  o tambien conocido como backsticks 
  (contrl + alt + el signito de cerrar llaves o sino alt+96)*/
 document.write(frase)
 
 machi = `<p>Guacho pistola</p>`//los backsticks tambien sirven para intoducir codigo html
 document.write(machi)
 //operadores logicos
 numero1 = 12
 numero2 = 24
 numero3 = 25
 numero4 = 92
 numero5 = 91
 
 op = (numero1 < numero2 || numero2 < numero3) && (!(numero1 != numero2) && numero5 != numero3)
 //         ( true       ||        true )      &&    ( false  &&  true )
 //                     (  true  )            &&     (  false  )
 document.write(!op)//me da falso pero con ! lo convertimos en true
 var frase3 = "SOS MUY \"IMPORTANTE\" PEDRO\r\n"/*las dos barritas son para escapar las comillas
 en cambio \r\n nos mostraran en un alert en dos lineas*/
 var frase4 = frase3 + "tanta ignorancia nos sera favorable"
 alert(frase4)
 //document.write(" " + frase4)document.write("<h1>SEGUI GENERANDO $ PA!!!</h1>")
 
