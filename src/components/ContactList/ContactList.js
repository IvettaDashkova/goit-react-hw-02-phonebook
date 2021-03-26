import PropTypes from 'prop-types';
import deleteImg from './delete.png';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, delContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(item => (
        <li className={styles.item} key={item.id}>
          <span className={styles.name}>{item.name}</span>
          <span>{item.number}</span>
          <button className={styles.btn} onClick={() => delContact(item.id)}>
            {' '}
            <img className={styles.img} src={deleteImg} alt="" width="10" />
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  delContact: PropTypes.func.isRequired,
};
export default ContactList;
