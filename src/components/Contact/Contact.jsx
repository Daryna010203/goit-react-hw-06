import css from './Contact.module.css';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';

const Contact = ({ name, number, id, onDeleteProfile }) => {
  return (
    <>
      <div>
        <div className={css.box}>
          <FaUserLarge />
          <span>{name}</span>
        </div>
        <div className={css.box}>
          <FaPhone />
          <span>{number}</span>
        </div>
      </div>
      <div>
        <button type="button" onClick={() => onDeleteProfile(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
