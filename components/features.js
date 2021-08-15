import React, {useState, useEffect} from "react"

const data = [
    {
        image: require('../assets/img/icon-spec.png'),
        caption: 'Specifications',
    },
    {
        image: require('../assets/img/icon-help.png'),
        caption: 'How to use',
    },    
    {
        image: require('../assets/img/icon-guarantee.png'),
        caption: 'Guarantee',
    },    
    {
        image: require('../assets/img/icon-solar.png'),
        caption: 'Solar',
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
  