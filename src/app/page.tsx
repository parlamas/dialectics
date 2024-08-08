// src/app/page.tsx
import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'Dialectics Center',
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100 flex justify-center" style={{ zIndex: 30 }}>
      <div className="text-2xl bg-white text-black p-8 rounded shadow-lg w-11/12 max-w-6xl mt-4" style={{ paddingRight: '170px', fontSize: "10pt", lineHeight: "25px" }}>
        <div className="relative" style={{ float: 'left', marginRight: '20px' }}>
          <Image
            src="/images/socrates-agora.webp" // Ensure this is the correct path to your image in the public directory
            alt="Socrates conversing with others in the agora" 
            width={205}
            height={205}
            style={{ maxWidth: '100%' }} // Inline styles for precise control
          />
          {/* Speech Bubble 1 */}
          <div 
            className="speech-bubble" 
            style={{ 
              top: '-10px', 
              left: '0px', 
              background: 'rgba(255, 255, 255, 0.8)', 
              position: 'absolute', 
              padding: '10px', 
              borderRadius: '5px', 
              width: '220px', 
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
            }}
          >
            <p className="text-xs text-black" style={{fontWeight:"bold"}}><span style={{color:"blue"}}>Socrates:</span> ἕν οἶδα, ὅτι οὐδέν οἶδα<br />I know one thing: I know nothing.<br />
            Una cosa sé: no sé nada.</p>
            <div 
              style={{ 
                content: '""', 
                position: 'absolute', 
                bottom: '-20px', 
                left: '95px', 
                width: '0', 
                height: '0', 
                border: '10px solid transparent', 
                borderTopColor: 'rgba(255, 255, 255, 0.8)' 
              }}
            />
          </div>
          <div className="tooltiptext" style={{ lineHeight: "15px", fontSize: "8pt", color: "brown", fontWeight: "bold" }}>
            Ο Σωκρατης συνομιλει στην αγορα με<br />φιλους και εχθρους<hr />
            Socrates conversing with friends and<br />
            enemies in the agora<hr />
            Sócrates está conversando con amigos<br />y
            enemigos en el ágora.
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
      <div className="absolute top-4 right-4 bg-blue-500 text-white p-4 rounded shadow-lg w-[150px] h-[150px]" style={{ zIndex: 50 }}>
        <h2 className="text-sm font-bold">Upcoming Articles</h2>
        <ul className="text-xs">
          <li style={{color:"yellow", fontSize:"8pt"}}>Erdogan speaks right on Jewish atrocities, but he is nevertheless a hypocrite writ large...</li>
        </ul>
      </div>
    </div>
  );
}

