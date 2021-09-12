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
                <a className="anchor" id="how" />
                <h1 className="title mb-3">
                    How
                    <div className="text-line text-line2"></div>                        
                </h1>
                <p>
                    People can do SolarMinex solar mining by owning conventional photovoltaic systems and/or SolarMineX mobile solar mining equipment. They earn mining rewards by generating electricity with solar energy.
                </p>
            </div>

            <img src={imgDeco} className="howtouse-bg-deco" />
            <img src={imgLine02} className="howtouse-bg-line02" />

            <div className="where-content">
                <a className="anchor" id="where" />
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
                                    It can be done anywhere that can receive sunlight. With the photovoltaic system, mining can be done at home or at work or while walking, running, swimming, traveling or in any mobilized state with the SolarMineX mobile solar mining device.
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
  