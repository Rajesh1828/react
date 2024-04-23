import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'




export default function Login() {
    const [formData, setformData] = useState({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })

    }

    const loginData = {
        email: sandhay123.com,
        password: 123456
    }

    console.log();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginData.email === formData.email && loginData.password === formData.password) {
            navigate("/")

        }

        setformData({
            email: "",
            password: "",
        })


    }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://192.168.1.163:8093/admin/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         const data = await response.json();
    //         if (response.status === 200) {
    //             navigate('/')
    //         }
    //         if (!response.ok) {
    //             setError(data.result);
    //         }
    //     } catch (error) {
    //         console.error('Login error:', error.message);
    //         setError('Invalid email or password');
    //     }
    // };


    useEffect(() => {
        // Example GET request on component mount
        fetch('/api/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                // Handle received data
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
                setError('Failed to fetch data');
            });
    }, []);


    return (
        <div className="container10">
            <img className='img1' src='/logo.png' alt="Arzooo" />
            <h1 className='para'>Login</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="password"></label>
                <input type="email" name="password" id="password" value={formData.password} onChange={handleChange} />
                <button type='submit'>Login</button>
                {error && <p className="error">{error}</p>}
                <p className="para"><a href="forgot">Forgot Password?</a></p>
                <p className="para">If you don't have an account?<a href="/register">Register</a></p>
            </form>
        </div>

    );
}





