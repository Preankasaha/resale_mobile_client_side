import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Spinner/Spinner';
// import ReportedItems from '../ReportedItems/ReportedItems';
import { } from "react-icons/fa";
const Reported = () => {

    const { data: reporteds = [], refetch, isLoading } = useQuery({
        queryKey: ['reporteds'],
        queryFn: async () => {
            const res = await fetch(' https://resale-mobile-server.vercel.app/reporteds');
            const data = await res.json();
            return data;
        }
    });
    console.log(reporteds);
    const handleReportedDelete = reporteds => {
        console.log(reporteds);
        fetch(` https://resale-mobile-server.vercel.app/reporteds/${reporteds}`, {
            method: 'DELETE',

        })


            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success("You have deleteted the reported product successfully")

                }
            })

    }
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='bg-gradient-to-r from from-emerald-500 to-sky-500 text-black md:px-44 py-8 lg:p-14 '>
            <h3 className='text-5xl font-bold text-center uppercase'>Reported products</h3>
            <>{
                reporteds.length === 0 ?
                    <p className='text-2xl text-center font-bold uppercase my-4'>

                        No Item is mareked as reported  </p>
                    :
                    <p className='text-2xl text-center uppercase my-4'>{reporteds.length} items reported here</p>}
            </>

            <div className='grid grid-cols-1 gap-y-8 sm:py-24'>

                {
                    reporteds &&
                    reporteds.map(report =>
                        <>
                            <div>
                                <div className=''>
                                    <div className="card card-compact w-94 lg:w-96 lg:mx-64 text-black shadow-xl  glass">
                                        <figure><img src={report?.img
                                        } alt="" /></figure>
                                        <div className="card-body font-bold">
                                            <h2 className="card-title font-bold">Product Name:{report?.productName}</h2>
                                            <p className='text-xl'>$: {report?.resalePrice}</p>
                                            <p className='text-xl'>Description:{report?.description}</p>

                                        </div>
                                        <button className='btn btn-error btn-xs flex justify-center' onClick={() => handleReportedDelete(report._id)}>Delete</button>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

                {/* {
                    reporteds &&
                    reporteds.map(report => <ReportedItems
                        key={report._id}
                        report={report}
                    ></ReportedItems>
                    )
                } */}
            </div>
        </div>
    );
};

export default Reported;