import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignIn = () => {
    //usefrom hook
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn, providerSignIn } = useContext(AuthContext);
    //goggle provider
    const googleProvider = new GoogleAuthProvider();
    const [logInError, setLogInError] = useState('');
    const [data, setData] = useState('');

    //uselocation and usenavigate to redirect page to desired destination
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    //handlesubmit for login
    const handleLogin = data => {
        console.log(data);
        // console.log(errors);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLogInError(error.message)
            })
    }
    // sign in with google
    const handleGoogleSignIn = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user
                //jwt user
                const userInfo = {
                    disPlayName: user?.displayName,
                    email: user?.email,
                    role: 'Buyer'
                }
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
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => {
                setLogInError(error.message);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center text-white'>
            <div className='w-96 p-7'>
                <h2 className='text-5xl text-center font-bold uppercase'>Sign In</h2>
                <p className='text-2xl text-center my-4'>To Visit The Site, Sign In First</p>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-warning'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text text-white">Forget Password?</span></label>
                        {errors.password && <p className='text-warning'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Sign In" type="submit" />
                    <div> {logInError && <p>{logInError}</p>}</div>
                    <div>
                    </div>
                </form>
                <p>New to Resale Mobile <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignIn;