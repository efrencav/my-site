import React, { Component } from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


class ContactThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { rnName, rnEmail, rnSubject, rnMessage } = this.state;

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
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={rnName}
                                            onChange={this.handleChange}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="email"
                                            name="email"
                                            id="item02"
                                            value={rnEmail}
                                            onChange={this.handleChange}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={rnSubject}
                                            onChange={this.handleChange}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={rnMessage}
                                            onChange={this.handleChange}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
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