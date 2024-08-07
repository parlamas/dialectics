'use client'; // Ensure this component is client-side

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Head from 'next/head'; // Import Head from next/head
import ContentRequestForm from '../client/ContentRequestForm';

const ContentRequestPage: React.FC = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.push('/sign-in');
      } else {
        setLoading(false);
      }
    }
  }, [isLoaded, isSignedIn, router]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or message while checking authentication
  }

  return (
    <div>
      <Head>
        <title>Dialectics Center</title>
      </Head>
      <ContentRequestForm />
    </div>
  );
};

export default ContentRequestPage;


