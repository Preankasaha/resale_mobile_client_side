import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleAddProduct = (data) => {
        console.log(data);
        const productInfo = {
            name: user?.name,
            email: user?.email,
            categoryName: data.categoryName,
            condition: data.condition,
            description: data.description,
            img: data.img,
            location: data.location,
            mobile: data.mobile,
            originalPrice: data.originalPrice,
            productName: data.productName,
            resalePrice: data.resalePrice
        }
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.productName} is added successfully`);
                navigate('/dashboard/myproduct')
            })
    }
    //loader
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='w-full text-white bg-gradient-to-r from-sky-900 to-cyan-500 p-8 lg:px-32'>
            <h2 className="text-5xl text-center my-8 uppercase">Add Your Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='grid grid-cols-1 lg:grid-cols-2 justfy-between'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Product Name</span></label>
                        <input type="text" {...register("productName", {
                            required: "Product Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Product Image</span></label>
                        <input type="text" placeholder {...register("img", {
                            required: "Product Image is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Product Condition</span></label>
                        <select
                            {...register('condition')}
                            className="select input-bordered w-full max-w-xs">
                            <option>Excellent
                            </option>
                            <option>Good
                            </option>
                            <option>Fair
                            </option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Product Category</span></label>
                        <select
                            {...register('categoryName')}
                            className="select input-bordered w-full max-w-xs">
                            <option>Samsung
                            </option>
                            <option>OPPO
                            </option>
                            <option>iPhone
                            </option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Original Price</span></label>
                        <input type="text" {...register("originalPrice", {
                            required: 'Original Price is required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Resale Price</span></label>
                        <input type="text" {...register("resalePrice", {
                            required: 'Resale price is required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Years of Use</span></label>
                        <input type="text" {...register("yearsOfUse", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.yearsOfUse && <p className='text-red-500'>{errors.yearsOfUse.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Mobile</span></label>
                        <input type="text" {...register("mobile", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Location</span></label>
                        <input type="text" {...register("location", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Product Description</span></label>
                        <textarea {...register("description", {
                            required: "Product Description is Required"
                        })} className="textarea textarea-bordered"></textarea>
                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                    </div>

                </div>
                <div className='flex justify-center'>
                    <input className='btn btn-neutral btn-xl mt-4' value="Add Product" type="submit" />
                </div>
            </form>
        </div>
    );
};


export default AddProduct;