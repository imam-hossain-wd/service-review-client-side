import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userContext } from '../../Context/AuthContext';
import { useTitle } from '../../hooks/useTittle';
import SocialLogIn from '../../shared/SocialLogIn/SocialLogIn';



const Login = () => {
	useTitle('Login')
const {logInAuth} = useContext(userContext);
const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || '/';

// log in email and password
	const singInHandler = (e)=>{
		e.preventDefault()
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		form.reset();
		logInAuth(email,password)
		.then((userCredential) => {	
			const user = userCredential.user;
			console.log(user);
			navigate(from, {replace:true})

			
			const currentUser = {
				email: user.email
			}
			console.log(currentUser);

			//get jwt token
			fetch('https://service-review-server-xi.vercel.app/jwt', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(currentUser)
			})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				//set token in localstorage
				localStorage.setItem('Service-token', data.token);
				// navigate(from, {replace:true})
			})
			toast.success("Successfully login!", {
				position: toast.POSITION.TOP_CENTER
			  });
		  })
		  .catch((error) => {
			const errorMessage = error.message;
			toast.error(errorMessage, {
				position: toast.POSITION.TOP_CENTER
			  });
			
		  })
	} 

    return (
		<div>
		
        <div style={{backgroundColor:'#111827'}} onSubmit={singInHandler} className="w-full max-w-md p-8 space-y-3 rounded-xl  text-white mt-5 mx-auto" >
	<h1 className="text-2xl font-bold text-center">Log In</h1>
	<p className='text-center'>Sign in to access your account</p>
	<form noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label forhtml="username" className="block ">Email</label>
			<input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label forhtml="password" className="block ">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
			<div className="flex justify-end text-xs ">
				<Link rel="noopener noreferrer" to="/">Forgot Password?</Link>
			</div>
		</div>
		
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400">Sign in</button>
	</form>

	<SocialLogIn/>
	
	<p className="text-md text-center sm:px-6 dark:text-gray-400">Don't have an account? 
		<Link rel="noopener noreferrer" to='/register' className="underline dark:text-gray-100"> Register</Link>
	</p>
	
</div>
       </div>
    );
};

export default Login;