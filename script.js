function mostrarMensaje(){
    console.log("holaa como estas")
}
function agregarTarea(){
    // capturamos el elemento input
    let input=document.querySelector
    ("#nuevaTarea")
    if(input.value==""){
        alert("el input debe contener un texto")
    return
    }
    //capturamos el valor de input
    let valorInput=input.value
    // capturamos el elemento ul
    let ul=document.querySelector
    ("#listaTareas")
    // creamos un elemento li
    let li=document.createElement("li")
    // le asignamos como contenido del li el valor capurado de input
    li.textContent=valorInput
    // creamos el boton eliminar
    let button=document.createElement("button")
    button.textContent="Eliminar"
    button.onclick=function(){li.remove()}
    li.appendChild(button)
    
    // le agregamos como hijo el li al elemento padre ul.
    ul.appendChild(li)
    // le agregamos como hijo el li al elemento padre ul.
    document.querySelector("#nuevaTarea"). value=""
    // Esta linea hacer focus en el input,lo mantienen activo listo para poderingresar cualquier otro texto.
    input.focus()

}