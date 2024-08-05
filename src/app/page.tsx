// src/app/page.tsx
import './globals.css';

export const metadata = {
  title: 'Dialectics Center',
};

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-2xl" style={{ backgroundColor: "#2b6304", color: "yellow" }}>
        Dialectics Center
      </div>
    </div>
  );
}
