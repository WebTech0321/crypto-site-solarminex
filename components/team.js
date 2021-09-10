import React, {useState, useEffect} from "react"

const team = [
    {
        name: 'ASLI BİRTÜRK',
        avatar: require('../assets/img/team-asli.jpg')
    },
    {
        name: 'GÜNNUR OĞUZ',
        avatar: require('../assets/img/team-gunnur.jpg')
    },
    {
        name: 'MUSTAFA YALÇIN',
        avatar: require('../assets/img/team-mustafa.jpg')
    },
    {
        name: 'SEDAT ALTINKAYA',
        avatar: require('../assets/img/team-sedat.jpg')
    },
    {
        name: 'YASİN ÖZEN',
        avatar: require('../assets/img/team-yasin.jpg')
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
                            <div>{member.name}</div>
                            <img src={member.avatar} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  };
   
  
  export default Team;
  