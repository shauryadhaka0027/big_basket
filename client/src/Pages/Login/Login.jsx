import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import axios from 'axios';

const Login = ({ flag, setFlag }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [otpSend,setOtpSend]=useState(false);
  const [formData, setFormData] = useState({
    email: '',
    otp:''
  });

  const handleCancel = () => {
    setIsModalVisible(false);
    setFlag(!flag);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      alert('Please fill in all the fields.');
      return;
    }
   if(otpSend){
    axios
    .post('http://localhost:9001/verifyOTP', formData)
    .then((response) =>{alert('OTP verified')
      localStorage.setItem("token",JSON.stringify(response.data.token))
      setFlag(!flag);
        
    })
    .catch((err) => console.error(err));
   }else{
    axios
      .post('http://localhost:9001/signup', formData)
      .then(() =>{alert('OTP Sent')
        setOtpSend(true)
      })
      .catch((err) => console.error(err));
   }
    
  };

  return (
    <Modal
      open={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      width={700}
      className="custom-modal"
    >
      <div className="flex">
        <div className="bg-gray-100 p-6 w-1/2">
          <h3 className="text-lg font-bold mb-4">Why choose Bigbasket?</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">✨</span>
              <span>Quality</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">⏰</span>
              <span>On time</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">↩️</span>
              <span>Return Policy</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">🚚</span>
              <span>Free Delivery</span>
            </div>
          </div>

          <hr className="my-6" />

          <div>
            <p className="text-sm mb-2">Find us on:</p>
            <div className="flex space-x-3">
              <img
                src="https://clipart-library.com/images_k/google-play-icon-transparent/google-play-icon-transparent-1.png"
                alt="Google Play"
                className="h-8"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/1200px-Apple_Store_logo.svg.png"
                alt="App Store"
                className="h-8"
              />
            </div>
          </div>
        </div>

        <div className="text-white p-6 w-1/2 bg-black">
          <h2 className="text-xl font-bold">Login / Sign up</h2>
          <p className="text-sm text-orange-500 mb-4">Using OTP</p>

          <form onSubmit={formSubmit}>
          {!otpSend && (  <Input
              size="large"
              placeholder="Enter Phone number/ Email Id"
              className="mb-4"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />)}
            {otpSend &&( <Input
              size="large"
              placeholder="Enter OTP"
              className="mb-4"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
            />)}
          

            <Button
              type="primary"
              className="w-full bg-red-600 hover:bg-red-700"
              size="large"
              htmlType="submit"
            >
              Continue
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By continuing, I accept TCP - bigbasket's{' '}
            <a href="#" className="text-blue-600">
              Terms and Conditions
            </a>{' '}
            &{' '}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
          </p>
          <p className="text-xs text-gray-500">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>{' '}
            &{' '}
            <a href="#" className="text-blue-600">
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
