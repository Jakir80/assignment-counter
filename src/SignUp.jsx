import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formStyles = {
    maxWidth: 'md',
    margin: '0 auto',
    backgroundColor: '#FFF',
    padding: '8px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyles = {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #DDD',
    marginBottom: '12px',
    outline: 'none',
    boxShadow: 'none',
    transition: 'border-color 0.3s',
  };

  const buttonStyles = {
    backgroundColor: '#3498db',
    color: '#FFF',
    fontWeight: 'bold',
    padding: '12px 24px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        navigate('/')
      });
  };

  return (
    <div style={{ backgroundColor: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={formStyles}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px', color: '#374151' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              style={inputStyles}
              placeholder="Enter your name"
            />
            {errors.name && <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.name.message}</p>}
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px', color: '#374151' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              style={inputStyles}
              placeholder="Enter your email"
            />
            {errors.email && <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.email.message}</p>}
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="password" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px', color: '#374151' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                },
              })}
              style={inputStyles}
              placeholder="Enter your password"
            />
            {errors.password && <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.password.message}</p>}
          </div>
          <button type="submit" style={buttonStyles}>Submit</button>
        </form>
        <p style={{ fontSize: '14px', marginTop: '12px' }}>
          Already have an account? Please{' '}
          <Link to="/login">
            <button style={{ padding: '4px 8px', backgroundColor: '#3498db', color: '#FFF', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}>Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
