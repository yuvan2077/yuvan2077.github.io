import './App.css';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Header from './sections/Header';
import Timelines from './sections/Timelines';
import Contacts from './sections/Contacts';

export default function App() {
  return (
    <div className='min-h-screen bg-primary-950 p-2 text-primary-50'>
      <div
        className='flex flex-col gap-5 font-sans max-w-4xl mx-auto 
                   bg-linear-to-r from-primary-900 via-primary-950 to-primary-900 
                   p-5 rounded-2xl shadow-xl inset-shadow-sm inset-shadow-primary-900'>
        <Header />

        <Skills />

        <Projects />

        <Timelines />

        <Contacts />
      </div>
    </div>
  );
}
