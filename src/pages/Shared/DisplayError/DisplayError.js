import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/signin');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='md:flex flex-col lg:flex'>
            <div className='bg-gradient-to-r from-sky-900 to-cyan-500 p-14'><p className='text-red-800 text-5xl font-extrabold'>{error.statusText || error.message}</p>
                <h4 className="text-3xl text-white mt-8"> Please <button className='btn btn-sm' onClick={handleLogOut}>Sign out</button> and log back in</h4></div>
            <img className='lg:w-full' src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" alt="404 page" />

        </div>
    );
};

export default DisplayError;
