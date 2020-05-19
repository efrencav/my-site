import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from '../components/common/Helmet';
import TextLoop from 'react-text-loop';
import Header from '../components/header/Header';
import Footer from '../components/footer/FooterTwo';
import TabTwo from '../elements/tab/TabTwo';
import ContactThree from '../elements/contact/ContactThree';
import PortfolioList from '../elements/portfolio/PortfolioList';

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my Portfolio',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

const Home = () => {
    // const linebreak = { "\n"};
    let title = 'About Me',
        description = "I'm Efren Cavazos, an award-winning end-to-end creative with 20 years' experience in bringing insight, ideas, and execution expertise to concepts, stories, and brands. ",
        descriptionTwo = "From conceptualization, designing and prototyping digital products to curating, brand experiences. From art directing photoshoots to social media content, I am all about approaching problems from the user and consumer point of view and crafting solutions that combine brand value, experience design, and technology.",
        descriptionThree = "Strength in leading a creative team through a variety of projects across all platforms in digital, UI/UX Responsive design, and print. Skilled in hiring, training, supervising, and mentoring talent.",
        descriptionFour = "Creative communication is at the heart of what I do; I create strategy, ideas and design that connects with consumers and inspires them into action."
    return (
        <div className="active-dark">
            <Helmet pageTitle="Efren Cavazos Portfolio" />
            <Header homeLink="/" logo="symbol-dark" />
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value, index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I'm Efren Cavazos<br />
                                                <TextLoop>
                                                    <span> Art Director</span>
                                                    <span> UI/UX Designer</span>
                                                    <span> Creative Individual</span>
                                                </TextLoop>{" "}
                                            </h1>
                                            <h3>Based in Houston, TX</h3>

                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */}

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-efren-three.png" alt="About Images" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                            <p className="description">{descriptionFour}</p>
                                            <p className="description">{descriptionTwo}</p>
                                            <p className="description">{descriptionThree}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area */}

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">My Latest Projects</h2>
                                        <p>Please browse through the links below to see my latest projects.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Contact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/about/about-efren-two.jpg" contactTitle="Hire Me." />
                </div>
            </div>
            {/* End Contact Area */}


            <Footer />
            {/* Start Back To Top */}
            <div>
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
};

export default Home;