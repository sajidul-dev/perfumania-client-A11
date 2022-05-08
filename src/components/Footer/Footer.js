import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Facebook, Google, Linkedin, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    const date = new Date()
    const currentDate = date.getFullYear()
    return (
        <div className=' w-100'>
            <footer className='text-center mt-5 p-3 text-dark'>
                <div>
                    <p>Follow us: </p>
                    <Facebook className='text-dark m-2 fs-5'></Facebook>
                    <Twitter className='text-dark m-2 fs-5'></Twitter>
                    <Google className='text-dark m-2 fs-5'></Google>
                    <Linkedin className='text-dark m-2 fs-5'></Linkedin>
                </div>
                <div>
                    <small className='me-2'>copyright</small>
                    <FontAwesomeIcon className='me-2' icon={faCopyright}></FontAwesomeIcon>
                    <p className='d-inline'>{currentDate} PERFUMANIA. All Rights Reserved</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;