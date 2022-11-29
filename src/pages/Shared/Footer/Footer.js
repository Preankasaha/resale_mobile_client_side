import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gradient-to-r from from-emerald-500 to-sky-500 text-black font-bold">
                <div>

                    <p className='text-2xl font-bold'>Resale Mobile</p>
                    <p>Providing reliable services since 2014</p>
                </div>
                <div>
                    <span className="footer-title text-black">Services</span>

                    <Link className="link link-hover">Selling</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title text-black">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>

                </div>
                <div>
                    <span className="footer-title text-black ">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;