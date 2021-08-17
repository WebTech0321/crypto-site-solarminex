import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SolarSystem = () => {
    
    return (
        <div className="section section-system">
            <div className="system-content pt-5">
                <h1 className="title mb-3">
                    Solar Systems
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
    );
  };
   
  
  export default SolarSystem;
  