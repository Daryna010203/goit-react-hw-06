import css from './Contact.module.css';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';

const Contact = ({ name, number, id, onDeleteProfile }) => {
  return (
    <>
      <div>
        <div className={css.box}>
          <FaUserLarge />
          <span className={css.formInput}>{name}</span>
        </div>
        <div className={css.box}>
          <FaPhone />
          <span className={css.formInput}>{number}</span>
        </div>
      </div>
      <button type="button" onClick={() => onDeleteProfile(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
