import React, {useState, useEffect} from "react"
import imgCharger from '../assets/img/charger.png'
import imgDeco from '../assets/img/decoration.png'
import imgLine01 from '../assets/img/line01.png'

const HowToUse = () => {
    return (
        <div className="section section-howtouse">
            <img src={imgDeco} className="howtouse-bg-deco" />
            <img src={imgLine01} className="howtouse-bg-line01" />
            <div className="row">
                <div className="howtouse-content-image col-lg-7 col-12">
                    <img src={imgCharger} />
                </div>
                <div className="howtouse-content col-lg-5 col-12 pt-5 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="title mb-3">
                                How to use
                                <div className="text-line text-line2"></div>                        
                            </h1>
                            <ul>
                                <li>* GÜNEŞ PANELI tepe gücü: 21W</li>
                                <li>* Dönüşüm verimliliği: &gt;22%-25%</li>
                                <li>* Çıkış: DC:18V * 1A /USB:5V * 2A</li>
                                <li>* Kompakt boyut: 300x160x20mm/ 11.8x6.2x0.7 inç</li>
                                <li>* Açılan boyut: 640x300x10mm/ 25x11.8x0.35 inç</li>
                                <li>* Ağırlık: 0.48kg</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
   
  
  export default HowToUse;
  