import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = (data) => {
        console.log(data);
    }
    return (
        <div className='w-full text-white bg-gradient-to-r from-sky-900 to-cyan-500 p-8 lg:px-32'>
            <h2 className="text-4xl text-center my-8 uppercase">Add Your Product</h2>
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
                        <input type="file" {...register("image", {
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
                            <option>iphone
                            </option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Original Price</span></label>
                        <input type="text" {...register("originalPrice", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Resale Price</span></label>
                        <input type="text" {...register("resaleprice", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Product Description</span></label>
                        <textarea {...register("description", {
                            required: "Product Description is Required"
                        })} className="textarea textarea-bordered"></textarea>
                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white text-xl">Seller Name</span></label>
                        <input type="text" {...register("sellerName", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
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
                        {errors.location && <p className='text-red-500'>{errors.loation.message}</p>}
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