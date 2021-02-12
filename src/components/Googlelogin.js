import React,{useState} from 'react'
import GoogleLogin from "react-google-login"
export default function Googlelogin() {
    const [isloggedIn, setisloggedIn]= useState(false);
    const [userId,setuserId]=useState('');
    const [name,setName]=useState("");
    const [picture,setpicture]=useState();

    const responseGoogle=(res)=>{
        console.log(res);

        console.log(res.profileObj)
        if(res.googleId){
            setpicture(res.profileObj.imageUrl)
            console.log("image "+res.profileObj.imageUrl)
          }
    
    }
    return (
        <div>
           
         <GoogleLogin
         clientId="31259973273-plo2vlp0vqlek6n959ur2a5ttvingg2r.apps.googleusercontent.com"
         buttonText="Login"
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
      />
        <h2> google image </h2>
        <img src={picture} />
       
      
        </div>
    )
}
