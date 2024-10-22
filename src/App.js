import './App.css';
import Botanical from './botanical';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import hand_planted from "./images/hand-planted.png";
import sunlight from "./images/sunlight.png";
import fresh_air from "./images/freshness.png";

import f1_image from "./images/img02.jpg";
import f2_image from "./images/img03.jpg";
import f3_image from "./images/img04.jpg";
import f4_image from "./images/img05.jpg";
import f5_image from "./images/img06.jpg";
import f6_image from "./images/img07.jpg";
import f7_image from "./images/img08.jpg";
import f8_image from "./images/img09.jpg";
import f9_image from "./images/img10.jpg";
import f10_image from "./images/img11.jpg";

import clogo1 from "./images/p-logo1.png";
import clogo2 from "./images/p-logo2.png";
import clogo3 from "./images/p-logo3.png";
import clogo4 from "./images/p-logo4.png";
import clogo5 from "./images/p-logo5.png";
import clogo6 from "./images/p-logo6.png";

function App() {

   const feature_details = [
      {
         img: f1_image,
         label: "Sit voluptatem",
         price: "68.00 $"
      },
      {
         img: f2_image,
         label: "Neque Porro Quisquamest",
         price: "60.50 $"
      },
      {
         img: f3_image,
         label: "Pellentesque aliquet",
         price: "68.00 $"
      },
      {
         img: f4_image,
         label: "Aspetur Autodit Autfugit",
         price: "66.00 $"
      },
      {
         img: f5_image,
         label: "Sit voluptatem",
         price: "70.50 $"
      },
      {
         img: f6_image,
         label: "Sint Incidunt Utlabore",
         price: "60.50 $"
      },
      {
         img: f7_image,
         label: "Aliquam Quaerat Voluptem",
         price: "58.00 $"
      },
      {
         img: f8_image,
         label: "Neque Porro Quisquam",
         price: "48.00 $"
      },
      {
         img: f9_image,
         label: "Sit voluptatem",
         price: "65.00 $"
      },
      {
         img: f10_image,
         label: "Aliquam Quaerat Voluptem",
         price: "80.00 $"
      }
   ]



   const companyLogo = [clogo1, clogo2, clogo3, clogo4, clogo5, clogo6];



   const serviceDetails = [
      {
         icon: "fa-solid fa-truck",
         title: "Free shipping order",
         para: "On orders over $100"
      },
      {
         icon: "fa-solid fa-gift",
         title: "Special gift card",
         para: "The perfect gift idea"
      },
      {
         icon: "fa-solid fa-recycle",
         title: "Return & exchange",
         para: "Free return within 3 days"
      },
      {
         icon: "fa-solid fa-phone",
         title: "Support 24 / 7",
         para: "Customer support"
      }
   ]

   const chooseUs = [
      {
         img: hand_planted,
         title: "Hand Planted",
         label: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form."
      },
      {
         img: sunlight,
         title: "Natural Sunlight",
         label: "It is a long established fact that a reader will be distracted by the reable content of a page."
      },
      {
         img: fresh_air,
         title: "Clean Air",
         label: "There are many variations of passages of lorem ipsum available, but the majority have suffered."
      }
   ]

   return (
      <div className="App">

         <Botanical feature_details={feature_details} serviceDetails={serviceDetails} chooseUs={chooseUs} companyLogo={companyLogo} />

      </div>
   );
}

export default App;
