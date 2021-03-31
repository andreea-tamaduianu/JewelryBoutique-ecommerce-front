import React, {useState} from "react";
import UserNav from '../../components/nav/UserNav'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'

const Password = () => {
    const [password, setPassword]=useState('')
    const [loading, setLoading]=useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)

        await auth.currentUser.updatePassword(password)
        .then(()=>{

            setLoading(false)
            setPassword('')
            toast.success('Parola a fost schimbata')
        })
        .catch(err=>{
            setLoading(false)
            toast.error(err.message)
        })
    }

    const passwordUpdateForm=()=>(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div>
                    
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} disabled={loading} className="form-control" placeholder="Introduceti noua parola"></input>
                
                </div>
                <br/>
                <button className="btn btn-primary" disabled={!password || password.length<6|| loading}>Schimba parola</button>
            </div>
        </form>
    )
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
              
            <UserNav/>
          </div>
          <div className="colmd-2">
              {loading ? <h3 className="text-danger">Se proceseaza...</h3> : <h3>Actualizare parola</h3> } 
              {passwordUpdateForm()}
          </div>
        </div>
      </div>
    )
 
}

export default Password;