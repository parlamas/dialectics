// src/app/page.tsx
import './globals.css';

export const metadata = {
  title: 'Dialectics Center',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="text-2xl bg-white text-black p-8 rounded shadow-lg w-11/12 max-w-6xl mt-4" style={{ fontSize: "10pt", lineHeight:"25px",textAlign:"justify" }}>
        <div className="tooltip" style={{ float: 'left', marginRight: '20px' }}>
          <img 
            src="/images/socrates-agora.webp" // Ensure this is the correct path to your image in the public directory
            alt="Socrates conversing with others in the agora" 
            style={{ width: '205px', height: '205', maxWidth: '100%' }} // Inline styles for precise control
          />
          <div className="tooltiptext" style={{lineHeight:"15px",fontSize:"8.5pt",color:"brown",fontWeight:"bold"}}>
            Socrates conversing with friends and<br />enemies in the agora
          </div>
        </div>
        <p>I am Isidoros Parlamas, a Greek national born and raised in Athens, Greece.</p>
        <p><b>Dialectics Center</b> celebrates <span style={{color:"blue"}}>Socrates</span> and <span style={{color:"blue"}}>Dialectics</span> and&nbsp;
          <span style={{color:"blue"}}>Horistics</span>, his brainchildren.</p>
        <p>This is the place where you can learn how to identify and solve problems in the best way possible, be they personal problems, family problems, business problems, 
          lifestyle problems, economic problems as well as political and geopolitical problems.</p>
        <p>It is not about telling you what to think and do, but it is about showing you how to think and approach implementing solutions that make sense.</p>
        <p>Here you will find content on philosophy, music, physical education, social skills, languages, physics, and math.</p>
      </div>
    </div>
  );
}





