import React, {useState, useEffect} from "react"

const data = [
    {
        image: require('../assets/img/icon-help.png'),
        caption: 'What',
        link: '#what'
    },    
    {
        image: require('../assets/img/icon-spec.png'),
        caption: 'How',
        link: '#how'
    },
    {
        image: require('../assets/img/icon-solar.png'),
        caption: 'Where',
        link: '#where'
    },
    {
        image: require('../assets/img/icon-premining.png'),
        caption: 'PreMining App',
        link: '#premining'
    },    
]

const Features = () => {
    return (
        <div className="section-features">
            {data.map((item, idx) => (
                <a href={item.link} className="feature-item" key={idx}>
                    <img src={item.image}/>
                    <div className="feature-item-caption">{item.caption}</div>
                </a>
            ))}
        </div>
    );
  };
  
  export default Features;
  