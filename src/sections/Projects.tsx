import { projects } from '../shared/Data';

export default function Projects() {
  return (
    <div className='flex flex-col gap-5'>
      {projects.map(project => (
        <div className='bg-radial from-primary-900 to-primary-800 rounded-xl p-3 hover:from-primary-800 hover:to-primary-700'>
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
  );
}
