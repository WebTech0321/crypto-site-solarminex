import React, {useState, useEffect} from "react"

const team = [
    {
        name: 'ASLI BİRTÜRK',
        avatar: require('../assets/img/aslibirturk.png')
    },
    {
        name: 'MUSTAFA YALÇIN',
        avatar: require('../assets/img/msutafayalcin.png')
    },
    {
        name: 'AV. GÜNNUR OĞUZ',
        avatar: require('../assets/img/gunnuroguz.png')
    },
    {
        name: 'SEDAT ALTINKAYA',
        avatar: require('../assets/img/sedataltinkaya.png')
    },
    {
        name: 'YASİN ÖZEN',
        avatar: require('../assets/img/yasinozen.png')
    },
]

const Team = () => {

    return (
        <div className="section section-team">
            <div className="team-content">
                <h1 className="title mb-3">
                    Team
                    <div className="text-line text-line2"></div>                        
                </h1>

                <div className="team-members">
                    {team.map((member, idx) => (
                        <div key={idx} className="member">
                            <img src={member.avatar} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  };
   
  
  export default Team;
  