import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Check = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [processingCard, setProcessingCard] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { resalePrice, buyerName, email, _id } = booking;
    console.log(booking);

    useEffect(() => {
        console.log(resalePrice);
        // Create PaymentIntent as soon as the page loads
        if (resalePrice) {
            fetch("https://resale-mobile.web.app/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('resaleMobileToken')}`
                },
                body: JSON.stringify({ resalePrice }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [resalePrice]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError(''); //clear error
        }
        setSuccess('');
        setProcessingCard('')
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }


        if (paymentIntent.status === "succeeded") {
            toast.success('Your payment completed')
            setSuccess('Congrates! Payment completed')
            // setTransactionId(paymentIntent.id);
            setProcessingCard(false)

            console.log('card info', card);
            // store payment info in the database
            const payment = {
                resalePrice,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            console.log('paymentIntent', paymentIntent);
            fetch('https://resale-mobile.web.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }

        setProcessingCard(false);

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-xs my-4' type="submit" disabled={!stripe || !clientSecret || processingCard}>
                    Pay
                </button>
            </form>
            <p className='bg-red-800'>{cardError}</p>
            {
                success && <div>
                    <p className='text-success font-bold'>{success}</p>
                    <p className='my-4'>Your TransactionId :</p>
                    <p className='font-bold'>{transactionId}</p>
                </div>
            }
        </>
    );
};

export default Check;