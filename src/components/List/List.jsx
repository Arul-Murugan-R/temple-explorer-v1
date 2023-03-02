import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './List.css'
import Auth from '../Auth/Auth'

const List = () => {
    const [auth,setAuth] = useState(false)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const [products, setProduct] = useState([])
    const setAuthS = (status) => {
        console.log(status);
        setAuth(status)
    }
    const productData = async () => {
        try {
            const res = await fetch('https://temple-api.vercel.app/home', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await res.json()
            setProduct(data.products)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
            setError(err)
        }
    }
    useEffect(() => {
        productData()
    }, [])
    
    
      if(!auth){
          return <Auth setAuthS={setAuthS}/>
      }
    // return (<h1>Testing</h1>);
    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    if (error) {
        return (
            <h3>Error...</h3>
        )
    }
    if (products.length <= 0 && products==[]) {
        return (
            <div classNameName="alert alert-primary" role="alert">
                Product Not Found <Link to="/add-yours" className="alert-link">Add Yours</Link>
            </div>
        )
    }
    let i = 1;
    return (

        <main className="p-lg-4 m-lg-2">
        <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th className="disable" scope="col">_id</th>
                <th scope="col">Name</th>
                <th className="disable" scope="col">Location</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
            {products.map((product) => (
              <tr>
                <th scope="row">{i++}</th>
                <td className="disable">{product._id}</td>
                <td >{product.name} </td>
                <td className="disable">{product.location} </td>
                <td className="btn-group">
                  <Link to={"/view-page/"+product._id} className="btn btn-outline-success">View</Link>
                    <Link to="/edit/" className="btn btn-outline-primary">Edit</Link>
                    <Link to="/delete/" className="btn btn-outline-danger">Delete</Link></td>
              </tr>
            ))}
            </tbody>
          </table>
    </main>
    )
}

export default List