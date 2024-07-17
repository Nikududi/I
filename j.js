document.addEventListener('DOMContentLoaded', () => {
    const shopNowButton = document.querySelector('.shop-now');
    shopNowButton.addEventListener('click', () => {
        window.location.href = '#products';
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
});