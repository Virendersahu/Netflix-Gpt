import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Header />
        {/* You can add login form here */}
      </div>
    </div>
  );
};

export default Login;
