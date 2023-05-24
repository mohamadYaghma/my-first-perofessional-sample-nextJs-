import axios from "axios";
import { useEffect, useState } from "react";

const userProfile = () => {
    const [loading , setLoading] = useState(true);
    const [userData , setUserData] = useState(null);
    
    useEffect( ()=>{
        axios.get('http://localhost:4000/profile')
        .then((res)=>{
            setLoading(false);
            console.log(res.data);
            setUserData(res.data[0])
        } )
        .catch( (error) => console.log(error))
    }
        
        , [])

        if(loading) return <div>loading ....     </div>

    return ( 
        <div>
            <h1>name : {userData.name} - balance : {userData.balance} - email: {userData.email}</h1>
        </div>
     );
}
 
export default userProfile;

