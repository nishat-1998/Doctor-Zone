import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main style={{height:'500px'}}className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
 <h1 style={{color:'#3A4256'}}>Your New Smile <br/>Starts Here</h1>
 <p className="text-secondary">Extraordinary team-based care from qualified compassionate professionals that understand your needs and truly care about your health and wellbeing.
Ready to schedule an appointment, have questions? We’re happy to help, call or text  +88-01759380694</p>
         <button className="btn btn-info">GET APPOINTMENT</button> 
          </div>
          <div className="col-md-6">
           <img src={chair} alt="" className="img-fluid"/>
          </div>
        </main>
    );
};

export default HeaderMain;