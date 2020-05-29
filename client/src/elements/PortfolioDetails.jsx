import React, { Component } from "react";
import PageHelmet from "../components/header/Header";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/HeaderTwo";
import Footer from '../components/footer/Footer';
import PortfolioListContent from '../elements/portfolio/ImagesData.jsx';
import RelatedWork from '../elements/portfolio/RelatedWork';



const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
]

class PortfolioDetails extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         isOpen: false
    //     }
    // }
    // {`rn-page-title-area pt--120 pb--190 bg-header-image ${obj.imageBg}`}
    // rn-page-title-area pt--120 pb--190 bg_image bg_image--4

    render() {
        let obj = PortfolioListContent.find(obj => obj.url === this.props.history.location.pathname);
        // let img = PortfolioListContent.find(obj => obj.url === this.props.history.location.pathname);
        console.log(obj);
        console.log(this.props.history.location.pathname);
        // console.log(`${obj.imageHeader}`);

        return (
            <React.Fragment>
                <PageHelmet pageTitle='Efren Cavazos Portfolio' />
                <Header homeLink="/" logo="symbol-dark" />

                {/* Start Breadcrump Area */}
                <div className={`rn-page-title-area pt--120 pb--190 bg_image ${obj.imageHeader}`} data-black-overlay="8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{obj.title}</h2>
                                    <p>{obj.brief}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>{obj.title}</h2>
                                        <p className="subtitle">{obj.subtitle}</p>
                                        <p>{obj.description}</p>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Category</span>
                                                <h4>{obj.category}</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Type</span>
                                                <h4>{obj.projectType}</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Program</span>
                                                <h4><a href={obj.programUrl}>View Project</a></h4>
                                            </div>
                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val, i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="portfolio-thumb-inner">
                                        <div className="thumb mb--30">
                                            <img src={obj.imageBgOne} alt={obj.altOne} />
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src={obj.imageBgTwo} alt={obj.altTwo} />
                                        </div>
                                        <div className="row">
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="related-work text-center">
                                                    <div className="thumb">
                                                        <img src={obj.imageBgThree} alt={obj.altThree} />
                                                    </div>
                                                    <div className="inner">
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="related-work text-center">
                                                    <div className="thumb">
                                                        <img src={obj.imageBgFour} alt={obj.altFour} />
                                                    </div>
                                                    <div className="inner">
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src={obj.imageBgFive} alt={obj.altFive} />
                                        </div>
                                        <div className="row">
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="related-work text-center">
                                                    <div className="thumb">
                                                        <img src={obj.imageBgSix} alt={obj.altSix} />
                                                    </div>
                                                    <div className="inner">
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="related-work text-center">
                                                    <div className="thumb">
                                                        <img src={obj.imageBgSeven} alt={obj.altSeven} />
                                                    </div>
                                                    <div className="inner">
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src={obj.imageBgEight} alt={obj.altEight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* Start Related Work */}
                <RelatedWork
                    project={obj.title}
                    category={obj.category}
                />
                {/* End Related Work */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />


            </React.Fragment>
        )
    }
}
export default PortfolioDetails;
