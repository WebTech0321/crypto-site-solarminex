import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgSolarPanel from '../assets/img/solar-panel.png'
import imgDeco from '../assets/img/decoration.png'
import imgLine03 from '../assets/img/line03.png'

const dataQA = [
    {
        title: "Overview",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Specifications",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Reviews",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Questions & Answers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "From the manufacturer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

const Specification = () => {
    
    const [arrVisible, setArrVisible] = useState([]);

    useEffect(() => {
        let newData = [];
        for(let i = 0; i < dataQA.length; i++){
            newData.push(false)
        }
        setArrVisible(newData);
    }, [])

    return (
        <div className="section section-spec">
            <img src={imgDeco} className="spec-bg-deco" />
            <img src={imgLine03} className="spec-bg-line03" />
            <div className="row">
                <div className="spec-content-image col-lg-7 col-12">
                    <img src={imgSolarPanel} />
                </div>
                <div className="spec-content col-lg-5 col-12 pt-5 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="title mb-3">
                                Specifications
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
            <div className="qa-section row justify-content-center">
                <div className="col-10">
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
                            <div 
                                className="description"
                                style={{
                                        'display': arrVisible[idx] ? 'block' : 'none',
                                        'opacity': arrVisible[idx] ? 1 : 0,
                                    }}
                                dangerouslySetInnerHTML={{__html: item.description }}
                            ></div>
                            <hr className="divider divider-fade divider-light my-3"></hr>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
  };
   
  
  export default Specification;
  