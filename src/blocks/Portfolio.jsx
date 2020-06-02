import React from 'react'
import Helmet from "../components/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderTwo from "../components/header/HeaderTwo";
import Footer from "../components/footer/Footer";
import PortfolioList from "../elements/portfolio/PortfolioList";


const Portfolio = () => {
    return (
        <div className="active-dark">
            <Helmet pageTitle='Efren Cavazos Portfolio' />

            {/* Start Header Area  */}
            <HeaderTwo homeLink="/" logo="symbol-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Portfolio'} />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--5">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">My Latest Projects</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-left mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="12" />
                            </div>
                            <div className="row">

                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}

        </div>

    )
}

export default Portfolio;