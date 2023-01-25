import React, { useState } from 'react'
// import axios from 'axios';
import './../App.css';
export default function Apiclass2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [result, setResult] = useState("");
    function getFormData(e) {
        e.preventDefault();
        fetch("http://localhost/codeIgniter/ReactAPI/api/newuser", {
            method: 'POST',
            dataType: "json",
            body: JSON.stringify({ 'name': name, 'email': email, 'phone': phone, 'photo': null }),
        }).then((result) => {
            result.json().then((data) => {
                setName("");
                setEmail("");
                setPhone("");
                setResult(data.massage);
                setTimeout(() => {
                    setResult("");
                }, 3000)
            })
        })
        //headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        // const myform = new FormData();
        // myform.append('name', name ? name : null);
        // myform.append('email', email ? email : null);
        // myform.append('phone', phone ? phone : null);
        // myform.append('photo', null);
        // axios({
        //     method: "POST",
        //     url: "http://localhost/codeIgniter/ReactAPI/api/newuser",
        //     data: myform,
        //     headers: { 'Content-Type': 'multipart/form-data' }
        // }).then(function (response) {
        //     // console.log(response);
        //     setName("");
        //     setEmail("");
        //     setPhone("");
        //     setResult(response.data.massage);
        //     setTimeout(() => {
        //         setResult("");
        //     }, 3000)
        // }).catch(function (response) {
        //     console.log(response);
        // });
    }
    return (
        <div className="User">
            <h2>Api POST Method</h2>
            {result}
            <form onSubmit={getFormData} id="myform">
                <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} /><br /><br />

                <input type="email" value={email} placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} /><br /><br />

                <input type="number" value={phone} placeholder='Enter Mobile No' onChange={(e) => setPhone(e.target.value)} /><br /><br />

                <button type="submit" >Submit</button>
            </form>
        </div >
    );
}