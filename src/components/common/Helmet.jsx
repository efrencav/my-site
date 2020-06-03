import React, { Component } from "react";
import { Helmet } from 'react-helmet'

class PageHelmet extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Online Graphic Design Portfolio </title>
                    <meta name="description" content="Efren Cavazos is an award-winning Art Director, UI/UX Designer, and Creative Individual based in Houston, Texas." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
