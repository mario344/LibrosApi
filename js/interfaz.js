class Interfaz{
    constructor(){
        // Inicia la aplicación desde el meotdo
        this.init();

        //Leer el resultado donde se van a poner
        this.listado= document.getElementById('resultado-eventos');
    }

    init(){
        // para impimir categorias de la API
            this.imprimirCategorias();
    }

    //Método para que impima las categorias
    imprimirCategorias(){

        const listaCategorias = openLibra.obtenerCategorias()
        .then(categorias =>{

            const cats = categorias.categorias;

            //para imprimirlos en la lista del html

            const selectCategoria = document.getElementById('listado-categorias');


            //recorremos el arreglo imprimimos

            cats.forEach(cat =>{

                const option = document.createElement('option');  
                option.value = cat.category_id;   
                option.appendChild(document.createTextNode(cat.name)); 
                selectCategoria.appendChild(option);          
            })

            //imprime todos los resultados de categorias
           //console.log(categorias);
        })

    }

    //método que lee la respuesta y muestra lso resultados
    mostrarEventos(eventos){

        this.limpiarResultados();
            //los eventos y agregarlos en una variable
            const listaEventos = eventos;

            //console.log(listaEventos);


            //aqui vamos a recorrer los libros y usar su template
            listaEventos.forEach(evento =>{

                console.log(evento);
                this.listado.innerHTML +=`
                <div class="col-md-4 mb-4">
                    <div class="card">
                    <div>
                    <img src="${evento.thumbnail}" class="mx-auto d-block" alt="imagen" class="img-thumbnail">
                    </div>
                        <div class="card-body>
                            <div class="card-text">
                                <h2 class="text-center">
                                ${evento.title}
                                </h2>

                                <p class="lead text-info">Información del libro</p>

                                <p>${evento.content}</p>

                                <span class="badge badge-primary">

                                Autor : ${evento.publisher}

                                </span>

                                <span class="badge badge-secondary">

                                Fecha de Publicación : ${evento.publisher_date}

                                </span>

                                <a href="${evento.url_download}" target="_blank" class="btn btn-primary btn-block mt-4">
                                Obtener libro 
                                </a>

                               

                                

                            </div>
                        </div>
                    </div>
                
                </div>
                `;
            })

    }
    //limpia los resultados previos
    limpiarResultados(){
        this.listado.innerHTML ='';
    }

    //metodo para impirmir el mensaje de alerta

    mostrarMensaje(mensaje,clases){
const div = document.createElement('div');
div.classList = clases;
// agregar texto
div.appendChild(document.createTextNode(mensaje));
// buscar el padree
const buscadorDiv = document.querySelector('#buscador');
buscadorDiv.appendChild(div);
//quitar el alert despues de 4 segundos
setTimeout(()=>{
  this.limpiarMensaje();
},4000);


    }

    //metodo para limpiar el mensaje de error

    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}