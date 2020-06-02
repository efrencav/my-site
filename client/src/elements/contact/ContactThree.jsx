import React, {useState} from "react";
import axios from 'axios';
// import axios from 'axios';

function ContactThree(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleSubjectChange = (e) => setSubject(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleSendEmail = () => {
        const payload = {name, email, subject, message};
        axios
            .post('http://localhost:8000/api/v1', payload)
            .then(response => {
                if(response.data.success) {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setSubject("");
                } else {
                    console.log(response);
                }
            })
    }

    return (
        <div className="contact-form--1">
            <div className="container">
                <div className="row row--35 align-items-start">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="section-title text-left mb--50">
                            <h2 className="title">{props.contactTitle}</h2>
                            <p className="description">I am available for full-time or freelance work. You can reach me at: <a href="tel:8323707322">832-370-7322</a> or email:
                                <a href="mailto:efren.cavazos@gmail.com"> efren.cavazos@gmail.com</a> </p>
                        </div>
                        <div className="form-wrapper">
                            <div>
                                <label htmlFor="full-name">
                                    <input
                                        id="full-name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={handleNameChange}
                                        placeholder="Your Name *"
                                    />
                                </label>

                                <label htmlFor="full-email">
                                    <input
                                        id="full-email"
                                        name="email"
                                        type="text"
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder="Your email *"
                                    />
                                </label>

                                <label htmlFor="full-subject">
                                    <input
                                        id="full-subject"
                                        name="subject"
                                        type="text"
                                        value={subject}
                                        onChange={handleSubjectChange}
                                        placeholder="Write a Subject"
                                    />
                                </label>
                                <label htmlFor="full-message">
                                    <textarea
                                        id="full-message"
                                        name="message"
                                        type="text"
                                        value={message}
                                        onChange={handleMessageChange}
                                        placeholder="Your Message"
                                    />
                                </label>
                                <button 
                                    className="rn-button-style--2 btn-solid" 
                                    variant="primary"
                                    onClick={handleSendEmail} 
                                    type="submit">
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="thumbnail mb_md--30 mb_sm--30">
                            <img src={`${props.contactImages}`} alt="Efren Cavazos" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactThree;