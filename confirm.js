const form = document.getElementById('mi-formulario');

form.addEventListener("submit", function(event){
    //Evita que el formulario se envie vacio
    event.preventDefault

    const nombre = document.getElementsByName('nombre');
    const apellido = document.getElementsByName('apellido');
    const email = document.getElementsByName('mail');
    const fechaNacimiento = document.getElementsByName('fecha-inicio');
    const paisResidencia = document.getElementsByName('pais');

    //Evita que se envie el formulario con alguna seccion vacia
    if(nombre == "" || apellido == "" || email == "" || fechaNacimiento == "" || paisResidencia == ""){
        alert("Por favor, introdusca todos los datos que se le son pedidos")
        return;
    }

    //Evita que se utilice un Email invalido
    if(!email.checkValidity()){
        alert("Por favor introduzca un Email valido")
        return;
    }

    //Si esto aparece, todo salio bien y no salto ninguna de las anteriores
    alert("FELICIDADES, HAS COMPLETADO ESTE FORMULARIO")
})