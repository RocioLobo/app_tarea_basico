function mostrarMensaje(){
    console.log("mensaje")
}

function agregarTarea(){
    // Capturamos el elemento input
    let input=document.querySelector("#nuevaTarea")
    if (input.value==""){
        alert("el input debe contener un texto")
        return
    }
    //Capturamos el valor de input
    let valorInput=input.value
    //capturamos el elemento ul
    let ul=document.querySelector("#listaTareas")
    //Creamos el elemento li
    let li=document.createElement("li")
    // Le asignamos como contenido del li, el valor capturado de input
    li.textContent=valorInput
    //Creamos el botón eliminar
    let button=document.createElement("button")
    button.textContent="Eliminar"
    button.onclick=function(){li.remove()}
    li.appendChild(button)
    //Le agregamos como hijo el li al elemento padre ul.
    ul.appendChild(li)
    console.log()

    //Esta línea de código limpia mi input
    document.querySelector("#nuevaTarea").value=""
    //Esta línea hace focus en el input, lo mantiene activo y listo para poder ingresar cualquier otro texto.
    input.focus()
}