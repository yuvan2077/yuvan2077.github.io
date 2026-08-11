import { skills } from '../shared/Data';

export default function Skills() {
  return (
    <div className='flex flex-col flex-wrap gap-2'>
      {skills.map(skill => (
        <div>
          <div className='text-primary-300 mb-1'>{skill.category}</div>
          <div className='flex gap-2 flex-wrap'>
            {skill.skills.map(skillName => (
              <div className='transition-all py-2 px-5 bg-radial from-primary-900 to-primary-800 rounded-4xl hover:from-primary-800 hover:to-primary-700'>
                {skillName}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
