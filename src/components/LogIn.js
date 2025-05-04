import React, { useState } from 'react'; // Import React and useState hook
import './LogIn.css'; // Import the external CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const LogingIn = () => {
  // Define form data state for name, email, and password
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();


  const [errors, setErrors] = useState({});

  // State to show success message after submission
    const [submitted, setSubmitted] = useState(false);
  
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (e) => {
        setFormData(prev => ({
          ...prev, // keep existing values
          [e.target.name]: e.target.value // update the field that changed
        }));
    };
    const validate = () => {
        const newErrors = {};
        if (!formData.email.trim()) newErrors.email = "email is required.";
        if (!formData.email.includes('@')) newErrors.email = "Invalid email.";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
        return newErrors; // return any found validation issues
    };

    // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      const response = await fetch('http://192.168.15.51:5000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        if (data.error === 'User not found') {
          setErrors({ email: 'Email not found.' });
        } else if (data.error === 'Invalid password') {
          setErrors({ password: 'Incorrect password.' });
        } else {
          setErrors({ form: data.error || 'Something went wrong.' });
        }
        return;
      }
  
      // If all good
      
      setSubmitted(true);
      localStorage.setItem('name', data.name);
      
      navigate('/');
      localStorage.setItem('userEmail', data.email);
      setFormData({ email: '', password: '' });
      
    } catch (err) {
      console.error('Fetch error:', err);
      setErrors({ form: 'Failed to connect to server.' });
    }
  };


  return (
      <div className="login-container"> {/* Wrapper for the whole form */}
        <h2>Log In</h2>
        {submitted ? ( // If form is submitted
          <p className="success-message">Thanks for log in {formData.name}!</p>
        ) : (
          <form onSubmit={handleSubmit} className="login-form"> {/* Form element */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="login-input"
              />
              {errors.email && <p className="error-message">{errors.email}</p>} {/* Show email error */}
            </div>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
              />
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}
                className="toggle-icon" onClick={() => setShowPassword(prev => !prev)}
              />
              {errors.password && <p className="error-message">{errors.password}</p>} {/* Show password error */}
            </div>
            <button type="submit" className="login-button">Log in</button> {/* Submit button */}         
          </form>
        )}
      </div>
    );
  };
  
  export default LogingIn; // Export component for use in other parts of app
  