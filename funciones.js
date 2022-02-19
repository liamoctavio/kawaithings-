const contenedorProductos = $("#contenedor-productos");
const productoCarrito = []

mostrarProductos(stockProductos)


function calcularTotal(){
    
    let acumulador = productoCarrito.reduce((acc, item) => acc + item.precio,0)
    
    $("#total").html(`  


    <div class="container2">
      <div class="square">
        <img src="img/pollito.jpg" class="mask">
     <div class="h1">El total del carrito es: ${acumulador}</div>
        <p>El total del carrito es: ${acumulador}</p>
        
     <div><a href="https://publico.transbank.cl/" target="_" class="button2">Comprar</a></div>
      </div>
      
      
      
      </div>
      
        
      
      
    </div>
    
        
      
    

    
    
    
    
    `)
    
}
productoCarrito

function mostrarProductos(array){
    
    contenedorProductos.append(`<div class="producto"></div>`)
    array.forEach(producto =>{
    
      $(".producto").append( `
      <div class="container">
      <div class="card">
      <div class="card-header">
        <img src="img/perritokawai.jpg" alt="city" />
      </div>
      <div class="card-body">
        <span class="tag tag-pink">Design</span>
        <h4>
        ${producto.nombre}
        </h4>
        <p>
          Intento de imagen
        </p>
        <p> $${producto.precio}</p>
        </div>
        <button class="button" id="btn${producto.id}">Agregar</button>

      </div>
          
      </div>  
        
      </div>
</div>`)





})

    array.forEach(producto =>{

        $(`#btn${producto.id}`).on('click', ()=>{
            
            let existe = productoCarrito.some(elem => elem.id === producto.id)

            if (existe == true){
                
                productoCarrito.map(elemento => {
                    if(producto.id == elemento.id){
                        return {...productoCarrito, cantidad: productoCarrito.cantidad + 1}
                    }else{
                        return productoCarrito
                    }
                })
            }else{
                productoCarrito.push(producto)
            }
            console.log(producto.cantidad);
            calcularTotal()
            $("#container-carrito").append(`
            
            `)
            // alert(`Usted agrego al carrito el producto: ${producto.nombre}`)
            // console.log(`Usted agrego al carrito el producto: ${producto.nombre}`)
            
        })
    
})

}




// $(document).ready(function(){ irArriba(); }); //Hacia arriba

// function irArriba(){
//   $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
//   $(window).scroll(function(){
//     if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
//   });
//   $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
// }