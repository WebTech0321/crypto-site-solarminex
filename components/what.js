import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgSolarPanel from '../assets/img/solar-panel.png'
import imgDeco from '../assets/img/decoration.png'
import imgLine03 from '../assets/img/line03.png'

const What = () => {

    return (
        <div className="section section-spec">
            <a className="anchor" id="what" />
            <img src={imgDeco} className="spec-bg-deco" />
            <img src={imgLine03} className="spec-bg-line03" />
            <div className="row">
                <div className="spec-content-image col-md-7 col-12">
                    <img src={imgSolarPanel} />
                </div>
                <div className="spec-content col-md-5 col-12 pt-5 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="title mb-3">
                                What
                                <div className="text-line text-line2"></div>                        
                            </h1>
                            <p>
                                SolarMineX güneşten gelen enerjiyi kazanca
                                dönüştürmek ve fosil yakıtların çevreye
                                olan zararını azaltmak amacıyla ortaya çıkmış
                                yeni bir kripto para madenciliği sistemidir.
                                Madenciler güneşten gelen enerji ile ürettikleri
                                her birim elektrik için madencilik ödülü alırlar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
   
  
  export default What;
  