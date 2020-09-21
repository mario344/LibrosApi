//Aqui vamos a iniciar la carga

class OpenLibra {
    contructor(){
        this.cargaApi = 'https://www.etnassoft.com/api/v1/get/';

        //aqui podemos poner el token de identificaicon o la KEY

        //this.token_auth = 'XXXXXXXXXXX';
    }

        //metodo que muestra resultados de la busqueda

        async obtenerEventos(libro, categoria){
            const respuestaEevento = await fetch(`
            https://www.etnassoft.com/api/v1/get/?book_title="${libro}&?category_id=${categoria}"
            `);

            //vamos a convertir la respuesta en JSON

            const eventos = await respuestaEevento.json();

            return {
                eventos
            }
        }


    //obtiene las categorias de los lñibros 
    async obtenerCategorias(){
        //obtiene categorias de la API

        const respuestaCategorias = await fetch(`
        https://www.etnassoft.com/api/v1/get/?get_categories=all`);

        //Obtener respuesta de la consulta y devolver JSON
        const categorias = await respuestaCategorias.json();

        //devolvemos el resultado

        return{
            categorias
        }
        

    }

}