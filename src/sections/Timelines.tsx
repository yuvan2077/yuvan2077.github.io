import { timelines } from '../shared/Data';

export default function Timelines() {
  return (
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
  );
}
