import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="Home">
            <div className="home__container">
                <img
                className="home__image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 alt=""
                 />
            </div>

            <div className="home__row">
                <Product 
                  id="12334"
                  title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                  price={29.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  rating={3}
                  />
                <Product 
                id="1233467"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass bowl"
                price={239.0}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                rating={4}
                />
            </div>

            <div className="home__row">
            <Product 
            id="12934"
            title="Samsung LC49RG90SSUXEN 28 Digital Watch"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SY466_.jpg"
            rating={4}
            />
            <Product 
            id="12994"
            title="Amazon Echo(3rd generation | Smart speaker with alexa, Charcoal Fabric"
            price={29.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={2}
            />
            <Product 
            id="122256"
            title="New Apple iPad Pro (12.9- inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={5}
            />
            </div>

            <div className="home__row">
            <Product 
            id="122777"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WOHD 5120 x 1440"
            price={666.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
            />
               
            </div>
            
        </div>
    )
}

export default Home
