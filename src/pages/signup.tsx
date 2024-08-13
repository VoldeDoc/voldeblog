import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Signup() {
	const [signup, setSignup] = useState({
		email: '',
		pwd: '',
		confirmPwd: ''
	});

	const [showPassword, setShowPassword] = useState(false);
	const [passwordStrength, setPasswordStrength] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSignup({
			...signup, [name]: value
		});

		if (name === 'pwd') {
			setPasswordStrength(calculatePasswordStrength(value));
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form Data:', signup);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const calculatePasswordStrength = (password: string) => {
		if (password.length < 6) return 'Weak';
		if (password.length < 10) return 'Moderate';
		return 'Strong';
	};

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 d-none d-md-block">
						<div className="login-image">
							<img src="/background.jpg" alt="" className="background-image" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="flex justify-center items-center min-h-screen">
							<div className="w-full max-w-md">
								<div className="bg-white shadow-lg rounded p-6">
									<h1 className="text-center text-2xl font-bold mb-6">Register</h1>
									<form onSubmit={handleSubmit}>
										<div className="mb-4 relative">
											<input
												type="email"
												name="email"
												id="email"
												className="form-input w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
												placeholder="Enter your email"
												value={signup.email}
												onChange={handleChange}
											/>
										</div>
										<div className="mb-4 relative">
											<input
												type={showPassword ? 'text' : 'password'}
												name="pwd"
												id="pwd"
												className="form-input w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
												placeholder="Enter your password"
												value={signup.pwd}
												onChange={handleChange}
											/>
											<span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
												<i
													className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
													onClick={togglePasswordVisibility}
													style={{ cursor: 'pointer' }}
												></i>
											</span>
											<div className="mt-2 text-sm text-red-500">
												Password strength: {passwordStrength}
											</div>
										</div>
										<div className="mb-4 relative">
											<label htmlFor="confirmPwd">Confirm password</label>
											<input
												type={showPassword ? 'text' : 'password'}
												name="confirmPwd"
												id="confirmPwd"
												className="form-input w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
												value={signup.confirmPwd}
												onChange={handleChange}
											/>
											<span className="absolute bottom-0 right-0 pr-3 flex items-center text-sm leading-5">
												<i
													className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
													onClick={togglePasswordVisibility}
													style={{ cursor: 'pointer' }}
												></i>
											</span>
										</div>
										<div className="options flex justify-center space-x-4 mb-4">
											<Link to=''>
												<img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" className='h-8' />
											</Link>
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
										<div className="text-center mb-2">
											<button
												type="submit"
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
											>
												Signup
											</button>
										</div>
                                        <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}