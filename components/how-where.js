import React, {useState, useEffect, useRef} from "react"

import imgCharger from '../assets/img/charger.png'
import imgDeco from '../assets/img/decoration.png'
import imgLine02 from '../assets/img/line02.png'


const BACKGROUND_WIDTH = 1440;
const BACKGROUND_HEIGHT = 1430;

const HowWhere = () => {
     
    const  [containerHeight, setContainerHeight]  = useState(BACKGROUND_HEIGHT);  
    const container = useRef(null);

    useEffect(() => {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [])

    const resizeHandler = () => {    
        const rectContainer = container.current.getBoundingClientRect()
        if( rectContainer.width > BACKGROUND_WIDTH ) {
            setContainerHeight(Math.round(rectContainer.width * BACKGROUND_HEIGHT / BACKGROUND_WIDTH));
        } else {
            setContainerHeight(BACKGROUND_HEIGHT);
        }
    }

    return (
        <div className="section section-system" ref={container} style={{height: `${containerHeight}px`}}>
            <div className="system-content">
                <h1 className="title mb-3">
                    How
                    <div className="text-line text-line2"></div>                        
                </h1>
                <p>
                    SolarMineX güneş madenciliği geleneksel
                    fotovoltaik sistemlere ve/veya SolarMineX
                    mobil güneş madenciliği cihazına sahip
                    olan kişiler tarafından yapılabilir. Güneş
                    enerjisi ile elektrik üretmek suretiyle
                    madencilik ödülü kazanılır.
                </p>
            </div>

            <img src={imgDeco} className="howtouse-bg-deco" />
            <img src={imgLine02} className="howtouse-bg-line02" />

            <div className="where-content">
                <div className="row">
                    <div className="howtouse-content-image col-md-7 col-12">
                        <img src={imgCharger} />
                    </div>
                    <div className="howtouse-content col-md-5 col-12 pt-5 pb-5">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <h1 className="title mb-3">
                                    Where
                                    <div className="text-line text-line2"></div>                        
                                </h1>
                                <p>
                                    Güneş ışınlarını az veya çok alabilen her yerde
                                    yapılabilir. İster fotovoltaik sistem ile ev ve
                                    işyerinizde isterse SolarMineX mobil güneş
                                    madenciliği cihazı ile yürürken, koşarken,
                                    yüzerken, seyahat ederken ya da mobilize
                                    herhangi bir haldeyken madencilik yapılabilir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
   
  
  export default HowWhere;
  