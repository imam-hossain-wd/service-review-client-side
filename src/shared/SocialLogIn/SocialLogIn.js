import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const SocialLogIn = () => {
    const { logInWithGoogle , logInWithGithub} = useContext(userContext)
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';


	//  log in with github
	const singInWithGithub = ()=>{
		logInWithGithub()
		.then((result) => {
		const user = result.user;
		console.log(user);
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
		  });
	}

// sing in with google 
const singInWithGoogle=()=>{
	logInWithGoogle()
	.then((result) =>{
		const user = result.user;

        const currentUser = {
            email: user.email
        }
        console.log(currentUser);

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
	.catch((error)=>{
		const errorMessage = error.message;
			toast.error(errorMessage, {
				position: toast.POSITION.TOP_CENTER
			});

	})
}



    return (
        <div>
            <div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 dark:text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
            
            <div className="flex justify-center space-x-4">
	
		
    <button onClick={singInWithGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
  <Link className='text-2xl'><FaGoogle/></Link>
    </button>

    <button onClick={singInWithGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm">
    <Link className='text-2xl'><FaGithub></FaGithub> </Link>
    </button>
</div>
            
        </div>
    );
};

export default SocialLogIn;