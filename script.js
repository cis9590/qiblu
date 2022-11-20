 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Qiblu.com</title>

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

    <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- custom css file link  -->
    <link rel="stylesheet" href="./style.css">

</head>
<body>
    
<!-- header section starts      -->

<header>

    <a href="#" class="logo"><i class="fas fa-utensils"></i>Qiblu.</a>

    <nav class="navbar">
        <a class="active" href="#home">home</a>
        <a href="#dishes">dishes</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#review">review</a>
        <a href="./review.html">review form</a>
    </nav>

    <div class="icons">
        <i class="fas fa-bars" id="menu-bars"></i>
        <i class="fas fa-search" id="search-icon"></i>
        <!-- <a href="./favorite.html" class="fas fa-heart"></a> -->
        <a href="https://qiblu.w3spaces.com/shopping-cart.html" class="fas fa-shopping-cart"></a>
    </div>

</header>

<!-- header section ends-->

<!-- search form  -->

<form action="" id="search-form">
    <input type="search" placeholder="search here..." name="" id="search-box">
    <label for="search-box" class="fas fa-search"></label>
    <i class="fas fa-times" id="close"></i>
</form>

<!-- home section starts  -->

<section class="home" id="home">

    <div class="swiper-container home-slider">

        <div class="swiper-wrapper wrapper">

            <div class="swiper-slide slide">
                <div class="content">
                    <span>Chef Special Dish</span>
                    <h3>spicy noodles</h3>
                    <a href="./shopping-cart.html" class="btn">order now</a>
                </div>
                <div class="image">
                    <img src="./Image/C1.jpg" alt="">
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="content">
                    <span>Chef Special Dish</span>
                    <h3>fried chicken</h3>
                    <a href="./shopping-cart.html" class="btn">order now</a>
                </div>
                <div class="image">
                    <img src="./Image/C2.jpeg" alt="">
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="content">
                    <span>Chef Special Dish</span>
                    <h3>hot pizza</h3>
                    <a href="./shopping-cart.html" class="btn">order now</a>
                </div>
                <div class="image">
                    <img src="./Image/C3.jpeg" alt ="">
                </div>
            </div>

        </div>

        <div class="swiper-pagination"></div>

    </div>

</section>

<!-- home section ends -->

<!-- dishes section starts  -->

<section class="dishes" id="dishes">

    <h3 class="sub-heading"> our dishes </h3>
    <h1 class="heading"> popular dishes </h1>

    <div class="box-container">

        <div class="box">
            <i onclick="myFunction(this)" class="fa fa-heart"></i>
            <!-- <a href="#" class="fas fa-eye"></a> -->
            <img src="./Image/P1.jpeg" alt="">
            <h3>Yummi</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <a href="./shopping-cart.html" class="btn">Order Now</a>
        </div>

        <div class="box">
            <i onclick="myFunction(this)" class="fa fa-heart"></i>
            <!-- <a href="#" class="fas fa-eye"></a> -->
            <img src="./Image/P2.jpeg" alt="">
            <h3>Burger & Fries</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <a href="./shopping-cart.html" class="btn">Order Now</a>
        </div>

        <div class="box">
            <i onclick="myFunction(this)" class="fa fa-heart"></i>
            <!-- <a href="#" class="fas fa-eye"></a> -->
            <img src="./Image/P3.jpeg" alt="">
            <h3>Salada</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <a href="./shopping-cart.html" class="btn">Order Now</a>
        </div>

        <div class="box">
            <i onclick="myFunction(this)" class="fa fa-heart"></i>
            <!-- <a href="#" class="fas fa-eye"></a> -->
            <img src="./Image/P4.jpeg" alt="">
            <h3>Buff Chope</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <a href="./shopping-cart.html" class="btn">Order Now</a>
        </div>

        <div class="box">
            <i onclick="myFunction(this)" class="fa fa-heart"></i>
            <!-- <a href="#" class="fas fa-eye"></a> -->
            <img src="./Image/P5.jpeg" alt="">
            <h3>Salmon Slayer</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <a href="./shopping-cart.html" class="btn">Order Now</a>
        </div>

        <div class="box">
            <i onclick="myFunction(this)" class="fa fa-heart"></i>
            <!-- <a href="#" class="fas fa-eye"></a> -->
            <img src="./Image/P6.jpeg" alt="">
            <h3>luxi Congee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <a href="./shopping-cart.html" class="btn">Order Now</a>
        </div>

    </div>

</section>

<!-- dishes section ends -->

<!-- about section starts  -->

