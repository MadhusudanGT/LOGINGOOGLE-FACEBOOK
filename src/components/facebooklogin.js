import React ,{useState,useEffect} from 'react'
import FacebookLogin from "react-facebook-login"

export default function Facebooklogin() {

    const [isloggedIn, setisloggedIn]= useState(false);
    const [userId,setuserId]=useState('');
    const [name,setName]=useState("");
    const [picture,setpicture]=useState();
    const responseFacebook=(response)=> {
        console.log(response)
      if(response.email!=null){
        setpicture(response.picture.data.url)
      }
       
      }
      const componentClicked=(res)=>{
          console.log(res);
          
      }
    useEffect(()=>{

        let fbcontent;
        if(isloggedIn){
            fbcontent=null;
        }else{

            // fbcontent=( <FacebookLogin
            //     appId="140982314527841"
            //     autoLoad={true}
            //     fields="name,email,picture"
            //     onClick={componentClicked}
            //     callback={responseFacebook} />)
        }
    })
    return (
        <div>
           <FacebookLogin
                appId="140982314527841"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />

                    <h2> fbimage </h2>
                <img src={picture} alt={name} />
        </div>
    )
}
