import React, {useState, useEffect} from "react"
import imgPreminingApp from '../assets/img/premining.png'

const Premining = () => {

    return (
        <div className="section section-premining">
            <div className="row">
                <div className="premining-content col-md-7 col-12">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="title mb-3">
                                PreMining App
                                <div className="text-line text-line2"></div>                        
                            </h1>
                            <p>
                                SolarMineX toplumu güneş enerjisi ile nasıl kazanç sağlayabilecekleri ve çevreyi
                                korumada nasıl yardımcı olabilecekleri hususunda bilgilendirmek için oyunlaştırma
                                yöntemi ile bir mobil uygulama geliştiriyor.
                                Bu uygulama ile insanlar sanal olarak güneş madenciliği yapabilecek, güneş
                                enerjisinden elektrik üretebilecek, elektriği depolayabilecek ve tüm bu süreçte
                                SolarMineX token kazanacaktır. Bunların dışında güneş enerjisinin bireysel ekonomi
                                ve çevre açısından yararları hakkında bilgi sahibi olacak ve daha bilinçli bireyler
                                haline geleceklerdir.
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
  