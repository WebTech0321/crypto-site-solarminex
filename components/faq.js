import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgDeco from '../assets/img/decoration.png'

const dataQA = [
    {
        title: "Who can do SolarMineX solar mining?",
        description: "Anyone who already has a solar photovoltaic system and/or SolarMineX Mobile Solar Mining Device can mine SolarMineX."
    },
    {
        title: "Where can SolarMineX solar mining be done?",
        description: "SolarMineX solar mining can be done anywhere receives sunlight.<br/>In addition to the photovoltaic solar energy system installed in homes and workplaces, in case of obtaining from the SolarMineX Mobile Solar Mining device mining can even be done while traveling, enjoying the beach or walking on the road."
    },
    {
        title: "Are mining rigs and graphics cards needed in SolarMineX solar mining?",
        description: "No. SolarMineX solar mining does not require expensive mining rigs, graphics cards or computers and megawatts of electricity. This is against the nature of SolarMineX solar mining. SolarMineX solar mining aims not to consume electricity, but to generate electricity with solar energy with a harmless method."
    },
    {
        title: "How is the mining reward distributed in SolarMineX solar mining?",
        description: "Thanks to the unique formula of SolarMineX, mining rewards are given equally for each unit of electricity produced. More mining that generates more electricity earns more."
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
                    <div key={idx}>
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
                    </div>
                ))}
            </div>
        </div>
    );
  };
   
  
  export default FAQ;
  