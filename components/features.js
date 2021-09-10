import React, {useState, useEffect} from "react"

const data = [
    {
        image: require('../assets/img/icon-help.png'),
        caption: 'What',
    },    
    {
        image: require('../assets/img/icon-spec.png'),
        caption: 'How',
    },
    {
        image: require('../assets/img/icon-solar.png'),
        caption: 'Where',
    },
    {
        image: require('../assets/img/icon-premining.png'),
        caption: 'PreMining App',
    },    
]

const Features = () => {
    return (
        <div className="section-features">
            {data.map((item, idx) => (
                <div className="feature-item" key={idx}>
                    <img src={item.image}/>
                    <div className="feature-item-caption">{item.caption}</div>
                </div>
            ))}
        </div>
    );
  };
  
  export default Features;
  