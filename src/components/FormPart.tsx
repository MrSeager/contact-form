import React, { useState, ChangeEvent, FC } from 'react';
import './ContactForm.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

type FormPartProps = {
    validated: boolean; 
    handleSubmit: (event: any) => void;
    handleCheck: (id: string) => void; 
    checkedRadio: string;
    isChecked: boolean;
}

const FormPart: FC<FormPartProps> = ({ validated, handleSubmit, handleCheck, checkedRadio, isChecked }) => {
    const [email, setEmail] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <Container fluid className='bg-white rounded p-4 cs-w'>
                <h1 className='cs-fw-7 cs-tc-grey-2'>Contact Us</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='w-100'>
                    <Row className='cs-row-gap'>
                        <Form.Group as={Col} xs={6} controlId='validationCustom01'>
                            <Form.Label className='cs-tc-grey-2'>First Name <span className='cs-tc-grey'>*</span></Form.Label>
                            <Form.Control
                                required
                                type='text'
                                autoComplete="given-name"
                                className='border-2 cs-bc cs-tc-grey-2'
                                />
                            <Form.Control.Feedback type="invalid" className='cs-fs'>This field is required</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xs={6} controlId='validationCustom02'>
                            <Form.Label className='cs-tc-grey-2'>Last Name <span className='cs-tc-grey'>*</span></Form.Label>
                            <Form.Control
                                required
                                type='text'
                                autoComplete="family-name"
                                className='border-2 cs-bc cs-tc-grey-2'
                                />
                            <Form.Control.Feedback type="invalid" className='cs-fs'>This field is required</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} controlId='validationCustom03' className=''>
                            <Form.Label className='cs-tc-grey-2'>Email Address <span className='cs-tc-grey'>*</span></Form.Label>
                            <Form.Control
                                required
                                type='email'
                                autoComplete="email"
                                value={email}
                                onChange={handleChange}
                                className='border-2 cs-bc cs-tc-grey-2'
                                />
                            <Form.Control.Feedback type="invalid" className='cs-fs'>{!email ? 'This field is required' : 'Please enter a valid email address'}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xs={12}>
                            <Form.Label className='cs-tc-grey-2'>Query Type <span className='cs-tc-grey'>*</span></Form.Label>
                            <Row>
                                <Col xs={12} lg={6} className='mb-3 mb-lg-0'>
                                    <Form.Check
                                        required
                                        inline
                                        label='General Enquiry'
                                        name="group1"
                                        type='radio'
                                        id='inline-radio-1'
                                        className={`rounded py-3 px-5 w-100 cs-tc-grey-2 cs-radio ${checkedRadio === 'inline-radio-1' ? 'checked' : ''} ${!isChecked && validated ? 'invalid' : ''}`}
                                        onChange={() => handleCheck('inline-radio-1')}
                                        />
                                </Col>
                                <Col xs={12} lg={6}>
                                    <Form.Check
                                        required
                                        inline
                                        label='Support Request'
                                        name="group1"
                                        type='radio'
                                        id='inline-radio-2'
                                        className={`rounded py-3 px-5 w-100 cs-tc-grey-2 cs-radio ${checkedRadio === 'inline-radio-2' ? 'checked' : ''} ${!isChecked && validated ? 'invalid' : ''}`}
                                        onChange={() => handleCheck('inline-radio-2')}
                                        />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} controlId='validationCustom04'>
                            <Form.Label className='cs-tc-grey-2'>Message <span className='cs-tc-grey'>*</span></Form.Label>
                            <Form.Control
                                required
                                type='text'
                                as='textarea'
                                rows={2}
                                className='border-2 cs-bc cs-tc-grey-2'
                                />
                            <Form.Control.Feedback type="invalid" className='cs-fs'>This field is required</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} controlId='validationCustom04'>
                            <Form.Check
                                required
                                type='checkbox'
                                id='default-checkbox'
                                className='cs-checkbox'
                                label='I consent to being contacted by the team'
                                />
                            <Form.Control.Feedback type="invalid">To submit this form, please consent to being contacted</Form.Control.Feedback>
                        </Form.Group>
                        <Col xs={12}>
                            <Button type='submit' className='w-100 p-3 cs-btn border-0'>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
    );
}

export default FormPart;