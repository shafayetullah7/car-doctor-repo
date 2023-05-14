import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/login.svg';
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [error,setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    
    const handleSubmit = e =>{
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if(!email || !password){
            setError('All fields must be filled');
            return;
        }
        console.log(email,password);

        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
            const loggedUser = {email:result.user.email}

            fetch('http://localhost:5000/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(loggedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                localStorage.setItem('car_access_token',data.token);
            })
            .catch(err=>console.log(err.message))
            navigate(location?.state?.from?.pathname || '/',{replace:true})
        })
        .catch(err=>{
            console.log(err.message);
        })
    }

    return (
        <div className="hero mt-20">
            <div className="hero-content w-full flex-col items-center lg:gap-20 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-[350px]' src={login} alt="" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Login</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mt-16">

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    
                                </div>
                                {error && <p className='text-xs text-red-600 my-2'>{error}</p>}
                                <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value={'Login'}/>
                                </div>
                            </form>
                            <p className="text-sm mt-3">Do not have an account?<Link to={'/register'} state={{from:location?.state?.from}} className="text-[#FB6F53] font-bold">Register</Link></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;