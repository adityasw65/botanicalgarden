import navLogo from "./images/logo.png";
import carouselImg1 from "./images/img77.png";
import carouselImg2 from "./images/img78.png";
import carouselImg3 from "./images/img79.png";
import chooseImage from "./images/img01.jpg"
// import hand_planted from "./images/hand-planted.png";
// import sunlight from "./images/sunlight.png";
// import fresh_air from "./images/freshness.png";
import feature_image from "./images/hbdr.png";
import ad1 from "./images/ad1.jpg";
import ad2 from "./images/ad2.jpg";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { useState } from "react";
import Clock from "./clock";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Botanical(props) {

   useEffect(() => {
      AOS.init();
   })


   const responsiveOwl = {
      loop: true,
      margin: 10,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      autoplaySpeed: 1500,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1
         },
         768: {
            items: 2
         },
         992: {
            items: 3
         },
         1100: {
            items: 4
         }
      }
   }



   const comLogoCarousel = {

      center: true,
      loop: true,
      margin: 10,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 2000,
      autoplaySpeed: 1500,
      responsiveClass: true,
      responsive: {
         0: {
            items: 2
         },
         768: {
            items: 4
         },
         992: {
            items: 6
         }
      }
   }

   return (


      // ########################## webiste start ##########################
      <section className="container-fluid" style={{overflow: "hidden"}}>

         {/* ------------------- navbar start ------------------- */}
         <section className="container-fluid position-relative" id="navbarParent">
            <div className="row d-flex">

               <div className="col-12 col-md-3 d-none d-lg-block" id="firstNav">
                  <nav className="navbar navbar-expand-xl bg-light">
                     <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentFirst" aria-controls="navbarSupportedContentFirst" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContentFirst">
                           <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-0">
                              <li className="nav-item">
                                 <a className="nav-link" aria-current="page" href="#">Login</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="#">Registration</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="#">Logout</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </nav>
               </div>

               <div className="col-12 d-flex justify-content-center gap-md-3">

                  <nav className="navbar navbar-expand-md" id="firstList">
                     <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                              <li className="nav-item">
                                 <a className="nav-link active" aria-current="page" href="#">HOME</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="#">STORE</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="#">ABOUT</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </nav>

                  <a className="nav-link order-1 order-md-0" href="#">
                     <img src={navLogo} alt="logo not found" className="img-fluid" />
                  </a>


                  <nav className="navbar navbar-expand-md order-0 order-md-1" id="secondList">
                     <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                 <a className="nav-link" href="#">BLOG</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="#">PAGES</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="#">CONTACT</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="d-md-flex gap-md-3 d-none navIcons">
                        <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a href=""><i className="fa-regular fa-heart"></i></a>
                        <a href=""><i className="fa-sharp fa-solid fa-cart-shopping"></i></a>
                     </div>
                  </nav>

               </div>
            </div>
         </section>
         {/* ------------------- navbar end ------------------- */}



         {/* ------------------- carousel section start ------------------- */}
         <section className="container-fluid">
            <div className="row">
               <div className="col-12">

                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner" data-aos="zoom-out" data-aos-duration="1500">
                        <div className="carousel-item active" id="firstCaroImg" data-bs-interval="1000">
                           <img src={carouselImg1} className="d-none d-md-block w-75" alt="image not found" />
                           <div className="carousel-caption text-start" data-aos="zoom-in" data-aos-duration="1500">
                              <h1>Houseplant <br /> The perfect choice.</h1>
                              <hr className="hr bg-dark" />
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, animi?.</p>
                              <a href="">Shop Now <i className="fa-solid fa-arrow-right-long"></i></a>
                           </div>
                        </div>
                        <div className="carousel-item" id="secondCaroImg" data-bs-interval="2000">
                           <img src={carouselImg2} className="d-none d-md-block w-50" alt="image not found" />
                           <div className="carousel-caption text-start" data-aos="zoom-in" data-aos-duration="1500">
                              <h5> Welcome to botanical</h5>
                              <h1 className="mt-3">Plants Gonna Make <br /> People Happy</h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, animi?.</p>
                              <a href="">Shop Now <i className="fa-solid fa-arrow-right-long"></i></a>
                           </div>
                        </div>
                        <div className="carousel-item " id="thirdCaroImg" data-bs-interval="3000">
                           <img src={carouselImg3} className="d-none d-md-block w-50" alt="image not found" />
                           <div className="carousel-caption text-start " data-aos="zoom-in" data-aos-duration="1500">
                              <h5> Welcome to botanical</h5>
                              <h1 className="mt-3">Plants for healthy</h1>
                              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, animi?.</p>
                              <a href="">Shop Now <i className="fa-solid fa-arrow-right-long"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </section >
         {/* ------------------- carousel section end ------------------- */}



         {/* ------------------- choose-us start ------------------- */}
         <div className="container-fluid" id="choose-us">
            <div className="row">
               <div className="col-12 col-md-6" data-aos="fade-right" data-aos-duration="1500">
                  <img src={chooseImage} alt="" className="img-fluid" />
               </div>
               <div className="col-12 col-md-6">
                  <div className="row gap-5">

                     <div className="col-12" data-aos="fade-down" data-aos-duration="1500">
                        <h1>Why Choose Us ?</h1>
                        <hr className="hr" />
                        <p>
                           Lorem ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley ... <a href="" className="text-decoration-none"><em>Learn More</em></a>
                        </p>
                     </div>

                     <div className="col-12" id="choose-info" data-aos="fade-left" data-aos-duration="1500">
                        <div className="row">
                           {
                              props.chooseUs.map((item) => (

                                 <div className="col-12">
                                    <div className="row">
                                       <div className="col-3">
                                          <img src={item.img} alt="image not found" className="img-fluid" />
                                       </div>
                                       <div className="col-9">
                                          <h6>{item.title}</h6>
                                          <p>{item.label}</p>
                                       </div>
                                    </div>
                                 </div>

                              ))
                           }
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
         {/* ------------------- choose-us end ------------------- */}



         {/* ------------------- feature-product start ------------------- */}
         <div className="container-fluid" id="feature-product">
            <div className="row text-center" data-aos="fade-down" data-aos-duration="1500">
               <div className="col-12">
                  <h1>Featured Product</h1>
               </div>
            </div>

            <div className="row text-center mt-3" data-aos="fade-down" data-aos-duration="1500">
               <div className="col-12">
                  <img src={feature_image} alt="" className="img-fluid" />
               </div>
            </div>

            <div className="row text-center mt-4" data-aos="fade-down" data-aos-duration="1500">
               <div className="col-12">
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
               </div>
            </div>

            <div className="row mt-4 text-center gap-5 justify-content-center" id="products">
               {
                  props.feature_details.map((item) => (
                     <div className="col-12 col-md-3 border border-1 p-0 position-relative cards" data-aos="flip-left" data-aos-duration="1500">
                        <img src={item.img} alt="" className="img-fluid" />
                        <p className="mt-3">{item.label}</p>
                        <p><b>{item.price}</b></p>

                        <div className="links d-flex gap-4 gap-md-2 gap-lg-3 fs-3 mx-auto position-absolute">
                           <a href="#heart" id="h"><i class="fa-regular fa-heart"></i></a>
                           <a href="#cart" id="c"><i class="fa-solid fa-cart-shopping"></i></a>
                           <a href="#eye" id="e"><i class="fa-regular fa-eye"></i></a>
                           <a href="#arrows" id="a"><i class="fa-solid fa-arrow-right-arrow-left"></i></a>
                        </div>
                     </div>
                  ))
               }

            </div>
         </div>
         {/* ------------------- feature-product end ------------------- */}



         {/* ------------------- service start ------------------- */}
         <div className="container-fluid" id="service">
            <div className="row d-flex justify-content-center" id="service-parent" data-aos="fade-up" data-aos-duration="1500"> 

               {
                  props.serviceDetails.map((item) => (
                     <div className="col-12 col-md-6 col-lg-4 col-xl-3 px-3 py-4 ">
                        <div className="row d-flex align-items-center service-boxes">
                           <div className="col-3">
                              <i class={item.icon}></i>
                           </div>
                           <div className="col-9">
                              <h5>{item.title}</h5>
                              <p>{item.para}</p>
                           </div>
                        </div>
                     </div>
                  ))
               }

            </div>

         </div>
         {/* ------------------- service end ------------------- */}



         {/* ------------------- discount start ------------------- */}
         <div className="container-fluid" id="discount">
            <div className="row gap-3 gap-md-0">
               <div className="col-12 col-md-6" data-aos="fade-right" data-aos-duration="1500">
                  <img src={ad1} alt="image not found" className="img-fluid" />
               </div>
               <div className="col-12 col-md-6" data-aos="fade-left" data-aos-duration="1500">
                  <img src={ad2} alt="image not found" className="img-fluid" />
               </div>
            </div>
         </div>
         {/* ------------------- discount end ------------------- */}



         {/* ------------------- daily-deal start ------------------- */}
         <div className="container-fluid" id="daily-deal">
            <div className="row text-center" data-aos="fade-down" data-aos-duration="1500">
               <div className="col-12">
                  <h1>Daily Deal</h1>
               </div>
            </div>
            <div className="row text-center mt-3" data-aos="fade-down" data-aos-duration="1500">
               <div className="col-12">
                  <img src={feature_image} alt="" className="img-fluid" />
               </div>
            </div>
            <div className="row text-center mt-4" data-aos="fade-down" data-aos-duration="1500">
               <div className="col-12">
                  <p>There are many variations of passages of lorem ipsum available.</p>
               </div>
            </div>

            {/* clock start  */}
            <Clock></Clock>
            {/* clock end  */}

            <div className="row mt-4 text-center gap-5 justify-content-center" data-aos="zoom-in" data-aos-duration="1500">

               <OwlCarousel className='owl-theme' loop margin={10} {...responsiveOwl}>
                  {
                     props.feature_details.map((item) => (
                        <div className="item" >
                           <div className=" border border-1 p-0 position-relative cards">
                              <img src={item.img} alt="" className="img-fluid" />
                              <p className="mt-3">{item.label}</p>
                              <p><b>{item.price}</b></p>

                              <div className="links d-flex gap-4 gap-md-2 gap-lg-3 fs-3 mx-auto position-absolute">
                                 <a href="#heart" id="h"><i class="fa-regular fa-heart"></i></a>
                                 <a href="#cart" id="c"><i class="fa-solid fa-cart-shopping"></i></a>
                                 <a href="#eye" id="e"><i class="fa-regular fa-eye"></i></a>
                                 <a href="#arrows" id="a"><i class="fa-solid fa-arrow-right-arrow-left"></i></a>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </OwlCarousel>
            </div>

         </div>
         {/* ------------------- daily-deal end ------------------- */}



         {/* ------------------- companyLogoCarousel start ------------------- */}
         <div className="container-fluid" id="companyLogoCarousel" data-aos="zoom-in" data-aos-duration="1500">
            <div className="row">
               <OwlCarousel className='owl-theme' loop margin={10} {...comLogoCarousel}>
                  {
                     props.companyLogo.map((item) => (
                        <div className="item col-6" >
                           <img src={item} alt="not found" className="img-fluid" />
                        </div>
                     ))
                  }
               </OwlCarousel>
            </div>
         </div>
         {/* ------------------- companyLogoCarousel end ------------------- */}



         {/* ------------------- subscribe start ------------------- */}
         <div className="container" id="subscribe">
            <div className="row text-center" data-aos="fade-down" data-aos-duration="1500">
               <div className="col-12">
                  <h1>Subscribe Our Newsletter</h1>
               </div>
            </div>
            <div className="row text-center mt-3" data-aos="fade-down" data-aos-duration="1500">
               <div className="col-12">
                  <img src={feature_image} alt="not found" className="img-fluid" />
               </div>
            </div>
            <div className="row text-center mt-4" data-aos="fade-down" data-aos-duration="1500">
               <div className="col-12">
                  <p>Enter Your email address to join our mailing list and keep yourself update</p>
               </div>
            </div>
            <div className="row mt-5" id="subs-info">
               <div className="col-12">
                  <div className="row d-flex justify-content-center">
                     <div className="col-12 col-md-7 col-lg-7 " data-aos="fade-right" data-aos-duration="1500">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your mail..." />
                     </div>
                     <div className="col-12 col-md-5 col-lg-3 mt-3 mt-md-0 d-flex align-items-center " data-aos="fade-left" data-aos-duration="1500">
                        <a href="">Shop now <i class="fa-solid fa-arrow-right"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* ------------------- subscribe start ------------------- */}




         {/* ------------------- footer start ------------------- */}
         <div className="container" id="footer">
            <div className="row gap-3 gap-md-0 mb-4">
               <div className="col-12 col-md-3" id="contact">
                  <div className="row gap-2 gap-md-4">
                     <div className="col-12" data-aos="fade-down" data-aos-duration="1500">
                        <h6>Contact Us</h6>
                     </div>
                     <div className="col-12" data-aos="fade-up" data-aos-duration="1500">
                        <p>
                           <span><i class="fa-solid fa-location-dot"></i></span>&nbsp;&nbsp;&nbsp;<span>Address: London Oxford Street, 012 United Kingdom.</span>
                        </p>
                        <p>
                           <span><i class="fa-solid fa-phone"></i></span>&nbsp;&nbsp;&nbsp;<span>Phone : <a href="tel:+91 3456 7890" id="number">(+032) 3456 7890</a></span>
                        </p>
                        <p>
                           <span><i class="fa-solid fa-envelope"></i></span>&nbsp;&nbsp;&nbsp;<span>Email: <a href="mailto:" id="mail">Botanicalstore@gmail.com</a></span>
                        </p>
                        <p>
                           <span>Follow us:</span>
                           <span className="d-flex gap-4 ms-3 social-links">
                              <a href="#facebook" className="text-dark"><i class="fa-brands fa-facebook"></i></a>
                              <a href="#twitter" className="text-dark"><i class="fa-brands fa-twitter"></i></a>
                              <a href="#pinterest" className="text-dark"><i class="fa-brands fa-pinterest"></i></a>
                              <a href="#google" className="text-dark"><i class="fa-brands fa-google-plus-g"></i></a>
                           </span>
                        </p>
                     </div>
                  </div>
               </div>

               <div className="col-12 col-md-3" id="information">
                  <div className="row gap-2 gap-md-4">
                     <div className="col-12" data-aos="fade-down" data-aos-duration="1500">
                        <h6>Information</h6>
                     </div>
                     <div className="col-12" data-aos="fade-up" data-aos-duration="1500">
                        <p><a href="">New Products</a></p>
                        <p><a href="">Top Sellers</a></p>
                        <p><a href="">Our Blog</a></p>
                        <p><a href="">About Our Shop</a></p>
                        <p><a href="">Privacy Policy</a></p>
                     </div>
                  </div>
               </div>

               <div className="col-12 col-md-2" id="account">
                  <div className="row gap-2 gap-md-4">
                     <div className="col-12" data-aos="fade-down" data-aos-duration="1500">
                        <h6>My Account</h6>
                     </div>
                     <div className="col-12" data-aos="fade-up" data-aos-duration="1500">
                        <p><a href="">My Account</a></p>
                        <p><a href="">Discount</a></p>
                        <p><a href="">Order History</a></p>
                        <p><a href="">Personal Information</a></p>
                     </div>
                  </div>
               </div>

               <div className="col-12 col-md-4" id="tags">
                  <div className="row gap-2 gap-md-4">
                     <div className="col-12" data-aos="fade-down" data-aos-duration="1500">
                        <h6>Popular Tag</h6>
                     </div>
                     <div className="col-12 mt-3" data-aos="fade-up" data-aos-duration="1500">
                        <div className="row gap-1 gap-md-4 gap-lg-1">
                           <div className="col-4">
                              <a href="">Trend</a>
                           </div>
                           <div className="col-4">
                              <a href="">Decor</a>
                           </div>
                        </div>
                        <div className="row mt-4 gap-1 gap-md-4">
                           <div className="col-12 col-md-3">
                              <a href="">Plant</a>
                           </div>
                           <div className="col-12 col-md-8 mt-3 mt-md-0">
                              <a href="">Table tree</a>
                           </div>
                        </div>
                        <div className="row mt-4">
                           <div className="col-8 col-md-10">
                              <a href="">Bedroom tree</a>
                           </div>
                           <div className="col-8 col-md-10 mt-4">
                              <a href="">Living room</a>
                           </div>
                        </div>
                     </div>
                     {/* <p className=" d-flex gap-2">
                        <a href="">Bedroom tree</a>
                        <a href="">Living room</a>
                     </p> */}
                  </div>
               </div>

            </div>

            <hr />

            <div className="row text-center mt-3" id="copyright">
               <div className="col-12">
                  <p>Copyright 2024 by <a href="">Botanical Store</a> - All right reserved | made by <a href="https://adityawaportfolio.netlify.app/" target="_blank">AdityaWa</a></p>
               </div>
            </div>

         </div>
         {/* ------------------- footer end ------------------- */}
      </section >
      // ########################## website end ##########################

   );

}





