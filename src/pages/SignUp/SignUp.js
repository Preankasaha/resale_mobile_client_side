import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
// import Spinner from '../../components/Spinner/Spinner';
import SpinnerXs from '../../components/SpinnerXs/SpinnerXs';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hook/useToken/useToken';



const SignUp = () => {
    //useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, providerSignIn, loading } = useContext(AuthContext);
    //goggle provider
    const googleProvider = new GoogleAuthProvider();
    const [signUpError, setSignUpError] = useState('');
    //to set email in token
    const [email, setEmail] = useState('')
    const [customToken] = useToken(email);
    // const [token, setToken] = useState();
    const navigate = useNavigate();

    if (customToken) {
        navigate('/');
    }

    //handle submit for sign up
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('user sign up successfully')
                const userinfo = {
                    displayName: data.name,
                    email: data.email,
                    role: data.role
                }
                updateUser(userinfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role); //save user called in update user

                    })

                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error.message)
                setSignUpError(error.message)
            })

    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('saveuser:', data);
                // getUserToken(email);
                setEmail(data.email);
            })

    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('resaleMobileToken', data.accessToken);
    //                 navigate('/');
    //             }
    //         });
    // }

    // sign in with google
    const handleGoogleSignIn = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user
                const userInfo = {
                    disPlayName: user?.displayName,
                    email: user?.email,
                    role: 'Buyer'
                }
                //jwt user
                toast.success('You sign in successfully')
                fetch('http://localhost:5000/users', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        setEmail(user?.email);
                        // navigate('/');
                    })
            })
            .catch(error => {
                setSignUpError(error.message);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center text-white glass' style={{ backgroundImage: `url("")` }}>
            <div className='w-96 p-7'>
                <h2 className='text-5xl text-center font-bold uppercase'>Sign Up</h2>
                <p className='text-xl text-center my-4'>If You Are New To This Site, Please Register First</p>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Name</span></label>
                        <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p>{errors.name.message
                        }</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Email</span></label>
                        <input type="email" {...register("email", {
                            required: 'email is required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-warning'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Password</span></label>
                        <input type="password" {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: "password must be 6 charaters long" },
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/


                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-warning'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Your Role</span></label>
                        <select
                            {...register('role')}
                            className="select input-bordered w-full max-w-xs">
                            <option>Buyer
                            </option>
                            <option>Seller
                            </option>
                        </select>
                    </div>
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}

                    <div className='my-4'>
                        {loading ? <PrimaryButton>
                            <SpinnerXs></SpinnerXs>
                        </PrimaryButton>
                            :
                            <PrimaryButton>Sign Up</PrimaryButton>
                            // <input className='btn bg-gradient-to-r from-sky-900 to-cyan-500 w-full my-4 br-0' value="Sign Up" type="submit" />
                        }
                    </div>
                </form>

                <p>Already have an account? <Link className='text-secondary' to="/signin">Plz Sign In</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};


export default SignUp;