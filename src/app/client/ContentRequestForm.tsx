'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import ContentRequestForm from '../client/ContentRequestForm';
import React, { useEffect } from 'react';

const ContentRequestPage: React.FC = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>; // You might want to show a loading spinner or some placeholder while checking authentication
  }

  return (
    <div>
      <ContentRequestForm />
    </div>
  );
};

export default ContentRequestPage;
