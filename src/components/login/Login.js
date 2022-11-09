import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

	const singInHandler = (e)=>{
		e.preventDefault()
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		form.reset()	
	} 

    return (
       <div>
		<div style={{backgroundColor:'#111827'}} onSubmit={singInHandler} className="w-full max-w-md p-8 space-y-3 rounded-xl  text-white " >
	<h1 className="text-2xl font-bold text-center">Log In</h1>
	<p className='text-center'>Sign in to access your account</p>
	<form noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label forhtml="username" className="block ">Email</label>
			<input type="text" name="email" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label forhtml="password" className="block ">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
			<div className="flex justify-end text-xs ">
				<Link rel="noopener noreferrer" to="/">Forgot Password?</Link>
			</div>
		</div>
		
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400">Log in</button>
	</form>
	
	
	<p className="text-center">Don't have an account? 
		<Link rel="noopener noreferrer" to='/register' className="underline dark:text-gray-100"> Register</Link>
	</p>
	
</div>
       </div>
    );
};

export default Login;