import React, {useState, useEffect} from "react"
import imgSolarPanel from '../assets/img/solar-panel.png'
import imgDeco from '../assets/img/decoration.png'
import imgLine03 from '../assets/img/line03.png'

const Specification = () => {
    return (
        <div className="section section-spec">
            <img src={imgDeco} className="spec-bg-deco" />
            <img src={imgLine03} className="spec-bg-line03" />
            <div className="row">
                <div className="spec-content-image col-md-7 col-12">
                    <img src={imgSolarPanel} />
                </div>
                <div className="spec-content col-md-5 col-12">
                    <h1 className="title mb-3">
                        Specifications
                        <div className="text-line text-line2"></div>                        
                    </h1>
                    <ul>
                        <li>* GÜNEŞ PANELI tepe gücü: 21W</li>
                        <li>* Dönüşüm verimliliği: >22%-25%</li>
                        <li>* Çıkış: DC:18V * 1A /USB:5V * 2A</li>
                        <li>* Kompakt boyut: 300x160x20mm/ 11.8x6.2x0.7 inç</li>
                        <li>* Açılan boyut: 640x300x10mm/ 25x11.8x0.35 inç</li>
                        <li>* Ağırlık: 0.48kg</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  };
  
  export default Specification;
  