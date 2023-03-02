import { useState } from 'react'
import './Auth.css'
const Auth = (props) => {
    const [viewPass,setViewPass] = useState(false)
    const [formData,setData] = useState({
        email:"",
        password:""
    })
    const viewPassHandler = () => {
        console.log(viewPass)
        setViewPass(!viewPass)
    }
    const emailHandler = (e) => {
        e.preventDefault();
        setData((prevData) => ({
            ...prevData,email:e.target.value
        }))
    };
    const passwordHandler = (e) => {
        e.preventDefault();
        setData((prevData) => ({
            ...prevData,password:e.target.value
        }))
    };
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(import.meta.env.VITE_EMAIL,import.meta.env.VITE_PASSWORD);
        if(formData.email==import.meta.env.VITE_EMAIL && formData.password==import.meta.env.VITE_PASSWORD){
            props.setAuthS(true)
        }
    }
    return (
        <div className="base-form">
            <form className="responsive" >
                <div className="form-header">
                    <h2>Authentication</h2>
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" name="email" required="required" onBlur={emailHandler}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type={!viewPass?'password':'text'}className="form-control" name="password" required="required" onBlur={passwordHandler}/>
                    <a onClick={viewPassHandler} style={{cursor:'pointer',fontWeight:'200'}} >{!viewPass?'Show':'Hide'}</a>
                </div>
                <div className="form-group">
                    <button type="submit" onClick={submitHandler} className="btn btn-primary btn-block btn-lg">Authorize</button>
                </div>
            </form>
        </div>
    )
}

export default Auth