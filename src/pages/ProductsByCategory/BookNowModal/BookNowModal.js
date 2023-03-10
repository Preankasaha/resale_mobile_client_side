import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const BookNowModal = ({ productBooking, setProductBooking }) => {

    console.log(productBooking);

    const { productName, img, categoryName, originalPrice, resalePrice, yearsOfUse, sellerName, location } = productBooking;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const productName = form.productName.value;
        // const img = form.img.value;
        const resalePrice = form.resalePrice.value;
        const phone = form.phone.value;
        const buyerName = user?.displayName;
        const location = form.location.value;
        console.log(buyerName, email, productName, resalePrice, phone, location);
        const bookingInfo = {
            buyerName,
            email,
            productName,
            // img,
            resalePrice,
            phone,
            location
        }

        fetch(' https://resale-mobile-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('resaleMobileToken')}`
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProductBooking(null);
                    toast.success('Your Booking is confirmed');
                    navigate('/dashboard/myorders')
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
                            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">???</label>

                            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>


                                <input name="buyerName" type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                                <input name="email" type="email" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                                <input name="productName" type="text" defaultValue={productName} disabled className="input w-full input-bordered" />
                                {/* <input name="img" type="text" defaultValue={img} disabled className="input w-full input-bordered" /> */}
                                <input name="resalePrice" type="text" defaultValue={resalePrice} disabled className="input w-full input-bordered" />
                                <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                                <input name="location" type="text" placeholder="meeting location" className="input w-full input-bordered" />
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