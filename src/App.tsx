import './App.css';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Header from './sections/Header';
import Timelines from './sections/Timelines';
import Contacts from './sections/Contacts';

export default function App() {
  return (
    <div
      className='min-h-screen flex flex-col gap-8 p-5 font-sans text-white mx-auto 
                   bg-linear-to-r from-0% to-100% from-primary-950 md:from-primary-900 via-primary-950 to-primary-950 md:to-primary-900
                   inset-shadow-sm inset-shadow-primary-950'>
      <div className='section'>
        <Header />
      </div>

      <div className='section'>
        <Skills />
      </div>

      <div className='section'>
        <Projects />
      </div>

      <div className='section'>
        <Timelines />
      </div>

      <div className='section'>
        <Contacts />
      </div>
    </div>
  );
}
