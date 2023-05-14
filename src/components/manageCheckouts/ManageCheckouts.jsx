import Footer from "../shared/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../access/AuthProvider";
import { useNavigate } from "react-router-dom";

const ManageCheckouts = () => {
    const [data,setData] = useState([]);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()

    console.log('email',user.email);
    useEffect(()=>{
        fetch(`http://localhost:5000/checkouts?email=${user.email}`,{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('car_access_token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(!data.error)setData(data);
            else{
                navigate('/',{replace:true});
            }
        })
        .catch(err=>{
            console.log('error: ',err.message)
        })
    },[navigate])
    return (
        <div>
            <div className="overflow-x-auto my-32">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map(d=><tr key={d._id}>
                                <th><span className="text-red-600 border rounded-full px-2 py-1 border-red-600">X</span></th>
                                <td>{d.name}</td>
                                <td>{d.userEmail}</td>
                                <td>{d.serviceTypr}</td>
                                <td>{d.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ManageCheckouts;