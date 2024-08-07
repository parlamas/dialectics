import React from 'react';
import { SignUp } from '@clerk/nextjs';
import '../../globals.css'; // Ensure this path is correct

const SignUpPage = () => {
  return (
    <div className="center-container">
      <div className="clerk-custom">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;

