import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.svg';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';


const Register = () => {
    const [error,setError] = useState('');

    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(!email || !password || !confirm){
            setError('All fields must be filled');
            return;
        }
        if(password!==confirm){
            setError('Passwords do not match');
            return;
        }
        if(password.length<6){
            setError('Password must be at least 6 characters');
            return;
        }
        console.log(email,password,confirm);

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state?.from?.pathname || '/',{replace:true});
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
                    <h1 className="text-5xl font-bold">Create an account</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mt-16">

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text">Confirm password</span>
                                    </label>
                                    <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" />
                                    
                                </div>
                                {error && <p className='text-xs text-red-600 my-2'>{error}</p>}
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value={'Register'}/>
                                </div>
                            </form>
                            <p className="text-sm mt-3">Already have an account?<Link to={'/login'} state={{from:location?.state?.from}} className="text-[#FB6F53] font-bold">Register</Link></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Register;