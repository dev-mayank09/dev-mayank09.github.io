import './Contact.css';
import ContactCard from './ContactCard';

function Contact(props) {
    return <div className="Contact" id="contact">
        <h1 className='section-heading'>Contact Me</h1>
        <div className="ContactCardsDiv">
            <ContactCard icon="fa-brands fa-linkedin" heading="LinkedIn" text="You can contact me on LinkedIn" link="https://www.linkedin.com/in/mayank-sharma-2a25ab251/" link_text="mayank-sharma" />
            <ContactCard icon="fa-brands fa-github" heading="Github" text="Visit my Github" link="https://github.com/dev-mayank09" link_text="dev-mayank09" />
            <ContactCard icon="fa-solid fa-phone" heading="Phone" text="Here is My Phone Number" link="#" link_text="+919875335104" />
            <ContactCard icon="fa-solid fa-envelope" heading="Email" text="Drop me a mail" link="#" link_text="mayanksharma5104@gmail.com" />
        </div>

    </div>
}

export default Contact;