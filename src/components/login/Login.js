import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../Context/AuthContext';
import { FaGithub, FaGoogle } from 'react-icons/fa';



const Login = () => {
const {logInAuth , logInWithGoogle , logInWithGithub} = useContext(userContext)


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
		  })
		  .catch((error) => {
			const errorMessage = error.message;
			console.log(errorMessage);
			
		  })
	} 

	//  log in with github
	const singInWithGithub = ()=>{
		logInWithGithub()
		.then((result) => {
		const user = result.user;
		console.log(user);
		
		  }).catch((error) => {
		console.log(error);
		  });
	}
// sing in with google 
const singInWithGoogle=()=>{
	logInWithGoogle()
	.then((result) =>{
		const user = result.user;
		console.log(user);
	})
	.catch((error)=>{
		console.log(error);
	})
}

    return (
		<div>
		
        <div style={{backgroundColor:'#111827'}} onSubmit={singInHandler} className="w-full max-w-md p-8 space-y-3 rounded-xl  text-white mt-5" >
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

	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
	
		
		<button onClick={singInWithGoogle} aria-label="Log in with Twitter" className="p-3 rounded-sm">
      <Link className='text-2xl'><FaGoogle/></Link>
		</button>

		<button onClick={singInWithGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm">
		<Link className='text-2xl'><FaGithub></FaGithub> </Link>
		</button>
	</div>
	
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account? 
		<Link rel="noopener noreferrer" to='/register' className="underline dark:text-gray-100"> Register</Link>
	</p>
	
</div>
       </div>
    );
};

export default Login;