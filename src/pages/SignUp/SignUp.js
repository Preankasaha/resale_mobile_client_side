import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import Secondary from '../components/Secondary/Secondary';

const SignUp = () => {
    //useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, providerSignIn } = useContext(AuthContext);
    //goggle provider
    const googleProvider = new GoogleAuthProvider();
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

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
                    // photoURL: data.photoURL
                }
                updateUser(userinfo)
                    .then(() => {
                        // saveUser(data.name, data.email); //save user called in update user
                        navigate('/')
                    })

                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error.message)
                setSignUpError(error.message)
            })
        // const saveUser = (name, email) => {
        //     const user = { name, email };
        //     console.log(user);
        //     fetch('http://localhost:5000/users', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(user)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log('saveuser:', data);
        //             navigate('/');
        //         })

        // sign in with google
        // const handleGoogleSignIn = () => {
        //     providerSignIn(googleProvider)
        //         .then(result => {
        //             const user = result.user
        //             //jwt user
        //             toast.success('You sign in successfully')
        //             navigate('/');
        //         }).catch(error => {
        //             setSignUpError(error.message);
        //         })

    }
    return (
        <div className='h-[800px] flex justify-center items-center text-white'>
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
                    <input className='btn btn-accent w-full my-4' value="Sign Up" type="submit" />

                </form>

                <p>Already have an account? <Link className='text-secondary' to="/signin">Plz Sign In</Link></p>
                <div className="divider">OR</div>
                {/* <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};
// }
// }
export default SignUp;