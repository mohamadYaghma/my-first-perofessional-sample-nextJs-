import axios from "axios";
import useSWR from 'swr'

async function fetcherUser(){

        const {data}= await axios.get('http://localhost:4000/profile') 
        return data[0]
    
}

const ProfileSwr = () => {
    const {data , error , isLoading }=useSWR('getUserData' , fetcherUser)

    if(error) return <div> database is turn off</div>
    if(isLoading) return <div>loading .... </div>

    return (  
        <div>
            <h1>user profile :</h1>
            <div>
                <h2>name : {data.name } ** balance : {data.balance } </h2>
               
            </div>
        </div>
    );
}
 
export default ProfileSwr;