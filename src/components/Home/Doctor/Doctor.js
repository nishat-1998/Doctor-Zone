import React from 'react';
import img from '../../../images/5790-removebg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>Dr. Amir</h4>
            <p> <FontAwesomeIcon className="text-info" icon={faPhoneAlt}/> +880-1886071998</p>
        </div>
    );
};

export default Doctor;