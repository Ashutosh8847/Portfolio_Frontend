import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import suscribeImg from '../Image/subscribe-bg.webp'
import './Contact.css'
import { IoIosContact } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';
import { contactValiadtion } from "../pages/Error";



const Contact = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    console.log("----------baseUrl----------", baseUrl)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState({})
    const [showMessage, setShowMessage] = useState(false)
   
    

    const [data, setData] = useState([])

    console.log("----------value----------", name)
    console.log("----------value----------", email)
    console.log("----------value----------", message)
    console.log("----------value----------", phone)

    useEffect(() => {
        if (name) {
            setError(prev => ({ ...prev, name: "" }))
        }
    }, [name])

    useEffect(() => {
        if (email) {
            setError(prev => ({ ...prev, email: "" }))
        }
    }, [email])

    useEffect(() => {
        if (phone) {
            setError(prev => ({ ...prev, phone: "" }))
        }
    }, [phone])


    const handleOnclick = async (e) => {

        const contactValidator = contactValiadtion({ name, email, phone })
        console.log("----------contactValidator----------", contactValidator)
        setError(contactValidator)
        e.preventDefault();
        if (Object.keys(contactValidator).length === 0) {
            console.log("----------inside if----------", Object.keys(contactValidator).length)
            try {
                const res = await axios.post(`${baseUrl}/mail/send`, {
                    name,
                    email,
                    message,
                    phone,
                });
                console.log("-------res-------", res.data); 
                setShowMessage(true)

                setTimeout(() => {
                    setShowMessage(false)
                }, 3000)

                console.log("-------res-------", res.data);
                setName("");
                setEmail("");
                setMessage("");
                setPhone("");

            } catch (error) {
                console.log("-------error-------", error);
            }
        }

    };

    return (
        <div className='contactConatiner' >
            <h2 style={{ textAlign: "center", marginTop: "30px" }}><b><span><IoIosContact style={{ marginRight: "10px" }} /></span>Contact Me:<hr /></b></h2>
            <Form onSubmit={handleOnclick} className='contactForm' style={{ backgroundColor: "whitesmoke", paddingLeft: "30px", paddingRight: "30px", paddingTop: "15px", borderRadius: "20px", height: "550px" }} >
                <h3 style={{ textAlign: "center", marginTop: "20px" }}><b style={{ textTransform: "uppercase" }}>Get's Started</b></h3>
                {showMessage && <div style={{ color: "white", backgroundColor: "green", padding: "8px", textAlign: "center", width: "60%", marginLeft: "20%", borderRadius: "5px" }}>Message sent successfully</div>}
                <Form.Group className="mb-3 form-group" controlId="text" style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
                    <Form.Label><b>Name:</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        setError={setError}
                    />
                    {error.name && <p style={{ color: "red", fontFamily: "red serifs", margin: "0px" }}>{error.name}</p>}

                </Form.Group>

                <Form.Group className="mb-3 form-group" controlId="formBasicEmail" style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
                    <Form.Label><b>Email address:</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error.email && <p style={{ color: "red", fontFamily: "red serifs", margin: "0px" }}>{error.email}</p>}

                </Form.Group>
                <Form.Group className="mb-3 form-group" controlId="number" style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
                    <Form.Label><b>Phone Number</b></Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    {error.phone && <p style={{ color: "red", fontFamily: "red serifs", margin: "0px" }}>{error.phone}</p>}

                </Form.Group>
                <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlTextarea1" style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
                    <Form.Label><b>Message:</b></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </Form.Group>
                <Button className='contactbtn' variant="primary" type="submit" style={{ textAlign: "center", width: "40%", marginLeft: "30%", marginRight: "auto" }}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact
