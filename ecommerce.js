document.querySelectorAll('.product button').forEach((button) => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
<!-- Products -->
    <section class="products">
        <h2>Top Deals</h2>
        
    </section>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon Clone</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8as2muCk45kExDjRAifEppKnIayquBkf37w&s" alt="Amazon Logo">
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Search for products">
            <button>🔍</button>
        </div>
        <div class="nav-links">
            <span>Hello, Sign in</span>
            <span>Returns & Orders</span>
            <span>Cart 🛒</span>
        </div>
    </header>

    <!-- Main Banner -->
    <section class="banner">
        <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/MediumRectangle_US._TTW_.jpg" alt="Amazon Banner">
    </section>
    <section class="banner">
        <img src="https://cdn.prod.website-files.com/65fb5d759bc28f7290cf5e86/6651028e396af2e03f8a2718_How%20You%20Wish%20Your%20Product%20Images%20Looked%20on%20Amazon.jpeg" alt="Amazon Banner">
    </section>

    <!-- Categories -->
    <section class="categories">
        <h2>Categories</h2>
        <div class="category-grid">
            <div class="category">Electronics</div>
            <div class="category">Fashion</div>
            <div class="category">Books</div>
            <div class="category">Toys</div>
            <div class="category">Home Appliances</div>
        </div>
    </section>

    <!-- Top Deals -->
    <section class="top-deals">
        <h2>Top Deals</h2>
        <div class="product-grid">
            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/51UfNPV4YPL.jpg" alt="Samsung Product">
                <h3>Brand: Samsung</h3>
                <p>Price: <strong>$499.99</strong></p>
                <button class="cart-btn">Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/71xuYczfLBL._SY625_.jpg" alt="Nike Product">
                <h3>Brand: Nike</h3>
                <p>Price: <strong>$89.99</strong></p>
                <button class="cart-btn">Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/713SsA7gftL._AC_UY218_.jpg" alt="Apple Product">
                <h3>Brand: Apple</h3>
                <p>Price: <strong>$999.99</strong></p>
                <button class="cart-btn">Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/71qwX-2p1rL._AC_UL320_.jpg" alt="Sony Product">
                <h3>Brand: Sony</h3>
                <p>Price: <strong>$299.99</strong></p>
                <button class="cart-btn">Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/81S7KuaJlhL._AC_UL320_.jpg" alt="Himalaya Product">
                <h3>Brand: Himalaya</h3>
                <p>Price: <strong>$299.99</strong></p>
                <button class="cart-btn">Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjz7oVVzlM-FXvROjr3wIbRaJxwNNc9JWGLoDeSt2qUJ508udMwfJ39e_R_38r75VcK8zZ18FcUsYoLV_Yl-_dJehc9ZC93gN0_FBSrVNhRg6lcRptt1SJ6A" alt="Mars Product">
                <h3>Brand: Mars</h3>
                <p>Price: <strong>$399.99</strong></p>
                <button class="cart-btn">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/41zEyf60PnL._AC_UL320_.jpg" alt="Rice Product">
                <h3>Brand: Rice</h3>
                <p>Price: <strong>$399.99</strong></p>
                <button class="cart-btn">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/71wu9W+J9eL._AC_UL320_.jpg" alt="niacinamide Product">
                <h3>Brand: niacinamide serum</h3>
                <p>Price: <strong>$399.99</strong></p>
                <button class="cart-btn">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src="https://m.media-amazon.com/images/I/81RdvgWrhVL._AC_UL320_.jpg" alt="book Product">
                <h3>Brand:Business today Book</h3>
                <p>Price: <strong>$399.99</strong></p>
                <button class="cart-btn">Add to Cart</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-top">
            <div class="footer-column">
                <h3>Get to Know Us</h3>
                <p>About Amazon</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Science</p>
            </div>
            <div class="footer-column">
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div class="footer-column">
                <h3>Make Money with Us</h3>
                <p>Sell on Amazon</p>
                <p>Protect and Build Your Brand</p>
                <p>Amazon Global Selling</p>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="language-country">
                <button class="language-btn">🌐 English</button>
                <button class="country-btn">🇮🇳 India</button>
            </div>
            <p>&copy; 2024 Amazon Clone. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
