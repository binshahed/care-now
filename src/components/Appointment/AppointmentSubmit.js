import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppointmentSubmit = () => {
    return (
        <div className="App my-5">
            <img src="https://icon-library.com/images/green-check-mark-icon-png/green-check-mark-icon-png-13.jpg" alt="" />
            <h1>Your Appointment is <br /> Confirmed </h1>
            <br /> 
            <br /> 
            <Link to="/">
            <Button variant="info" type="submit">
            Back to Home
          </Button>
                
                </Link>
        </div>
    );
};

export default AppointmentSubmit;