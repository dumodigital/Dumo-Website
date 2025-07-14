import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx loaded');

const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  console.log('Creating React root');
  createRoot(rootElement).render(<App />);
  console.log('React app rendered');
} else {
  console.error('Root element not found!');
}

// Cursor-reactive logo animation
document.addEventListener('mousemove', (e) => {
  const logo = document.querySelector('.logo') as HTMLElement;
  if (!logo) return;

  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  logo.style.transform = `rotateX(${y * 20}deg) rotateY(${x * 20}deg)`;
  logo.style.transition = 'transform 0.1s ease-out';
});
