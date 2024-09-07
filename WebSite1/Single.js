
let queries = new URLSearchParams(location.search)
let productId = queries.get('id')
const body = document.querySelector('body')

let getData = async () => {
    let result = await fetch('https://dummyjson.com/products/' + productId)
    let product = await result.json()
    body.innerHTML = `
    <div class="product">
            <img src="${product.images[0]}" alt="${product.title}">
            <h1>${product.title}</h1>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <p class="price">Price: $${product.price} (Discount: ${product.discountPercentage}%)</p>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p class="availability"><strong>Availability:</strong> ${product.availabilityStatus}</p>
            <p><strong>Warranty:</strong> ${product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> ${product.shippingInformation}</p>
            <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>

            <div class="reviews">
                <h3>Customer Reviews:</h3>
                ${product.reviews.map(review => `
                    <div class="review">
                        <p><strong>${review.reviewerName}</strong> (${review.rating}/5): ${review.comment}</p>
                        <small>Date: ${new Date(review.date).toLocaleDateString()}</small>
                    </div>
                `).join('')}
            </div>
            
            <button>Buy Now</button>
        </div>
    `


}

getData();