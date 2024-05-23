"use client"
import styles from "./ContactTest.module.css";

function ContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
     console.log("🚀 ~ handleSubmit ~ data:", data)

    // Here, we'll just pass the data to the server logic
    window.dispatchEvent(new CustomEvent('sendEmail', { detail: data }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <p>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input type="text" name="name" className={styles.input} />
      </p>
      <p>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="text" name="email" className={styles.input} />
      </p>
      <p>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea name="message" className={styles.textarea} />
      </p>
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
}

export default ContactForm;
