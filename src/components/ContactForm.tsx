import React, { useState } from 'react';
import './ContactForm.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Components
import FormPart from './FormPart.tsx';
import AlertPart from './AlertPart.tsx';

const ContactForm = () => {
    const [validated, setValidated] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [checkedRadio, setCheckedRadio] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleCheck = (id: string) => {
        setCheckedRadio(id);
        setIsChecked(true);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false || !document.querySelector('input[name="group1"]:checked')) {
            event.preventDefault();
            event.stopPropagation();
            setCheckedRadio('');
        } else {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                window.location.reload();
            }, 3000);
        }

        setValidated(true);
    };

    return (
        <Container fluid className='cs-h cs-bg d-flex flex-column justify-content-center align-items-center'>
            <AlertPart
                showAlert={showAlert} 
                setShowAlert={setShowAlert} />
            <FormPart 
                validated={validated} 
                handleSubmit={handleSubmit} 
                handleCheck={handleCheck} 
                checkedRadio={checkedRadio} 
                isChecked={isChecked} />
        </Container>
    );
}

export default ContactForm;