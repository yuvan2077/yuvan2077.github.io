import './App.css';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Header from './sections/Header';
import Timelines from './sections/Timelines';
import Contacts from './sections/Contacts';

export default function App() {
  return (
    <div className='min-h-screen bg-primary-950 p-2 text-white'>
      <div
        className='flex flex-col gap-8 font-sans max-w-4xl mx-auto 
                   bg-radial from-primary-950 to-primary-900 
                   p-5 rounded-2xl shadow-xl inset-shadow-sm inset-shadow-primary-900'>
        <Header />

        <div className='section'>
          <div className='section-title'>Skills</div>
          <Skills />
        </div>

        <div className='section'>
          <div className='section-title'>Projects</div>
          <Projects />
        </div>

        <div className='section'>
          <div className='section-title'>Timeline</div>
          <Timelines />
        </div>

        <div className='section'>
          <div className='section-title'>Contacts</div>
          <Contacts />
        </div>
      </div>
    </div>
  );
}
