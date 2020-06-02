import React from "react";
// import axios from 'axios';

class ContactThree extends React.Component {

    render() {
        return (
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">I am available for full-time or freelance work. You can reach me at: <a href="tel:8323707322">832-370-7322</a> or email:
                                    <a href="mailto:efren.cavazos@gmail.com"> efren.cavazos@gmail.com</a> </p>
                            </div>
                            <div className="form-wrapper">
                                <form method="POST" action="/">
                                    <label htmlFor="full-name">
                                        <input
                                            id="full-name"
                                            name="name"
                                            type="text"
                                            // value={this.state.name}
                                            // onChange={e => this.setState({ name: e.target.value })}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="full-email">
                                        <input
                                            id="full-email"
                                            name="email"
                                            type="text"
                                            // value={this.state.email}
                                            // onChange={e => this.setState({ email: e.target.value })}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="full-subject">
                                        <input
                                            id="full-subject"
                                            name="subject"
                                            type="text"
                                            // value={this.state.subject}
                                            // onChange={e => this.setState({ subject: e.target.value })}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="full-message">
                                        <textarea
                                            id="full-message"
                                            name="message"
                                            type="text"
                                            // value={this.state.message}
                                            // onChange={e => this.setState({ message: e.target.value })}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" variant="primary" type="submit">Submit</button>

                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.contactImages}`} alt="Efren Cavazos" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactThree;