
arreglo=[];

function almacenarRegistros(){
  function Usuario(Nombre,Contrasena,Correo,Conf_correo,Telefono){
  this.Nombre=Nombre;
  this.Contrasenaa=Contrasena;
  this.Correo=Correo;
  this.Conf_correo=Conf_correo;
  this.Telefono=Telefono;
}

//CAPTURAMOS DEL HTML CADA CAMPO Y LO LLEVAMOS A UNA VARIABE CADA UNO

  var nombreCapturar=document.getElementById("Nombre").value;
  var contrasenaCapturar=document.getElementById("Contrasena").value;
  var correoCapturar=document.getElementById("Correo").value;
  var confirmacionCapturar=document.getElementById("Conf_correo").value;
  var telefonoCapturar=document.getElementById("Telefono").value;
  
  //CREAMOS UN NUEVO OBJETO CON LAS NUEVAS VARIABLES DEFINIDAS
  
  nuevoUsuario= new Usuario(nombreCapturar,contrasenaCapturar,correoCapturar,confirmacionCapturar,telefonoCapturar);
  //console.log(nuevoUsuario);
  

  if (!arreglo){
    arreglo = [];
  }
  
  if(arreglo.length>=30){
    console.log("Se excede tamaño")
  }
  else{
    agregar();
    ordenarRegistros();
  }

  function agregar(){
    //console.log(nuevoUsuario);
    arreglo.push(nuevoUsuario);
    console.log(arreglo);
    //console.log(arreglo.length)
}

return false;

function ordenarRegistros(arreglo){

arregloOrdenado=arreglo.sort((a,b) =>{

if (a.campoNombreCompleto < b.campoNombreCompleto){
  return -1;
}
if (a.campoNombreCompleto > b.campoNombreCompleto){
  return 1;
}
return 0;

});

console.log(arregloOrdenado);

}

}

module.exports.arreglo = arreglo;
module.exports.almacenarRegistros = almacenarRegistros();
module.exports.Usuario = Usuario();
module.exports.agregar = agregar();
module.exports.ordenarRegistros = ordenarRegistros();

