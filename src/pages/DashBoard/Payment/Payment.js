import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import Check from './Check';


const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    const navigation = useNavigation();
    console.log(booking);
    const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
    console.log(stripePromise);
    if (navigation.state === 'loading') {
        return <Spinner></Spinner>
    }
    return (
        <div className=''>
            <h3 className="text-3xl my-4">Payment for {booking?.productName
            }</h3>
            <p className="text-xl">Please pay <strong className='text-2xl'>${booking?.resalePrice}</strong> for the product</p>
            <div className='w-96 my-12'>
                <Elements className='bg-neutral-500' stripe={stripePromise}>
                    <Check
                        booking={booking}></Check>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;