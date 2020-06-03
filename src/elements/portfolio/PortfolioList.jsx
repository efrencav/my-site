import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Branding',
        title: 'Schlumberger Identity Guidelines and Graphic Standards',
        url: '/portfolio/branding-guidelines'
    },
    {
        image: 'image-14',
        category: 'Digital',
        title: 'Schlumberger Identity Guidelines and Graphic Standards UI/UX Design',
        url: '/portfolio/branding-guidelines-web'
    },
    {
        image: 'image-2',
        category: 'Digital, Branding',
        title: 'Kinsmen Group',
        url: '/portfolio/kinsmen-group'
    },
    {
        image: 'image-8',
        category: 'Digital',
        title: 'Silestone Website',
        url: '/portfolio/silestone-web'
    },
    {
        image: 'image-13',
        category: 'Digital',
        title: 'Abstract Creative',
        url: '/portfolio/abstract'
    },
    {
        image: 'image-5',
        category: 'Print',
        title: 'Muscle Rehab',
        url: '/portfolio/muscle-rehab'
    },
    {
        image: 'image-6',
        category: 'Print',
        title: 'Six Ways to Reduce Well Intervention Costs',
        url: '/portfolio/six-ways'
    },
    {
        image: 'image-7',
        category: 'Print',
        title: 'Well Intervention Catalog',
        url: '/portfolio/intervention-catalog'
    },
    {
        image: 'image-9',
        category: 'Branding',
        title: 'Enfusia Rebranding',
        url: '/portfolio/enfusia'
    },
    {
        image: 'image-10',
        category: 'Print',
        title: 'Silestone Brochure',
        url: '/portfolio/silestone-brochure'
    },
    {
        image: 'image-12',
        category: 'Print',
        title: 'Cafe Diario',
        url: '/portfolio/cafe-diario'
    }
]

class PortfolioList extends Component {
    render() {
        const { column, styevariation } = this.props;
        const list = PortfolioListContent.slice(0, this.props.item);
        return (
            <React.Fragment>
                {list.map((value, index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href={value.url}>{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.url}>Read Case Study</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </React.Fragment>
        )
    }
}
export default PortfolioList;