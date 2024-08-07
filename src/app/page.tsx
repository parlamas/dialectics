// src/app/page.tsx
import './globals.css';

export const metadata = {
  title: 'Dialectics Center',
};

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-2xl" style={{ fontSize: "10pt", backgroundColor: "white", color: "black", padding: "20px" }}>
      <p>I am Isidoros Parlamas, a Greek national born and raised in Athens, Greece.</p>
      <p><b>Dialectics Center</b> celebrates <span style={{color:"blue"}}>Socrates</span> and his <span style={{color:"blue"}}>Dialectics</span> and&nbsp;
      <span style={{color:"blue"}}>Horistics</span>, his brainchildren.</p>
        <p>This is the place where you can learn how to identify and solve problems in the best way possible, be they personal problems, family problems, business problems, 
          lifestyle problems, economic problems as well as political and geopolitical problems.</p>
        <p>It is not about telling you what to think and do, but it is about showing you how to think and how to approach implementing solutions that make sense.</p>
        <p>Here you will find content on philosophy, music, physical education, social skills, languages, physics, and math.</p>

      </div>
    </div>
  );
}
