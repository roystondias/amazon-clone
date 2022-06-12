import React,{useState} from 'react'
import { Link } from "react-router-dom"
import './Signup.css'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (<div className='login'>
        <Link to='/'>
            <img
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=""
            />
        </Link>

        <div className='login__container'>
            <h1>Create Account</h1>

            <form>
                <h5>Name</h5>
                <input type='text' />

                <h5>Phone number</h5>
                <input type="number" />

                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' className='login__signInButton'>Continue</button>
            </form>

            <p>
                By signing-up you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
        </div>
    </div>
    )
}

export default SignUp