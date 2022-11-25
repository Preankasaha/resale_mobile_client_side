import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import Secondary from '../components/Secondary/Secondary';

const SignUp = () => {
    //useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    //handle submit for sign up
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('user sign up successfully')
                const userinfo = {
                    displayName: data.name
                }
                updateUser(userinfo)
                    .then(() => { })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error.message)
                setSignUpError(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center uppercase'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p>{errors.name.message
                        }</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: 'email is required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-warning'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: "password must be 6 charaters long" },
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/


                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-warning'>{errors.password.message}</p>}
                    </div>
                    <select type="select" {...register("select", {
                        required: 'selection is required'
                    })} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>You are a</option>
                        <option selected>Buyer</option>
                        <option>Seller</option>
                    </select>
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    <input className='btn btn-accent w-full' value="Sign Up" type="submit" />

                </form>

                <p>Already have an account? <Link className='text-secondary' to="/login">Plz Sign In</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;