//Aqui inicia la la aplicacion instanciando las clases de los archivos

const openLibra = new OpenLibra();
const ui = new Interfaz();

//Control de eventos para el boton buscar

document.getElementById('buscarBtn').addEventListener('click',(e)=>{
    e.preventDefault();

    //vamos a leer el valor del buscador
    const textoBuscado = document.getElementById('evento').value;

    // vamos a leer el valor de categorias
    const categorias = document.getElementById('listado-categorias');
    
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //console.log(textoBuscado);
    //console.log(categoriaSeleccionada);

    //haciendo que el campo de nombre sea obligatorio

    if(textoBuscado !== ''){
        
        //tiene que tener el texto buscado y la categoria que seleccionamos

        openLibra.obtenerEventos(textoBuscado,categoriaSeleccionada)
        .then(eventos=>{
            if(eventos.eventos.length > 0){
                //limpia resultados
                ui.limpiarResultados();
                // si hay libros muestra el resultado
                ui.mostrarEventos(eventos.eventos);
            }else{
                // enviamos una alerta si no encuentra los eventos
                ui.mostrarMensaje('No encontró ningún libro con ese nombre','alert alert-danger mt-4');
            }
        })

    }else{
        //mensaje cuando no escriban algo
        ui.mostrarMensaje('Escribe el nombre en el buscador','alert alert-danger mt-4');
    }
})