<section class="about" id="about">

    <h3 class="sub-heading"> about us </h3>
    <h1 class="heading"> why choose us? </h1>

    <div class="row">

        <div class="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHVLAJLHWRzmsGIkn9xUOgvImAejN1DVT_PA&usqp=CAU" alt="">
        </div>

        <div class="content">
            <h3>best food in the country</h3>
            <div class="icons-container">
                <div class="icons">
                    <i class="fas fa-dollar-sign"></i>
                    <span>easy payments</span>
                </div>
                <div class="icons">
                    <i class="fas fa-headset"></i>
                    <span>24/7 service</span>
                </div>
            </div>
            <!-- <a href="#" class="btn" style="margin-left: 40%;">learn more</a>-->
        </div>

    </div>

</section>

<!-- about section ends -->

<!-- menu section starts  -->

<section class="menu" id="menu">

    <h3 class="sub-heading"> our menu </h3>
    <h1 class="heading"> today's speciality </h1>

    <div class="box-container">

        <div class="box">
            <div class="image">
                <img src="./Image/D1.jpeg" alt="">
                <i onclick="myFunction(this)" class="fa fa-heart"></i>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Robster Roll</h3>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <a href="./shopping-cart.html" class="btn">Order Now</a>
                <span class="price">$28.99</span>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./Image/D2.jpeg" alt="">
                <i onclick="myFunction(this)" class="fa fa-heart"></i>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Seafood Combo</h3>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <a href="./shopping-cart.html" class="btn">Order Now</a>
                <span class="price">$28.99</span>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./Image/D3.jpeg" alt="">
                <i onclick="myFunction(this)" class="fa fa-heart"></i>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Roll N Roll</h3>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <a href="./shopping-cart.html" class="btn">Order Now</a>
                <span class="price">$15.99</span>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./Image/D4.jpeg" alt="">
                <i onclick="myFunction(this)" class="fa fa-heart"></i>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Spagi</h3>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <a href="./shopping-cart.html" class="btn">Order Now</a>
                <span class="price">$15.99</span>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./Image/D5.jpeg" alt="">
                <i onclick="myFunction(this)" class="fa fa-heart"></i>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Fried Combo</h3>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <a href="./shopping-cart.html" class="btn">Order Now</a>
                <span class="price">$15.99</span>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./Image/D6.jpeg" alt="">
                <i onclick="myFunction(this)" class="fa fa-heart"></i>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>Chicpy</h3>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <a href="./shopping-cart.html" class="btn">Order Now</a>
                <span class="price">$15.99</span>
            </div>
        </div>


    </div>

</section>

<!-- menu section ends -->

<!-- review section starts  -->

<section class="review" id="review">

    <h3 class="sub-heading"> customer's review </h3>
    <h1 class="heading"> what they say </h1>

    <div class="swiper-container review-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide slide">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="./Image/PR1.jpeg" alt="">
                    <div class="user-info">
                        <h3>William G.</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Why does this look so mouth-watering?</p>
            </div>

            <div class="swiper-slide slide">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="./Image/PR2.png" alt="">
                    <div class="user-info">
                        <h3>Aaron A.</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Makes me crave even more.</p>
            </div>

            <div class="swiper-slide slide">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="./Image/PR1.jpeg" alt="">
                    <div class="user-info">
                        <h3>John D.</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>A pizza a day keeps all the worries away</p>
            </div>

            <div class="swiper-slide slide">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="./Image/PR2.png" alt="">
                    <div class="user-info">
                        <h3>Micheal K.</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Good Food equals Good Mood</p>
            </div>

        </div>

    </div>
    
</section>

<!-- review section ends -->

<!-- footer section starts  -->

<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>locations</h3>
            <a href="#">USA</a>

        </div>

        <div class="box">
            <h3>quick links</h3>
            <a href="#home">home</a>
            <a href="#dishes">dishes</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#review">review</a>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#">+718-124-3333</a>
            <a href="#">123@gmail.com</a>
            <a href="#">456@gmail.com</a>
            <a href="#">New York, USA</a>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="https://www.facebook.com/facebook/">facebook</a>
            <a href="https://twitter.com/?lang=en">twitter</a>
            <a href="https://business.instagram.com/">instagram</a>
        </div>

    </div>

    <div class="credit"> copyright @ 2022 by <span>Qiblu Designer</span> </div>

</section>

<!-- footer section ends -->

<!-- loader part  -->
<div class="loader-container">
    <img src="images/loader.gif" alt="">
</div>


<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- custom js file link  -->
<script src="./script.js"></script>

</body>
</html>