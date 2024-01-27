import { MdMessage } from 'react-icons/md';
import Button from '../Button/Button';
import styles from './Contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi"

const ContactForm = () => {
  const onViaCallSubmit = () => {
    console.log("A user might contact");
    alert("You must contact to +91********61");
  }
  const onViaChatSubmit = () => {
    alert("Fill up the form and we will reach out to you");
  }
  const onSubmit = (event) => {
    
    console.log(" a user filled out the form");
    alert("Are you sure you want to submit ?");
    event.preventDefault();
    console.log("name ",event.target[0].value);
    console.log("email ",event.target[1].value);
    console.log("occupation ",event.target[2].value);
    console.log("problem ",event.target[3].value);
    alert("Your information is stored succesfully.")
  };
  const onEform = () => {
    console.log("A user might contact through mail");
    alert("You must contact to school_k******@gmail.com");
  }



  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button onClick={onViaChatSubmit} text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />} />
          <Button onClick={onViaCallSubmit} text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />} />
        </div >
        <Button onClick={onEform}  isOutline={true} text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />} />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">NAME :</label>
            <input type="text" name="name" alt="Firstname" required></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-MAIL :</label>
            <input type="email" name="email" required></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text" >OCCUPATION :</label>
            <textarea name="text" rows="4" required/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Your Queries :</label>
            <textarea name="text" rows="8" required/>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end",
          }}>
            <Button  text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img src="/images/service.jpg" alt="Contact image" />
      </div>
    </section>

  )
}

export default ContactForm
