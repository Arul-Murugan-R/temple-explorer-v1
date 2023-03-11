import React from 'react'
import { useState } from 'react'
import Auth from './Auth/Auth'
import { useNavigate } from "react-router-dom";

const Addyours = () => {
    const [auth,setAuth] = useState(false)
    const navigate = useNavigate();
    const formData = new FormData();
    const setAuthS = (status) => {
      console.log(status);
      setAuth(status)
    }
    if(!auth){
        return <Auth setAuthS={setAuthS}/>
    }
    const pushData = async(data) => {
      console.log(data)
        const res = await fetch(import.meta.env.VITE_BACKEND+'/add-yours',{
            method:'POST',
            body:data,
            headers: {
              "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjNAZ21haWwuY29tIiwidXNlcklkIjoiNjNmOGI4MDVlNDdlNjVkMjNhYmRiYWYxIiwiaWF0IjoxNjc3OTQxMDE3LCJleHAiOjE2Nzg1NDU4MTd9.kuWyJrUNVCzrqc9YhjuKKDrHdD8VnQKcXIcWaESuKLE"
          },
        })
        const resData = await res.json()
        console.log(resData)
    }
    const FormHandler = (e) => {
        if(e.target.name=='photo'){
          formData.append('photo',e.target.files[0])
          return
        }
        formData.append(e.target.name,e.target.value)

    }
    const submitHandler = async (e) => {
        e.preventDefault()
        formData.append('user','63f8b805e47e65d23abdbaf1')
        console.log(formData);

        await pushData(formData)
        await navigate('/home')
        
    }
    return(
        <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/home">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add Yours</li>
          </ol>
        </nav>
        <main className="container">
            <form className="row col-md-10 border border-secondary rounded p-md-3 needs-validation" onSubmit={submitHandler}>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputName4">Name</label>
                    <input type="text" className="form-control" name="name" id="inputName4" placeholder="Name" onBlur={FormHandler} />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputPlace4">Place</label>
                    <input type="Place" className="form-control" name="place" id="inputPlace4" placeholder="Place" onBlur={FormHandler} />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPhoto4">Photo</label>
                    <input type="file" className="form-control"name="photo" id="inputPhoto4" placeholder="Photo" onBlur={FormHandler} />
                  </div>
                <div className="form-group col-md-5">
                  <label htmlFor="inputNumber">Contact-Number</label>
                  <input type="text" className="form-control"name="no" id="inputNumber" placeholder="Number for Contacting" onBlur={FormHandler} />
                </div>
                <div className="form-group col-md-5">
                  <label htmlFor="inputlm2">Land Mark</label>
                  <input type="text" className="form-control"name="mark" id="inputlm2" placeholder="Land Mark(Near Which)" onBlur={FormHandler} />
                </div>
                <div className="d-flex">
                    <div className="form-group col-md-5 col-lg-3 me-2">
                      <label htmlFor="inputCity">City</label>
                      <input type="text" className="form-control"name="city" id="inputCity" onBlur={FormHandler} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control"id="inputZip" name="zip" onBlur={FormHandler} />
                    </div>
                    
                </div>
                <div className="form-group col-md-6">
                    <label>Email Id</label>
                    <input type="email" className="form-control" name="email" placeholder="Email Id"  onBlur={FormHandler} />
                </div>
                <div className="form-group col-md-4 me-2">
                    <label htmlFor="inputState">Location</label>
                    <input type="text" className="form-control" name="location" placeholder="Location"  onBlur={FormHandler} />
                  </div>
                  <div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"name="desc" rows="5" onBlur={FormHandler}></textarea>
                      </div>
                  </div>
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                  <input type="hidden" name="_id" value="<%= product._id %>" />
                <button type="submit" className="btn btn-primary col-md-1">Submit</button>
              </form>
              
          </main>
          </>
    )
}

export default Addyours