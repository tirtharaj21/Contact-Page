import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>
        <i>Contact Us</i>
      </h1>
      <p>
      We are here to help you,friends. Whether you have a question, comment or you just want to chat you with us. you can connect with us through the contact form of this page or you can connect with us by Phone, Email or social media handles.
      Our form is open 24/7 to assist you in all possible ways.  
        </p>
    </div>
  )
}

export default ContactHeader
