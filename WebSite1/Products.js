
const container = document.querySelector('.container')

let getData = async () => {

    let result = await fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .catch((er) => er)
    let products = [...result?.products]

    products.map((product) => {
        container.innerHTML += `
            <div class="card">

                <img src="${product.thumbnail}"/>
                <h2>${product.title}</h2>
                <p>${product.price} $</p>
                <a href='Single.html?id=${product.id}'>Show More</a>

            </div>
        `


    });
}

getData();