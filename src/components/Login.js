import React from 'react';
import { useFormik } from 'formik';
import validations from './loginValidation';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons';


function Login() {
    const navigate = useNavigate();
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: () => {
            navigate("/");
        },
        validationSchema: validations,
    });

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} method='post'>
                <div className='textbox-container'>
                    <div className='box-icon'><box-icon name='envelope' color='#7f7b7b' ></box-icon></div>
                    <input
                        type='text'
                        placeholder='Email'
                        name="email"
                        id='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                </div>
                <div className='message-box'>
                    {errors.email && touched.email && (<div style={{ color: 'red', fontWeight: '500', fontSize: '12px', textAlign: 'center' }}>{errors.email}</div>)}
                </div>
                <div className='textbox-container'>
                    <div className='box-icon'><box-icon name='key' color='#7f7b7b' ></box-icon></div>
                    <input
                        type='password'
                        placeholder='Password'
                        name="password"
                        id='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                </div>
                <div className='message-box'>
                    {errors.password && touched.password && (<div style={{ color: 'red', fontWeight: '500', fontSize: '12px', textAlign: 'center' }}>{errors.password}</div>)}
                </div>
                <div className='textbox-container'>
                    <button type='submit'>LOGIN</button>
                </div>
            </form>
            <div className='forget-container'>
                <Link to="/forgetpassword">Forget Password?</Link>
            </div>
        </div>
    )
}

export default Login;