import React from 'react';
import { SignIn } from '@clerk/nextjs';
import Head from 'next/head';
import '../../../styles/clerkCustomStyles.css';

const SignInPage: React.FC = () => {
  return (
    <div className="relative z-50"> {/* Ensure this div has a high z-index */}
      <Head>
        <title>Dialectics Center - Sign In</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen"> {/* Center the form */}
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
