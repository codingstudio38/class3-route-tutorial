import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default function Apiclass1() {
    const [data, setData] = useState([]);
    const [result, setResult] = useState("");
    const [userid, setUserid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [resultupdate, setResultupdate] = useState("");
    useEffect(() => {
        getallusers();
    }, [])
    function getallusers() {
        setResult("Loading..");
        fetch("http://localhost/codeIgniter/ReactAPI/api/getAll", {
            method: 'GET',
        }).then((result) => {
            result.json().then((res) => {
                // console.log(res);
                setData(res.users);
                setResult("");
            })
        })
    }
    function editis(items) {
        setUserid(items.id)
        setName(items.name)
        setEmail(items.email)
        setPhone(items.phone)
    }
    function deleteis(items) {
        if (window.confirm("Are you suar ?")) {
            axios({
                method: "GET",
                url: `http://localhost/codeIgniter/ReactAPI/api/deleteuser/${items.id}`,
            }).then(function (response) {
                // console.log(response);
                setResult(response.data.massage);
                getallusers();
                setTimeout(() => {
                    setResult("");
                }, 3000)
            }).catch(function (response) {
                console.log(response);
            });
        }
    }
    function getFormData(e) {
        e.preventDefault();
        fetch(`http://localhost/codeIgniter/ReactAPI/api/updateuser/${userid}`, {
            method: 'POST',
            dataType: "json",
            body: JSON.stringify({ 'name': name, 'email': email, 'phone': phone, 'photo': null }),
        }).then((result) => {
            result.json().then((data) => {
                getallusers();
                setResultupdate(data.massage);
                setPhone("");
                setName("");
                setEmail("");
                setUserid("");
                setTimeout(() => {
                    setResultupdate("");
                }, 3000)
            })
        })
    }
    return (
        <div>
            <h2>Api GET Method</h2>
            {result}
            <div className='col-md-12'>
                <div className='row'>
                    <div className='col-md-8'>
                        <Table striped bordered hover className='maptbl' align='center' style={{ marginLeft: '10px' }}>
                            <thead>
                                <tr>
                                    <th>S.N</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>contact</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) =>
                                        <tr key={index} id={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <Button className='btn btn-danger btn-sm' onClick={() => deleteis(item)}>Delete</Button>
                                                <Button className='btn btn-warning btn-sm' onClick={() => editis(item)} style={{ marginLeft: '5px' }}>Edit</Button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-4'>

                        <h2>Edit Form</h2>
                        {resultupdate}
                        <form onSubmit={getFormData} id="myform">
                            <input type="text" value={userid} placeholder='id' readOnly /><br /><br />
                            <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} /><br /><br />

                            <input type="email" value={email} placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} /><br /><br />

                            <input type="number" value={phone} placeholder='Enter Mobile No' onChange={(e) => setPhone(e.target.value)} /><br /><br />

                            <button type="submit" >Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
} 