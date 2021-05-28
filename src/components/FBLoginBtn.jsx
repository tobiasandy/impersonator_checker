import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const FBLoginBtn = () => {
    const [fbLoginResponse,setFbLoginResponse] = useState(null);

    const responseFBLogin = (response) =>{
        console.log(response);
        setFbLoginResponse(response);
    };

    const getUserData = () => {
        const getUserDataURL = `https://graph.facebook.com/v10.0/me/accounts?access_token=${fbLoginResponse.accessToken}`;
        axios.get(getUserDataURL)
            .then(res =>{
                console.log(res);
            });
    };
        

    const componentClicked = () => console.log('clicked');

    useEffect(()=>{
        console.log('useEffect triggered');
        getUserData();
    },[fbLoginResponse]);

    return (
        <div className="FBLoginBtn">
            <FacebookLogin
            appId="790536071666674"
            autoLoad={false}
            field="name, email, picture"
            onClick={componentClicked}
            callback={responseFBLogin}
        />
        </div>   
);
};

export default FBLoginBtn