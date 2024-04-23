// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Style.css'
// // import { set } from 'lodash';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye } from '@fortawesome/free-regular-svg-icons';
// import { faAngular } from '@fortawesome/free-brands-svg-icons';
// // import { library } from '@fortawesome/fontawesome-svg-core';
// // import {all} from '@awesome.me/kit-KIT_CODE/icons'


// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState('');
//     const navigate =useNavigate();

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await fetch('http://192.168.1.163:8093/admin/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();
//             if(response.status===200){
//                 navigate('/home')
            
//             }
//           if(!response.ok){
//             setError(data.result);
//           }
           
            
//         } catch (error) {
//             console.error('Login error:', error.message);
//             setError('Invalid email or password');
//         }
//     };

//     return (
//         <div className="container10">
//         <img className='img1' src='/logo.png' alt="Arzooo" />
//         <h1 className='para'>Login</h1>
//         <form onSubmit={(e)=>handleSubmit(e)} >
//             <label>Mail Id *</label>
//             <input 
//                 type="email" 
//                 className='box'
//                 placeholder="Enter your Mail Id" 
//                 required 
//                 value={email} 
//                 onChange={handleEmailChange} 
//             />  
//             <label>Password *</label>
//             <div className="password-input">
//                 <input
//                     type={showPassword ? "text" : "password"}
//                     className='box'
//                     placeholder="Enter Your Password"
//                     required
//                     value={password}
//                     onChange={handlePasswordChange}
//                 />
//                 <FontAwesomeIcon icon={faAngular}   />
//                 {/* <FontAwesomeIcon className='fas1'
//                     icon={showPassword ? faEye : faEyeSlash}
//                     onClick={togglePasswordVisibility}
//                     style={{ cursor: "pointer" }}
//                 /> */}
//             </div>
//             <button type='submit'>Login</button>
//             {error && <p className="error">{error}</p>}
//             <p className="para"><a href="forgot">Forgot Password?</a></p>
//             <p className="para">If you don't have an account?<a href="/register">Register</a></p>
//         </form>
//     </div>
    
//     );
// }






// useEffect(() => {
//     // Example GET request on component mount
//     fetch('/api/data')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Handle received data
//             setData(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error.message);
//             setError('Failed to fetch data');
//         });
// }, []); 