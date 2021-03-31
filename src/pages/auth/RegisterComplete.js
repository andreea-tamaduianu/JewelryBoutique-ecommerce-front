import React from 'react'
import {auth} from '../../firebase'
import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import {createOrUpdateUser} from '../../functions/auth'



const RegisterComplete=({history})=>{
    const [email, setEmail] = useState("")
    const [password, setPassword]=useState("")
    //const{user} =useSelector((state)=>({...state}))

    useEffect(()=>{
        setEmail(window.localStorage.getItem("emailForRegistration"))
    }, [history])
    let dispatch=useDispatch()
    
  
    const handleSubmit=async (e)=>{
        e.preventDefault()
        //validation 
        if(!email || !password){
            toast.error('E-mailul si parola sunt obligatorii')
            return 
        }

        if(password.length<6){
            toast.error('Parola trebuie sa contina minimum 6 caractere')
            return
        }
        try{
            const result=await auth.signInWithEmailLink(email,window.location.href)
            if(result.user.emailVerified){
                //remove user mail from local storage
                window.localStorage.removeItem("emailForRegistration")
                //get user id token
                let user=auth.currentUser
                await user.updatePassword(password)
                const idTokenResult=await user.getIdTokenResult()
                //poulate user in redux store 
                createOrUpdateUser(idTokenResult.token)
                .then((res)=> {
                    dispatch({
                        type: "LOGGED_IN_USER",
                        payload:{
                            name:res.data.name,
                            email: res.data.email, 
                            token: idTokenResult.token,
                            role:res.data.role,
                            _id: res.data._id,
                        },
                    })
                })
                .catch(err=> console.log(err))
                //redirect
                history.push('/')
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const completeRegistrationForm=()=>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="email" 
                    className="form-control" 
                    value={email} 
                    disabled >
                </input>
            </div>

            <div className="form-group">
                <input type="password" 
                    className="form-control" 
                    value={password} onChange={e => setPassword(e.target.value)} 
                    autoFocus placeholder="Introduceti parola" >
                </input>
            </div>
            
           
            <br></br>
            <button type="submit" className="btn btn-raised">
                Finalizeaza crearea contului
            </button>
        </form>


    return (
        <div className="container p-5">
            <div className="row center">
                <div className="col-md-6 offset-md-3">
                    <h3 class="text-center">Creeaza contul</h3>
                    <br/>
                   
                    {completeRegistrationForm()}

                </div>
            </div>
            
        </div>
    )
}

export default RegisterComplete;