import { useLoaderData } from "react-router-dom";
import banner from '../../assets/common_banner_img.png';
import { useContext, useState } from "react";
import { AuthContext } from "../access/AuthProvider";
import Swal from 'sweetalert2'

const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    const [userEmail,setUserEmail] = useState(user.email);
    
    
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        
        const data = {
            userEmail:user.email,
            serviceId:service._id,
            serviceTypr:service.type,
            name,
            date,
            phone,
            email,
            message
        }
        fetch('http://localhost:5000/checkOut',{
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            console.log(Swal.fire({
                title: 'Checkout Successfull!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'OK'
              }))
        })
        .catch(err=>console.log(err.message))
        
    }
    return (
        <div>
            <div className=' w-full h-fit relative rounded-xl overflow-hidden'>
                <img className='w-full' src={banner} alt="" />
                <h1 className='text-5xl absolute top-1/2 -translate-y-1/2 left-24 font-bold text-white z-10'>{service.type} Checkout</h1>
                <div className='h-full absolute top-0 w-full bg-gradient-to-r from-black via-gray-700 to-transparent opacity-50 z-0'></div>
            </div>
            <div className="bg-base-200 p-20 rounded-xl my-32">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-7">
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered w-full border-none" />
                        <input type="date" name="date" className="input input-bordered w-full border-none" />
                        <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered w-full border-none" />
                        <input type="email" placeholder="Your Email" value={userEmail} onChange={e=>setUserEmail(e.target.value)} name="email" className="input input-bordered w-full border-none" />
                    </div>
                    <div className="mt-7">
                        <textarea placeholder="Your message" name="message" className="textarea textarea-bordered border-none textarea-lg h-52 w-full" ></textarea>
                    </div>
                    <div className="mt-7">
                        <input type="submit" className="btn btn-block bg-[#FF3811] border-none" value='Order Confirm'/>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default CheckOut;