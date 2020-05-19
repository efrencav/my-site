import React, { Component } from "react";
import PageHelmet from "../components/header/Header";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/HeaderTwo";
import Footer from '../components/footer/Footer';
import PortfolioListContent from '../elements/portfolio/ImagesData.jsx';
import RelatedWork from '../elements/portfolio/RelatedWork';



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
        console.log(obj.title);

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
                                <div className="div row">
                                    <div className="col-lg-12">
                                        <div className="portfolio-details">
                                            <div className="div inner">
                                                <h3>Objective</h3>
                                                <p className="subtitle">{obj.subtitle}</p>
                                                <p className="mb-5">{obj.description}</p>
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
                                                <span>{obj.award}</span>
                                                <h4><a href={obj.programUrl} target="_blank" rel="noopener noreferrer">{obj.view}</a></h4>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="div row mt--30">
                                        <div className="col-lg-12">
                                            <div className="portfolio-details pt--100">
                                                <div className="div inner">
                                                    <span className="theme-color font--18 fontWeight600">Phase 1</span>
                                                    <h3>Prototyping</h3>
                                                    <p className="mb-4">{obj.phaseOneDesc}</p>
                                                    <p className="mb-5">{obj.phaseOneDescMore}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Images */}
                                    <div className="portfolio-thumb-inner">
                                        <div className="thumb mb--30">
                                            <img src={obj.phaseOneImg} alt={obj.phaseOneAlt} />
                                        </div>
                                        {/* Start Prototyping Details Section */}
                                        <div className="div row">
                                            <div className="col-lg-12">
                                                <div className="portfolio-details pt--100">
                                                    <div className="div inner">
                                                        <span className="theme-color font--18 fontWeight600">Phase 2</span>
                                                        <h3>Style Concepts</h3>
                                                        <p className="mb-4">{obj.phaseTwoDesc}</p>
                                                        <p className="mb-5">{obj.phaseTwoDescMore}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="thumb mb--30 pt--100">
                                            <img src={obj.phaseTwoImg} alt={obj.phaseTwoAlt} />
                                        </div>
                                        {/* Start Bring It All Together Section */}
                                        <div className="div row">
                                            <div className="col-lg-12">
                                                <div className="portfolio-details pt--100">
                                                    <div className="div inner">
                                                        <span className="theme-color font--18 fontWeight600">Phase 3</span>
                                                        <h3>Bring in it all together</h3>
                                                        <p className="mb-4">{obj.phaseThreeDesc}</p>
                                                        <p className="mb-5">{obj.phaseThreeDescMore}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="thumb mb--30">
                                            <img src={obj.phaseThreeFinal} alt={obj.phaseThreeFinalAlt} />
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

// <div className="div row">
//                                             <div className="col-lg-12">
//                                                 <div className="portfolio-details">
//                                                     <div className="div inner">
//                                                         <h4>Logo Grid</h4>
//                                                         <div className="row">
//                                                             {/* Start Single Portfolio */}
//                                                             <div className="col-lg-12">
//                                                                 <div className="related-work text-center">
//                                                                     <div className="thumb">
//                                                                         <img src={obj.imageBgSix} alt={obj.altSix} />
//                                                                     </div>
//                                                                     <div className="inner">
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             {/* End Single Portfolio  */}
//                                                         </div>
//                                                     </div>
//                                                     <div className="div inner">
//                                                         <h4>New logo vs Old Logo</h4>
//                                                         <div className="row">
//                                                             {/* Start Single Portfolio */}
//                                                             <div className="col-lg-6 col-md-6 col-12">
//                                                                 <div className="related-work text-center">
//                                                                     <div className="thumb">
//                                                                         <img src={obj.imageBgSevenHalf} alt={obj.altSix} />
//                                                                     </div>
//                                                                     <div className="inner">
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             {/* End Single Portfolio  */}
//                                                             {/* Start Single Portfolio */}
//                                                             <div className="col-lg-6 col-md-6 col-12">
//                                                                 <div className="related-work text-center">
//                                                                     <div className="thumb">
//                                                                         <img src={obj.imageBgSixHalf} alt={obj.altSeven} />
//                                                                     </div>
//                                                                     <div className="inner">
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             {/* End Single Portfolio */}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>