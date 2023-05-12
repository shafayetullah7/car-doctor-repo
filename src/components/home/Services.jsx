import { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    const [services,setServices] = useState([]);
    const [all,setAll] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data);
        });
    },[]);
    useEffect(()=>{
        setData(services.slice(0,6));
    },[services]);

    useEffect(()=>{
        if(all)setData(services);
        else setData(services.slice(0,6));
    },[all,services])

    console.log(data);
    return (
        <div>
            <div>
                <p className="text-center text-[#ff3811] font-bold">Service</p>
                <h1 className="text-center text-4xl font-bold mt-3">Our Service Area</h1>
                <p className="text-sm text-gray-500 w-3/4 text-center mx-auto mt-4">Explore our comprehensive range of car care services to keep your vehicle in top condition. Our experienced team of professionals is dedicated to providing quality service and ensuring your satisfaction.</p>
            </div>
            <div className="grid grid-cols-3 justify-items-center mt-10 gap-10">
                {data.map(d=><div key={d._id}>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={d.imageLink} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{d.type}</h2>
                        <p><span className="font-bold">Price: </span>{d.price}</p>
                        <div className="card-actions justify-end">
                            <BiRightArrowAlt className="text-3xl text-[#ff3811] cursor-pointer" onClick={()=>navigate(`/options/checkOut/${d._id}`)}></BiRightArrowAlt>
                        </div>
                    </div>
                    </div>
                </div>)}
            </div>
            <div className="mt-10">
                {!all && <button className="btn bg-[#ff3811] border-none mx-auto block" onClick={()=>setAll(!all)}>Show More</button>}
                {all && <button className="btn bg-[#ff3811] border-none mx-auto block" onClick={()=>setAll(!all)}>Show Less</button>}
            </div>
        </div>
    );
};

export default Services;