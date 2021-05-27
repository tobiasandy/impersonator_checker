import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import FacebookLogin from 'react-facebook-login'

const FBLoginBtn = () => {
    const [fbLoginResponse,setFbLoginResponse] = useState(null);

    const responseFBLogin = (response) =>{
        console.log(response);
        setFbLoginResponse(response);
    };
        

    const componentClicked = () => console.log('clicked');

    return (
        <div className="FBLoginBtn">
            <FacebookLogin
            appId="790536071666674"
            autoLoad={true}
            field="name, email, picture"
            onClick={componentClicked}
            callback={responseFBLogin}
        />
        </div>   
);
};

export default FBLoginBtn