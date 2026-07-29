import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from '../shared/Data';

export default function Contacts() {
  return (
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
  );
}
