import React, { Component } from "react";
import PageHelmet from "../components/header/Header";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/HeaderTwo";
import Footer from '../components/footer/Footer';
import PortfolioListContent from '../elements/portfolio/ImagesData.jsx';
import RelatedWork from '../elements/portfolio/RelatedWork';



class PortfolioDetails extends Component {


    render() {
        let obj = PortfolioListContent.find(obj => obj.url === this.props.history.location.pathname);

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
                <div className="rn-portfolio-details ptb--100 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="div row">
                                    <div className="col-lg-12">
                                        <div className="portfolio-details">
                                            <div className="div inner">
                                                <h3>Summary</h3>
                                                <p className="subtitle">{obj.subtitle}</p>
                                                <p className="mb-4">{obj.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <div className="portfolio-view-list d-flex mt-3 flex-wrap">
                                            <div className="port-view">
                                                <span>Category</span>
                                                <h4>{obj.category}</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Type</span>
                                                <h4>{obj.projectType}</h4>
                                            </div>

                                            <div className="port-view">
                                                <span><img src={obj.awardImg} alt="award icon" /> {obj.award}</span>
                                                <h4>{obj.programUrl}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div row">
                                        <div className="col-lg-12">
                                            <div className="portfolio-details pt--100">
                                                <div className="div inner">
                                                    <span className="theme-color font--18 fontWeight600">Who? What?</span>
                                                    <h3>The Challenge</h3>
                                                    <p className="mb-3">{obj.challengeDesc}</p>
                                                    <p className="mb-3">{obj.challengeDescMore}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Images */}
                                    <div className="portfolio-thumb-inner mt-5">
                                        <div className="thumb mb--30">
                                            <img src={obj.challengeImgOne} alt={obj.challengeImgOneAlt} />
                                        </div>
                                        <div className="row">
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="related-work text-center">
                                                    <div className="thumb">
                                                        <img src={obj.challengeImgTwo} alt={obj.challengeImgTwoAlt} />
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
                                                        <img src={obj.challengeImgThree} alt={obj.challengeImgThreeAlt} />
                                                    </div>
                                                    <div className="inner">
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                        </div>
                                        <div className="div row">
                                            <div className="col-lg-12">
                                                <div className="portfolio-details pt--30">
                                                    <div className="div inner">
                                                        <span className="theme-color font--18 fontWeight600">Approach</span>
                                                        <h3>The Solution</h3>
                                                        <p className="mb-3">{obj.solutionDesc}</p>
                                                        <p className="mb-5">{obj.solutionDescMore}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src={obj.solutionImgOne} alt={obj.solutionImgOneAlt} />
                                        </div>
                                        <div className="row">
                                            {/* Start Single Portfolio */}
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="related-work text-center">
                                                    <div className="thumb">
                                                        <img src={obj.solutionImgTwo} alt={obj.solutionImgTwoAlt} />
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
                                                        <img src={obj.solutionImgThree} alt={obj.solutionImgThreeAlt} />
                                                    </div>
                                                    <div className="inner">
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Portfolio */}
                                        </div>
                                        <div className="thumb mb--30">
                                            <div className="div row">
                                                <div className="col-lg-12">
                                                    <div className="portfolio-details pt--30">
                                                        <div className="div inner">
                                                            <span className="theme-color font--18 fontWeight600">Outcome</span>
                                                            <h3>The Results</h3>
                                                            <p className="mb-3">{obj.resultsDesc}</p>
                                                            <p className="mb-5">{obj.resultsDescMore}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={obj.resultsImg} alt={obj.resultsImgAlt} />
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
