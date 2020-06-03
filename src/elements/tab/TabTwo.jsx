import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component {
    render() {
        let
            tab1 = "Specialties",
            tab2 = "Experience",
            tab3 = "Education",
            tab4 = "Awards",
            tab5 = "Associations";
        const { tabStyle } = this.props
        return (
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                        <Tab>{tab5}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div>
                                                <p><span className="alt-text color-white">Expert level in Adobe Creative Cloud (CC), Sketch, InVision, wireframing and rapid prototyping.</span></p>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="alt-text">
                                                                <li><span className="alt-text">Creative Direction</span></li>
                                                                <li><span className="alt-text">Art Direction</span></li>
                                                                <li><span className="alt-text">Branding</span></li>
                                                                <li><span className="alt-text">Graphic Design</span></li>
                                                            </p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="alt-text">
                                                                <li><span className="alt-text">UI/UX Design</span></li>
                                                                <li><span className="alt-text">Web/Mobile</span></li>
                                                                <li><span className="alt-text">Project Management</span></li>
                                                                <li><span className="alt-text">HTML, CSS, JavaScript</span></li>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div>
                                                <p><span className="alt-text color-white">Art Director &#8211; Schlumberger</span><br /><span className="alt-text">July 2013&#8212;April 2020</span></p>
                                                <p><span className="alt-text color-white">Art Director &#8211; Cosentino</span><br /><span className="alt-text">October 2008&#8212;June 2013</span></p>
                                                <p><span className="alt-text color-white">Senior Graphic Designer &#8211; Morris Architects</span><br /><span className="alt-text">October 2001&#8212;September 2008</span></p>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div>
                                                <p><span className="alt-text color-white">Certificate &#8211; Full-Stack Web Development</span><br /><span className="alt-text">University of Texas &#8211; October 2018&#8212;February 2019</span></p>
                                                <p><span className="alt-text color-white">Associates of Graphic Design</span><br /><span className="alt-text">The Art Institute of Houston &#8211; 1997&#8212;1999</span></p>
                                                <p><span className="alt-text color-white">Diploma</span><br /><span className="alt-text">San Jacinto College &#8211; 1996&#8212;1997</span></p>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div>
                                                <p><span className="alt-text color-white">AMA Crystal Award</span><br /><span className="alt-text">Packaging Design&#8212;2018</span></p>
                                                <p><span className="alt-text color-white">BMA Lantern Awards</span><br /><span className="alt-text">ASDP Launch Event&#8212;2017</span></p>
                                                <p><span className="alt-text color-white">BMA Lantern Awards</span><br /><span className="alt-text">Infinity System Trailer Traveling Exhibit&#8212;2016</span></p>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div>
                                                <p><span className="alt-text color-white">Board Member &#8211; AIGA Houston Chapter</span><br /><span className="alt-text">Design Futures Associate Director</span></p>
                                                <p><span className="alt-text">Primary responsibilities:</span>
                                                    <li><span className="alt-text">Develop local professional development programming</span></li>
                                                    <li><span className="alt-text">Plan workshops for the year</span></li>
                                                    <li><span className="alt-text">Develop or point to resources that would be helpful to designers</span></li>
                                                    <li><span className="alt-text">Finding appropriate sponsors and/or partners for workshops/events</span></li>
                                                    <li><span className="alt-text">Submit Event Proposal for workshops/events for approval prior to booking</span></li>
                                                </p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;