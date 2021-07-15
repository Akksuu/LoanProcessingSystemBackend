
import React from 'react'
import Header from '../header'
export default function Contact({history}) {
    return (
        <div>
        <Header />
    <br></br><br></br>
        <h1>for more details use the contact numbers:</h1>
        <h1>+800 49 900 900 --for Hyderabad Branch</h1><br></br>
        <h1>+800 49 900 901 --for Chennai Branch</h1><br></br>
        <h1>+800 49 900 902 --for AndraPradesh Branch</h1><br></br>
        <h1>+800 49 900 903 --for  Banglore Branch</h1><br></br>
        <h1>+800 49 900 903 --for  Pune Branch</h1>
        <button class="btn btn-primary" onClick={() => history.push('/home')}>Home</button>
        </div>
        
    )
}
