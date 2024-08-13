import React, { useState } from 'react'
import { Link } from "react-router-dom";
export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        pwd: '',
        rem: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData, [name]: type === 'checked' ? checked : value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data:', formData);

    }

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 d-none d-md-block">
                        <div className="login-image ">
                            <img src="/background.jpg" alt="" className="background-image" />
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="flex justify-center items-center min-h-screen ">
                            <div className="w-full max-w-md">
                                <div className="bg-white shadow-lg rounded p-6">
                                    <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4 relative">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-input w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter your email"
                                                value={formData.email} onChange={handleChange}
                                            />



                                        </div>
                                        <div className="mb-4 relative">
                                            <input
                                            type={showPassword ? 'text' :'password'}
                                                name="pwd"
                                                id="pwd"
                                                className="form-input w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                                                placeholder="Enter your password"
                                                value={formData.pwd} onChange={handleChange}
                                            />
                                            <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                                <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={togglePasswordVisibility}></i>
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center">
                                                <input type="checkbox" name="rem" id="rem" className="mr-2 leading-tight" checked={formData.rem} onChange={handleChange} />
                                                <label htmlFor="rem" className="text-sm text-gray-700">Remember me</label>
                                            </div>
                                            <div>
                                                <Link to="/forget-pwd" className="text-blue-500 hover:text-blue-700 text-sm">Forgot password?</Link>
                                            </div>
                                        </div>

                                        <div className="options  flex justify-center space-x-4 mb-4">

                                            <Link to=''>                                            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" className='h-8' /></Link>

                                            <Link to=''>
                                                <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="" className='h-8' />
                                            </Link>

                                            <Link to=''>
                                                <img src="https://img.icons8.com/?size=100&id=22989&format=png&color=000000" alt="" className='h-8' />
                                            </Link>

                                            <Link to=''>
                                                <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" className='h-8' />
                                            </Link>


                                        </div>

                                        <div className=" text-center mb-2">
                                            <button
                                                type="submit"
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <p className='text-center'>Don't have an account? <Link to='/register' className='text-blue-600'>Register</Link> </p>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}