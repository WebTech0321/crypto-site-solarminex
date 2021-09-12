import React, {useState, useEffect} from "react"
import imgPreminingApp from '../assets/img/premining.png'

const Premining = () => {

    return (
        <div className="section section-premining">            
            <a className="anchor" id="premining" />
            <div className="row">
                <div className="premining-content col-md-7 col-12">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="title mb-3">
                                PreMining App
                                <div className="text-line text-line2"></div>                        
                            </h1>
                            <p>
                                SolarMineX is developing a mobile application with gamification method to inform the people about how they can make a profit with solar energy and how they can help protect the environment. With this application, people will be able to virtually mine solar, generate electricity from solar energy, store electricity and earn SolarMineX tokens in the whole process. In addition, they will learn about the benefits of solar energy in terms of individual economy and environment and they will become more conscious individuals.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="premining-content-image col-md-5 col-12">                    
                    <img src={imgPreminingApp} />                    
                </div>
            </div>
        </div>
    );
  };
   
  
  export default Premining;
  