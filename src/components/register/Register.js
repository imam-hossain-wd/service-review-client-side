import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { userContext } from '../../Context/AuthContext';


const Register = () => {

    const {singUpAuth} = useContext(userContext)
    const singUpHandler = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        // const photoURL = form.url.value;
		
        console.log(email, name, password);
        form.reset()
		singUpAuth(email ,password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
			})
			.catch(error=>console.log(error)) 
    }


    return (
        <div>
            <div onSubmit={singUpHandler}  style={{backgroundColor:'#111827'}} className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 text-white mt-5">
	<h1 className="text-2xl font-bold text-center ">Register</h1>
	
	<form noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label forhtml="username" className="block ">Full Name</label>
			<input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label forhtml="username" className="block ">Email</label>
			<input type="email" name="email" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label forhtml="password" className="block ">Password</label>
			<input type="password" name="password" id="password" placeholder="password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
			
		</div>
		
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400" >Register</button>
	</form>
	

	<p className="text-xs text-center sm:px-6 font-bold">Already have an  account?

		<Link rel="noopener noreferrer" to='/login' className="underline dark:text-gray-100"> Log in</Link>
	</p>
</div>
            
        </div>
    );
};

export default Register;