import Image from "next/image";
import Head from 'next/head';
import './globals.css'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Dialectics Center</title>
      </Head>
      <div className="flex items-center justify-center h-full">
        <div className="text-2xl" style={{ backgroundColor: "#2b6304", color: "yellow" }}>
          Dialectics Center
        </div>
      </div>
    </>
  );
}
