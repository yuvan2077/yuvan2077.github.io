import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faDownload } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import {
  headerDetails,
  contacts,
  skills,
  projects,
  timelines,
} from './shared/Data';
import pdfFile from './assets/yuvankumar_resume.pdf';

export default function App() {
  return (
    <div className='min-h-screen bg-primary-950 p-2 text-primary-50'>
      <div
        className='flex flex-col gap-5 font-sans max-w-4xl mx-auto bg-linear-to-r 
      from-primary-950 via-primary-900 to-primary-950 p-5 rounded-2xl 
      shadow-xl inset-shadow-xs inset-shadow-primary-500'
      >
        {/* HEADER SECTION */}
        <div className='flex flex-col gap-2'>
          <div className='text-primary-50 text-4xl'>
            <span className='inline-block'>{headerDetails.name}</span>
            <span className='inline-block text-primary-300 text-3xl'>
              @{headerDetails.id}
            </span>
          </div>

          {/* <div className='text-primary-100 text-2xl'>{headerDetails.role}</div>
          <div className='text-primary-200 text-base'>
            {headerDetails.summary}
          </div> */}

          <div className='text-primary-200'>
            <span className='text-2xl'>{headerDetails.role} </span>
            <span className='text-base'>{headerDetails.summaryAfterRole}</span>
          </div>

          <a className='button mx-auto' href={pdfFile} download>
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </div>

        {/* SKILLS */}
        <div className='flex flex-col flex-wrap gap-2'>
          {skills.map(skill => (
            <div>
              <div className='text-primary-300 mb-1'>{skill.category}</div>
              <div className='flex gap-2 flex-wrap'>
                {skill.skills.map(skillName => (
                  <div className='transition-all py-2 px-5 bg-primary-800 rounded-4xl hover:bg-primary-700'>
                    {skillName}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <div className='flex flex-col gap-5'>
          {projects.map(project => (
            <div className='bg-primary-800 rounded-xl p-3 hover:bg-primary-700'>
              <div className='text-primary-50 flex justify-between'>
                <div>{project.title}</div>
                <div>
                  {project.endDate.toLocaleString('default', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </div>
              </div>
              <div className='text-primary-300'>{project.tech.join(' | ')}</div>

              <div className='text-primary-200'>{project.summary}</div>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className='flex flex-col gap-2'>
          {timelines.map((timeline, index) => (
            <div className='flex'>
              <div className='flex place-items-center'>
                <div className=''>{timeline.startDate.getFullYear()}</div>
                <div className='relative'>
                  {index !== timelines.length - 1 ? (
                    <div className='absolute left-3.75 top-4 z-10 w-0.5 min-h-2 bg-primary-400'></div>
                  ) : null}
                  <div className='rounded-4xl bg-primary-400 w-4 h-4 mx-2'></div>
                  {index !== 0 ? (
                    <div className='absolute left-3.75 bottom-4 z-10 w-0.5 min-h-2 bg-primary-400'></div>
                  ) : null}
                </div>
                <div>
                  {timeline.event}@{timeline.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT DETAILS */}
        <div className='flex flex-col'>
          <div className='flex gap-5'>
            {contacts.map(contact => (
              <a className='icon-button' target='_blank' href={contact.link}>
                <FontAwesomeIcon
                  icon={contact.icon}
                  className='text-xl hover:text-primary-500'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
