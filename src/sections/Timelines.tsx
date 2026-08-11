import { timelines } from '../shared/Data';

export default function Timelines() {
  return (
    <div className='flex flex-col'>
      {timelines.map((timeline, index) => (
        <div className='flex basis-0 group '>
          <div className='shrink-0 my-2'>
            {timeline.startDate.getFullYear()}
          </div>

          <div className='shrink-0 relative h-full w-12'>
            <div className='absolute left-[calc(50%-7px)] top-1 rounded-4xl bg-primary-400 w-4 h-4 my-2'></div>
            <div>
              {index === 0 ? (
                <div className='absolute left-1/2 border-l-2 border-l-primary-400 h-[calc(100%-16px)] bottom-0'></div>
              ) : index === timelines.length - 1 ? (
                <div className='absolute left-1/2 border-l-2 border-l-primary-400 h-4 top-0'></div>
              ) : (
                <div className='absolute left-1/2 border-l-2 border-l-primary-400 h-full'></div>
              )}
            </div>
          </div>

          <div className='my-2'>
            <div>
              {timeline.event}
              <span className='text-primary-300'>@{timeline.location}</span>
            </div>
            <ul className='hidden group-hover:block list-disc list-inside text-primary-400'>
              {timeline.eventDescription.map(description => (
                <li>{description}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
