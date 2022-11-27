import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';


const BookNowModal = ({ product, setBooking }) => {
    // const BookNowModal = ({ productBooking, setProductBooking }) => {
    console.log(product);
    const { productName, categoryName, originalPrice, resalePrice, yearsOfUse, sellerName, location } = product;
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const productName = form.productName.value;
        const resalePrice = form.resalePrice.value;
        const phone = form.phone.value;
        const buyerName = user?.displayName;
        const location = form.location.value;
        console.log(buyerName, email, productName, resalePrice, phone, location);
        const bookingInfo = {
            buyerName,
            email,
            productName,
            resalePrice,
            phone,
            location
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooking(false);
                    toast.success('Your Booking is confirmed');
                }
            })
    }


    return (
        <div>
            <div>
                <div className="card-actions justify-center">

                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                                <label>Name</label>

                                <input name="buyerName" type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                                <input name="email" type="email" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                                <input name="productName" type="text" defaultValue={productName} disabled className="input w-full input-bordered" />
                                <input name="resalePrice" type="text" defaultValue={resalePrice} disabled className="input w-full input-bordered" />
                                <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                                <input name="location" type="text" placeholder="Your Location" className="input w-full input-bordered" />
                                <br />
                                <input className='btn btn-accent w-full' type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNowModal;