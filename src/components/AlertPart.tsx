import React, { useState, FC } from 'react';
import './ContactForm.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Alert, Image } from 'react-bootstrap';
//Images
import ImgOk from '../assets/images/icon-success-check.svg';

type AlertPartProps = {
    showAlert: boolean; 
    setShowAlert: (showAlert: boolean) => void;
};

const AlertPart: FC<AlertPartProps> = ({ showAlert, setShowAlert }) => {
    return (
        <Alert 
            show={showAlert} 
            variant='success' 
            onClose={() => setShowAlert(false)}
            className='cs-alert border-0 cs-bg-2' >
                <Alert.Heading className='text-white'><Image src={ImgOk} alt='ok' /> Message Sent!</Alert.Heading>
                <p className='text-white m-0'>Thanks for completing the form. We'll be in touch soon!</p>
        </Alert>
    );
}

export default AlertPart;