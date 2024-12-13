//Almaceno TODOS los elementos que contengan la clase categoria
const categorias = document.querySelectorAll(".categoria")
// Almaceno UN elemento que contenga el id contenido
const contenido = document.querySelector("#contenido")

categorias.forEach(categoria => {
    categoria.addEventListener("click", async(e)=>{
            const nombreArchivo = e.currentTarget.getAttribute("data-seccion")

            try{
                const archivo = await fetch(`${nombreArchivo}.html`)
                if(!archivo.ok) throw new Error("No se encontró el archivo")
                const html = await archivo.text()
                contenido.innerHTML = html
            }catch(error){
                const mensajeError = "<p>No se encontró información de esta categoría</p>"
                contenido.innerHTML = mensajeError
            }
        }
    )
})