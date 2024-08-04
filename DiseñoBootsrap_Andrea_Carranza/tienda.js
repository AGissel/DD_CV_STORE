document.addEventListener('DOMContentLoaded', async () => {

    const listaProductos = document.querySelector('#listaProductos');

    const productos = await getProductos();

    let body = "";

    for (let { image, title, price, category } of productos) {
        body += `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
                <div class="imageContainer">
                    <img class="cardImg" src="${image}" alt="${title}">
                </div>
                <div class="cardBody">
                    <h5 class="cardTitle">${title.length > 20 ? title.substring(0, 20) + "..." : title}</h5>
                    <p class="cardCategory">${category}</p>
                    <p class="price">L${price}</p>
                    <button class="btn btn-primary boton">Más información</button>
                </div>
            </div>
        </div>
        `;
    }

    listaProductos.innerHTML = body;

});

const getProductos = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const productos = await response.json();
    return productos;
};
