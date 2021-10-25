function validar_contrasena_usuario(stringA,stringB){

    var stringA;
    var stringB;
    var expRegUno=/^[A-Z]{1}[a-zA-Z_-\s]{5,11}$/ ;
    var expRegDos=/^[A-Z]{1}.{5,11}$/

    if(expRegUno.test(stringA.value) == true && expRegDos.test(stringB.value) ==true ){
      alert('Usuario y contraseña correcta');
    }
    else{
      alert('Usuario/contraseña incorrecta')
    }
}

function validar_correo(stringC)

{

    var stringC;
    
    var reg = /^.+@+.+[.](com|es|co|org)$/;
    if (reg.test(stringC.value) == true) 
    {
   
      if(stringC.value.length <= 40 && stringC.value.length >= 15){
        alert("Correo Aceptado");
      }
      else{
        alert("Correo inválido, longitud min 15 max 40 caracteres")
      }
    }
    else{
        alert("Correo inválido, debe terminar |.com |.es|.co|.org")
      }
}


module.exports.validar_contrasena_usuario = validar_contrasena_usuario;
module.exports.validar_correo = validar_correo;