import { useRef } from "react";
import emailjs from '@emailjs/browser';

function EmailForm() {
    const form = useRef();
    const publicKey = "YOUR_PUBLIC_KEY";

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('contact_service', 'contact_form', form.current, { publicKey: publicKey, });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <h4>Send a Message</h4>
            <div className="flex-horizontal">
                <input type="text" name="name" placeholder="Name" autoComplete="off" required></input>
                <input type="text" name="email" placeholder="Email" autoComplete="off" required></input>
            </div>
            <input type="text"  name="subject" placeholder="Subject" autoComplete="off" required></input>
            <textarea name="message" placeholder="Message" autoComplete="off" required></textarea>
            <input type="submit" value="Send Message"></input>
        </form>
    )
}

export default EmailForm;