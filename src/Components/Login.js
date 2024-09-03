import React from 'react';
       import { useNavigate } from 'react-router-dom';
       import './Login.css';
       
       function Login() {
         const navigate = useNavigate();
       
         const handleSubmit = (e) => {
           e.preventDefault();
           
           navigate('/home'); 
         };
       
         return (
           <div className="login-container">
             <div className="login-image">
               <img src="https://th.bing.com/th/id/OIP.EuHn2mNdaGr-QNb6HGt2DAHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Login Illustration" /> 
             </div>
             <div className="login-form">
               <h2 className='login'>User Login</h2>
               <form onSubmit={handleSubmit}>
                 <div className="input-group">
                   <label htmlFor="username">Username:</label>
                   <div className="input-with-icon">
                     <input type="text" id="username" name="username" placeholder="Enter your username" required />
                     <span className="icon"><i className="fa fa-user"></i></span>
                   </div>
                 </div>
                 <div className="input-group">
                   <label htmlFor="password">Password:</label>
                   <div className="input-with-icon">
                     <input type="password" id="password" name="password" placeholder="Enter your password" required />
                     <span className="icon"><i className="fa fa-lock"></i></span>
                   </div>
                 </div>
                 <div className="options">
                   <label>
                     <input type="checkbox" />
                     Remember me
                   </label>
                   <a href="#">Forgot Password?</a>
                 </div>
                 <button type="submit">Login</button>
               </form>
             </div>
           </div>
         );
       }
       
       export default Login;
       