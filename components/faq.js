import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgDeco from '../assets/img/decoration.png'

const dataQA = [
    {
        title: "SolarMineX güneş madenciliğini kimler yapabilir?",
        description: "SolarMineX madenciliğini halihazırda fotovoltaik güneş enerjisi sistemi olan ve/veya<br/>SolarMineX Mobil Güneş Madenciliği Cihazı olan herkes yapabilir."
    },
    {
        title: "SolarMineX güneş madenciliği nerelerde yapılabilir?",
        description: "SolarMineX güneş madenciliği yeryüzünde güneş ışınlarını alan her yerde yapılabilir. Ev ve işyerlerinde kurulu olan fotovoltaik güneş enerjisi sistemine ek olarak SolarMineX Mobil Güneş Madenciliği cihazından edinilmesi halinde seyahat halindeyken, plajda keyif yaparken veya yolda yürürken dahi madencilik yapılabilir."
    },
    {
        title: "SolarMineX güneş madenciliğinde madencilik riglerine ve ekran kartlarına ihtiyaç duyuluyor mu?",
        description: "Hayır. SolarMineX güneş madenciliğinde pahalı madencilik rigleri, ekran kartları veya bilgisayarlarına ve megawattlarca elektrik harcanmasına gerek yoktur. Bu SolarMineX güneş madenciliğinin doğasına aykırıdır. SolarMineX güneş madenciliği elektrik tüketmeyi değil zararsız bir yöntem olan güneş enerjisi ile elektrik üretmeyi amaçlar."
    },
    {
        title: "SolarMineX güneş madenciliğinde madencilik ödülü neye göre dağıtılıyor?",
        description: "SolarMineX’in eşsiz formülü sayesinde üretilen her birim elektrik için madencilik ödülü verilir.<br/>Daha çok elektrik üreten daha çok madencilik ödülü kazanır."
    }
]

const FAQ = () => {
    
    const [arrVisible, setArrVisible] = useState([]);

    useEffect(() => {
        let newData = [];
        for(let i = 0; i < dataQA.length; i++){
            newData.push(false)
        }
        setArrVisible(newData);
    }, [])

    return (
        <div className="section section-faq">
            <img src={imgDeco} className="faq-bg-deco" />

            <h1 className="title mb-3">
                FAQ
                <div className="text-line text-line2"></div>                        
            </h1>

            <div className="qa-section">
                {dataQA.map((item,idx) => (
                    <>
                        <div className="questions d-flex align-items-center justify-content-between">
                            <div dangerouslySetInnerHTML={{__html: item.title }}></div>
                            <FontAwesomeIcon 
                                className="dropdown"
                                icon={arrVisible[idx] ? "chevron-up" : "chevron-down"} 
                                onClick={() => {
                                    let newData = [...arrVisible];
                                    newData[idx] = !newData[idx];
                                    setArrVisible(newData);
                                }}
                            />
                        </div>            
                        <hr className="divider divider-light my-3"></hr>  
                        <div 
                            className="description"
                            style={{
                                    'display': arrVisible[idx] ? 'block' : 'none',
                                    'opacity': arrVisible[idx] ? 1 : 0,
                                }}
                            dangerouslySetInnerHTML={{__html: item.description }}
                        ></div>
                    </>
                ))}
            </div>
        </div>
    );
  };
   
  
  export default FAQ;
  