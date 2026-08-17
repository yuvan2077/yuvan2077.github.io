import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { headerDetails } from '../shared/Data';
import pdfFile from './../assets/yuvankumar_resume.pdf';

export default function Header() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-4xl'>
        <span className='inline-block'>{headerDetails.name}</span>
      </div>

      {/* <div className='text-primary-100 text-2xl'>{headerDetails.role}</div>
              <div className='text-primary-200 text-base'>
                {headerDetails.summary}
              </div> */}

      <div className='text-primary-400'>
        <span className='text-2xl'>{headerDetails.role} </span>
        <span className='text-base'>{headerDetails.summaryAfterRole}</span>
      </div>

      <a className='button mx-auto mt-6' href={pdfFile} download>
        <FontAwesomeIcon icon={faDownload} /> Download Resume
      </a>
    </div>
  );
}
