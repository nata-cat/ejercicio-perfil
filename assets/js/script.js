
function usuario(nombreUsuario, correoUsuario, trabajoUsuario, telefonoUsuario, sobreTi){
    this.name = nombreUsuario;
    this.email = correoUsuario;
    this.job = trabajoUsuario;
    this.phone = telefonoUsuario;
    this.about = sobreTi;

    this.getName = function(){

        return this.name;
    },

    this.getEmail = function(){

        return this.email;
    },

    this.getJob = function(){

        return this.job;
    },

    this.getPhone = function(){

        return this.phone;
    },

    this.getAbout = function(){

        return this.about;
    }
};



//Se crea un objeto global vacio para alimentarlo con los datos del formulario
var objetoFormularioGlobal = new usuario('','','','','');

function enviarDatos(){

    console.log(objetoFormularioGlobal);

    //Identificamos la seccion a modificar
    let cambiarCorreo = document.getElementById('emailPerfil');
    let cambiarNombre = document.getElementById('nombrePerfil');
    let cambiarTelefono = document.getElementById('telefonoPerfil');
    let cambiarSobreTi = document.getElementById('sobreTiPerfil');
    let cambiarTrabajo = document.getElementById('trabajoPerfil');


    //Enviamos los datos almacenados en el objeto global
    cambiarCorreo.innerText = objetoFormularioGlobal.getEmail();
    cambiarNombre.innerText = objetoFormularioGlobal.getName();
    cambiarTelefono.innerText = objetoFormularioGlobal.getPhone();
    cambiarSobreTi.innerText = objetoFormularioGlobal.getAbout();
    cambiarTrabajo.innerText = objetoFormularioGlobal.getJob();
}

function atraparDatos(){

    //Extraemos los datos del formulario
    let nombreIngresado = document.getElementById('txtNombre').value;
    let correoIngresado = document.getElementById('txtEmail').value;
    let trabajoIngresado = document.getElementById('txtTrabajo').value;
    let celularIngresado = document.getElementById('txtCelular').value;
    let SobreTiIngresado = document.getElementById('txtSobreTi').value;

    //CONSTRUIMOS UN OBJETO DE LA CLASE USUARIO Y LE PROPORCIONAMOS LA INFORMACION DEL FORMULARIO
    var usuarioEjemplo = new usuario('Nataly', 'nataly@gmail.com', 'diseñadora', '+569-99993336','Vivo en quilpué');
    console.log(usuarioEjemplo);
    console.log(usuarioEjemplo.getAbout())

    //El objeto usuario solo existe cuando se selecciona el boton guardar datos
    var usuario1 = new usuario(nombreIngresado, correoIngresado, trabajoIngresado, celularIngresado, SobreTiIngresado);
    console.log(usuario1);
    console.log(usuario1.getAbout())

    objetoFormularioGlobal = usuario1;
    console.log(objetoFormularioGlobal);
};

function activarDatos(){

    let elBotonGuardar = document.getElementById('guardarDatos');
    elBotonGuardar.addEventListener('click', atraparDatos);

    let elBotonEnviar = document.getElementById('enviarDatos');
    elBotonEnviar.addEventListener('click', enviarDatos);

};