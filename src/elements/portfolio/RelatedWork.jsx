import React, { Component } from "react";
import RelatedWorkData from './ImagesData.jsx';
// import PortfolioListContent from './RelatedWorkData.jsx';


class RelatedWork extends Component {

    constructor(props) {
        super(props);

        this.state = {
            RelatedWorkData: ''
        }
    }

    render() {
        // console.log(this.props.project);
        let examples = RelatedWorkData.filter(example => example.category === this.props.category);
        let filteredExamples = examples.filter(example => example.title !== this.props.project);





        // document.write(filteredExamples[random]);
        let finalExamples = filteredExamples.slice(0, 2);
        // console.log(examples, filteredExamples, finalExamples);


        return (
            <React.Fragment>
                {/* Start Related Work */}
                <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>View Similar Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            {finalExamples.map(info =>
                                <div key={info.id} className="col-lg-6 col-md-6 col-12">
                                    <div className="related-work text-center mt--30">
                                        <div className="thumb">
                                            <a href={info.url}>
                                                <img src={info.relatedImg} alt={info.relatedImgAlt} />
                                            </a>

                                        </div>
                                        <div className="inner">
                                            <h4><a href={info.url}>{info.title}</a></h4>
                                            <span className="category">{info.category}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                {/* End Related Work */}
            </React.Fragment>
        )
    }
}
export default RelatedWork;