import React from "react";
import Axios from 'axios';

class ContactThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            disabled: false,
            emailSent: null,
        };
    }

    handleChange = (event) => {
        // console.log(event);

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }
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
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="full-name">
                                        <input
                                            id="full-name"
                                            name="name"
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="full-email">
                                        <input
                                            id="full-email"
                                            name="email"
                                            type="text"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="full-subject">
                                        <input
                                            id="full-subject"
                                            name="subject"
                                            type="text"
                                            value={this.state.subject}
                                            onChange={this.handleChange}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="full-message">
                                        <textarea
                                            id="full-message"
                                            name="message"
                                            type="text"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" variant="primary" type="submit" disabled={this.state.disabled} >Submit</button>
                                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
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