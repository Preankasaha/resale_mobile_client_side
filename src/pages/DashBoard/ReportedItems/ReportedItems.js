// import React, { useContext } from 'react';
// import toast from 'react-hot-toast';
// import Spinner from '../../../components/Spinner/Spinner';
// import { AuthContext } from '../../../contexts/AuthProvider';

// const ReportedItems = ({ report }) => {
//     const { loading } = useContext(AuthContext)
//     console.log(report);
//     const handleReportedDelete = reported => {
//         fetch(` https://resale-mobile-server.vercel.app/reported/${reported}`, {
//             method: 'DELETE',

//         })

//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.deletedCount > 0) {

//                     toast.success("You have deleteted the reported product successfully")

//                 }
//             })
//     }
//     if (loading) {
//         return <Spinner></Spinner>
//     }
//     return (
//         <div>
//             <div className='p-8'>
//                 <div className="card card-compact w-96 text-black shadow-xl  glass">
//                     <figure><img src={report?.img} alt="" /></figure>
//                     <div className="card-body font-bold">
//                         <h2 className="card-title font-bold">Product Name:{report?.productName}</h2>
//                         <p className='text-xl'>$: {report?.resalePrice}</p>
//                         <p className='text-xl'>Description:{report?.description}</p>

//                     </div>
//                     <button onClick={() => handleReportedDelete(report._id)}>Delete</button>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReportedItems;