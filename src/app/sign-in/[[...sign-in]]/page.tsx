import React from 'react';
import { SignIn } from '@clerk/nextjs';
import '../../globals.css'; // Ensure this path is correct

const SignInPage = () => {
  return (
    <div className="center-container">
      <div className="clerk-custom">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;

