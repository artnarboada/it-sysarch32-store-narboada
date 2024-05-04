function MainPage(){

    return(
        <>
          <header>
            <div className="header-container">
            <h2>Art Store</h2>
            <h3>Merchandise</h3>
            <button class="add-to-cart-btn">
           <i class="fas fa-shopping-cart"></i>
            </button>
            </div>
            
          </header>

          <body>
          <div class="container">
  <img class="image" src="https://www.helmetshop.com/cdn-cgi/image/quality%3D85/assets/images/thumbnails/shoei%20rfsr%20white_thumbnail.jpg" alt="Placeholder Image"/>
  <div class="details">
    <p>SHOEI RF-SR Full-Face Helmet</p>
    <h4>Price: 3,000</h4>
    <h4>Color: White</h4>
    <button >Buy Now</button>
  </div>
</div>

<div class="container">
  <img class="image" src="https://www.helmetshop.com/cdn-cgi/image/quality%3D85/assets/images/hjc%20helmets/rpha%2070st/thumbnails/RPHA%2070%20ST%20White_thumbnail.jpg" alt="Placeholder Image"/>
  <div class="details">
  <p>HJC RPHA 70 ST White</p>
    <h4>Price: 2,500</h4>
    <h4>Color: White</h4>
    <button >Buy Now</button>
  </div>
</div>

<div class="container">
  <img class="image" src="https://www.helmetshop.com/cdn-cgi/image/quality%3D85/assets/images/thumbnails/exo-r420_white_side_thumbnail.jpg" alt="Placeholder Image"/>
  <div class="details">
  <p>Scorpion R420 Full Face Helmet</p>
    <h4>Price: 4,000</h4>
    <h4>Color: White</h4>
    <button >Buy Now</button>
  </div>
</div>

<div class="container">
  <img class="image" src="https://www.helmetshop.com/cdn-cgi/image/quality%3D85/assets/images/thumbnails/daytona%20detour%20black_thumbnail.jpg" alt="Placeholder Image"/>
  <div class="details">
  <p>SDaytona Detour Full-Face Helmet</p>
    <h4>Price: 5,000</h4>
    <h4>Color: Black</h4>
    <button >Buy Now</button>
  </div>
</div>


          </body>
         
          <footer>
            <h4>@2024 Art Inc. All rights reserved</h4>
          </footer>
         
        </>
    );

}
export default MainPage