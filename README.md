## Maquetado responsive

Además del maquetado para web(pc), cuenta con un diseño responsive para movíl.

### landing

![Logo](https://i.postimg.cc/026yxJg0/landing-responsive.png)

### Sección de productos

![Logo](https://i.postimg.cc/pdd2G9Bj/Captura.png)

### post instagram

![logo](https://i.postimg.cc/s2GLgsj8/redes.png)

---------------
# Manejo de estado con Redux

Los productos son cargados al montarse el componente App. Cada producto es un objeto con las siguientes propiedades

    {
        id: number
        banner: img
        logo: img
        image: img
        name: string
        description: string
    }

- la propiedad logo es usada en el navbar
- la propiedad banner está situada junto a los detalles del producto
- la propiedad image es el logo en color negro, ubicado en los detalles del producto

Los productos se renderiza dinamicamente con el estado products de redux, manteniendo el maquetado solicitado (imagen a la derecha - detalles a la izquierda) o (detalles a la derecha - imagen a la izquierda)

![logo](https://i.postimg.cc/T3V971PT/product-table.png)

además cuenta con un botón que agrega el producto a un carrito de compras (gestionado en redux)

### Navbar 

La barra de navegación también se encuentra suscrita al estado redux cart, y usa está información para indicarle al usuario cuantos productos tiene guardados

![](https://i.postimg.cc/4xf50ZHt/nav.png)
---
![](https://i.postimg.cc/2yYvBF4v/count.png)

## User profile

el enlace 'mi cuenta' de la barra de navegación redirige al perfil del usuario, en donde puede visualizar:
- los productos de su carrito
- foto de perfil 
- nombre de usuario 
- boton para regresar a la tienda 
- boton para eliminar productos del carrito

![](https://i.postimg.cc/dtkvyPV2/profile.png)

----

Enlace de deploy de la prueba:
https://puffiapppls.vercel.app/

observación: en mobíl no está el botón que permite añadir productos al carrito.
