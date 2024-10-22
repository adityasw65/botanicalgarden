import { useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Clock() {

   useEffect(() => {
      AOS.init();
   })

   const [time, setTime] = useState({});
   window.onload = function updateTime() {
      let ctime = new Date();
      setTime({ h: ctime.getHours(), m: ctime.getMinutes(), s: ctime.getSeconds() });
      setInterval(updateTime, 2000);
   }

   return (

      <div className="container-fluid" id="clock">
         <div className="row d-flex justify-content-center mt-3" id="clock">
            <div className="col-3 col-md-1 text-center" data-aos="fade-right" data-aos-duration="1500">
               <h2 id="hours">{time.h}</h2>
               <p>Hours</p>
            </div>
            <div className="col-1 col-md-1 text-center">
               <h2>:</h2>
            </div>
            <div className="col-3 col-md-1 text-center" data-aos="fade-up" data-aos-duration="1500">
               <h2 id="min">{time.m}</h2>
               <p>Minutes</p>
            </div>
            <div className="col-1 col-md-1 text-center">
               <h2>:</h2>
            </div>
            <div className="col-3 col-md-1 text-center" data-aos="fade-left" data-aos-duration="1500">
               <h2 id="sec">{time.s}</h2>
               <p>Seconds</p>
            </div>
         </div>
      </div>

   );

}


