 
function imc(){
  let dato1= document.getElementById("dato1").value;
  let dato2= document.getElementById("dato2").value;
 
  let resultDato2= dato2*dato2;
   
  let result= parseInt(dato1)/resultDato2;

  document.getElementById("result").value=result.toFixed(2);
  alert("Tu IMC es de "+ result.toFixed(2))

}

function converteuro(){
  let euro=document.getElementById("opcion1").value;
    let cantidadmon= document.getElementById("cantidadmon").value;
    
      let conversion= parseInt(cantidadmon)*(4228.75)
      let valorconvertido= conversion/(1)

      document.getElementById("valorconvertido").value=valorconvertido;
    }
    
    euro=document.getElementById("opcion1").value="";
 

function tabla(){

  const tabla= document.getElementById("tabla");
  let nombre= document.getElementById("nombre").value;
  let apellido= document.getElementById("apellido").value;
  let edad= document.getElementById("edad").value;
  let estadovacuna= document.getElementById("estadovacuna").value;
  let email= document.getElementById("e-mail").value;

  tabla.innerHTML+= `<tr>
  <td>${nombre}</td>
  <td>${apellido}</td>
  <td>${edad}</td>
  <td>${estadovacuna}</td>
  <td>${email}</td>
  </tr>`

   nombre= document.getElementById8("nombre").value="";
   apellido= document.getElementById8("apellido").value="";
   edad= document.getElementById8("edad").value="";
   estadovacuna= document.getElementById8("estadovacuna").value="";
   email= document.getElementById8("e-mail").value="";

}

function calcularpaquetes(){
let planbasico= document.getElementById("planbasico").value;
let planestandart= document.getElementById("planestandart").value;
let planpremiun= document.getElementById("planpremiun").value;
let valor=  document.getElementById("num").value;

if(planbasico===planbasico){
let planbasico= 16900;
  let precio= valor*planbasico;
  alert("Debeb pagar: "+ precio) 
  alert("Gracias por su compra, vuelva pronto");
}

//Plan estandar
if(planestandart===planestandart){
   let planestandart= 26900;
  let precio= valor*planestandart;
  alert("Debeb pagar: "+ precio)
  alert("Gracias por su compra, vuelva pronto");
 }


// Plan Premium
if(planpremiun===planpremiun){
let planpremiun= 38900;
let precio= valor*planpremiun;
alert("Debeb pagar: "+ precio)
  alert("Gracias por su compra, vuelva pronto");
}

}


