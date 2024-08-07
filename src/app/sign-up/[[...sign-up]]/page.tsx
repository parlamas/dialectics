import React from 'react';
import { SignUp } from '@clerk/nextjs';
import Head from 'next/head';
import '../../../styles/clerkCustomStyles.css';

const SignUpPage: React.FC = () => {
  return (
    <div className="relative z-50"> {/* Ensure this div has a high z-index */}
      <Head>
        <title>Dialectics Center - Sign Up</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen"> {/* Center the form */}
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;


