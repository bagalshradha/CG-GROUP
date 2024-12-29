import React from "react";
import Sellon6_b2 from "../Images/Sellon6_b2.png";
import CopyrightIcon from "@mui/icons-material/Copyright";
import BoltIcon from "@mui/icons-material/Bolt";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function Sellon1mdm() {
  return (
    <div className="Sellon1">
      <div className="banner">
        <div className="background">
        <div className="banner-left">
          <div>
          <h4 className="info1">Sell on 1mdm.com</h4>
          <h1 className="info2">
            Reach millions of B2B buyers <br />
            globally
          </h1>
          </div>
          <div className="button mt-5">
            <button className="btn1">Start Selling</button> 
            <button className="btn2 ms-5">Chat with consultant</button>
          </div>
        </div>
        
        <div className="banner-right">
          <div>
            <h3>26,000,000</h3>
            <p className="banner-info">active buyers globally</p>
          </div>
          <div>
            <h3>400,000</h3>
            <p className="banner-info">product inquiries daily</p>
          </div>
          <div>
            <h3>200</h3>
            <p className="banner-info">countries and regions represented</p>
          </div>
        </div>
        </div>
      </div>
      <div className="shopping">
        <button className="btn11"><ShoppingCartOutlinedIcon sx={{fontSize:15}}/> Start Selling</button> <br></br>
        <button className="btn11"><HeadsetMicIcon sx={{fontSize:15}}/> Customer Service</button>
      </div>
      <div className="Sellon2">
        <h2 className="text1">1mdm.com is a leading ecommerce platform that</h2>
        <h2 className="text2">helps SMEs go global</h2>
      </div>
      <div className="Sellon3 ">
        <div className="Sellon3-left">
          
            <video height="300" width="500" controls autoPlay> 
            <source src="https://youtu.be/TN7iJyc5Uks"/>
            </video>
          
        </div>
        <div className="Sellon3-right ">
          <p>Connect with millions of business buyers from around the world</p>
          <p>
            Get the tools and know-how to build a successful ecommerce presence
            for your business.
          </p>
          <p>
            Pocket more from each sale, with take rates as low as 0% in some
            cases.
          </p>
          
        </div>
      </div>
      <div className="Sellon4">
        <h1>
          Largest number of products & categories of
          <br />
          medical devices on a single place - 1mdm.com
        </h1>
        <p>
          Connect with buyers worldwide for your product & start selling now.
        </p>
      </div>
      <div className="Sellon5">
        <h2>Grow your business with a suite of tools built for you</h2>
      </div>
      <div className="Sellon6 col-xl-12">
        <div className="Sellon6-box1 col-xl-3 border-start">
          <div className="Sellon6-b1 ">
            <p>
              Custom <br /> storefront
            </p>
          </div>
          <div className="Sellon6-b2">
            <p>
              Advertising <br /> tools
            </p>
          </div>
          <div className="Sellon6-b2">
            <p>
              Data and
              <br /> analytics
            </p>
          </div>
          <div className="Sellon6-b2">
            <p>
              Customer <br />
              support
            </p>
          </div>
        </div>
        <div className="Sellon6-box2 col-xl-4">
          <h1>Set up a store that showcases your brand</h1>
          <p>
            Differentiate yourself from the competition with a full store
            dedicated to your products- no coding or design skills necessary!
          </p>
        </div>
        <div className="Sellon6-box3 col-xl-5">
          <img src={Sellon6_b2} alt="" />
        </div>
      </div>

      <div className="Sellon7-box2">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <h2 className="slider-heading">
            Success stories from 1mdm.com sellers
          </h2>
          <br></br>
          <div className="carousel-inner">
            <div className="carousel-item active d-flex">
              <div className="container slider-content">
                <div className="row align-items-center">
                  <div className="col-md-5 slider-left">
                    <div>
                      <p>
                        Mr David runs a manufacturing company that works in this
                        field of medical devices. With administrative and
                        production across the country. With full respect for
                        environment and several years’ experience using IP
                        systems that are conventional
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7 slider-right">
                    <img
                      src="https://1mdm.com/about/assets/slider-1.webp"
                      className="img-fluid"
                      alt="Success story"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item d-flex">
              <div className="container slider-content">
                <div className="row align-items-center">
                  <div className="col-md-5 slider-left">
                    <div>
                      <p>
                        Lab Evolution is an import - export company of reagents
                        and laboratory equipment established over a decade. Our
                        company’s team of experts (in the instrumentations and
                        reagents market) carefully follows customers all over
                        the world. Lab Evolution is able to offer all the most
                        competitive and popular brands and the best quality
                        products for your laboratory.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7 slider-right">
                    <img
                      src="https://1mdm.com/about/assets/slider-2.webp"
                      className="img-fluid"
                      alt="Success story"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" carousel-item d-flex">
              <div className="container slider-content">
                <div className="row align-items-center">
                  <div className="col-md-5 slider-left">
                    <div>
                      <p>
                        Rupesh Kanna found himself in between jobs in 2016. He
                        started a blog, and wrote about his past experience as a
                        lab technician while sharing his knowledge on imaging
                        techniques. Kanna wanted to see more diversity in the
                        medical devices industry and specilised high-quality
                        pigmented imaging process, so he decided to create his
                        own product line
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7 slider-right">
                    <img
                      src="https://1mdm.com/about/assets/slider-3.webp"
                      className="img-fluid"
                      alt="Success story"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" carousel-item  d-flex">
              <div className="container slider-content">
                <div className="row align-items-center">
                  <div className="col-md-5 slider-left">
                    <div>
                      <p>
                        LTA International Global Services LLC is a Florida-based
                        export management company that sells top Medical device
                        products from major US brands to importers and
                        distributors around the globe. Founded in 1994 by Loyd,
                        LTA's long-standing expertise in logistics and pricing
                        has made it one of the most successful international
                        trade businesses in the USA.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7 slider-right">
                    <img
                      src="https://1mdm.com/about/assets/slider-4.webp"
                      className="img-fluid"
                      alt="Sucess story"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="Sellon8">
        <div className="Sellon8-footer">
          <p>Ready to Grow Your Business?</p>
        </div>
        <div className="Sellon8-button">
          <button className="btn01">Start selling</button>
          <button className="btn02">Chat with consultant</button>
        </div>
      </div>

      <div className="Sellon9">
        <div className="Sellon9-box1 col-xl-5">
          <img src="https://1mdm.com/about/assets/logo-white.png" alt="" />
          <p className="box1-info">
            One Medical Devices <br></br>Market Place
          </p>
        </div>
        <div className="Sellon9-box2 col-xl-2">
          <p className="box2-p1">Platform</p>
          <p className="box2-info">Sell on 1MDM</p>
          <p className="box2-info">Pricing</p>
          <p className="box2-info">About Us</p>
          <p className="box2-info">Our Story</p>
          <p className="box2-info">Careers</p>
          <p className="box2-info">Blog</p>
          <p className="box2-info">Brands</p>
        </div>
        <div className="Sellon9-box3 col-xl-2">
          <p className="box3-p1">Press Room</p>
          <p className="box3-info">Images & B-roll</p>
          <p className="box3-p1">Policies</p>
          <p className="box3-info">Terms of Service</p>
          <p className="box3-info">Privacy Policy</p>
          <p className="box3-info">Delivery Information</p>
        </div>
        <div className="Sellon9-box4 col-xl-2">
          <p className="box4-p1">Reach Us</p>
          <p className="box4-info">Corporate Information</p>
          <p className="box4-info">Contact Us</p>
        </div>
      </div>

      <div className="Sellon10">
        <p className="text-center">
          <CopyrightIcon sx={{ fontSize: 15 }} />
          2024 1MDM by <BoltIcon sx={{ fontSize: 18, color: "#EED202" }} />{" "}
          SuperLabs
        </p>
      </div>
    </div>
  );
}
