import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData=[
    {
        title:'Opening Hours',
        description: 'We are open 7 days',
        icon:faClock,
        background:'info'
    },
    {
        title:'Visit Our Location',
        description: 'Mohakhali ,Dhaka-1206',
        icon:faMapMarker,
        background:'dark'
    },{
        title:'Call Us Now',
        description: '+8801759380694',
        icon:faPhone,
        background:'info'
    }
]
const Businessinfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
              infosData.map(info => <InfoCard info={info}></InfoCard>)  
            }
            </div>
        </section>
    );
};

export default Businessinfo;