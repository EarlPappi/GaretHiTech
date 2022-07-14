import Meta from "../../Assets/facebookmeta.png";
import Linkedin from "../../Assets/linkedin.png";
import Loom from "../../Assets/starry.png";
import Dollar from "../../Assets/dollar-sign.png";
import Briefcase from "../../Assets/briefcase.png";
import Location from "../../Assets/map-pin.png";
import classes from "./Job.module.css"

const Jobs = () => {
    const jobs = [

        {
            title: 'Product Manager - Remote',
            company: 'Meta',
            location: 'USA, Remote',
            type: 'Full Time',
            salary: '120k - 130k',
            icon: Meta,
            time: "5mins"
        },        
        {
            title: 'Data Analytics',
            company: 'Loom Inc.',
            location: 'Australia',
            type: 'Full Time',
            salary: '120k - 130k',
            icon: Loom,
            time: "3hrs"
        },
        {
            title: 'Data Analytics',
            company: 'Loom Inc.',
            location: 'Australia',
            type: 'Full Time',
            salary: '120k - 130k',
            icon: Linkedin,
            time: "18hrs"
        },
        {
            title: 'Data Analytics',
            company: 'Loom Inc.',
            location: 'Australia',
            type: 'Full Time',
            salary: '120k - 130k',
            icon: Loom,
            time: "18hrs"
        }
        
    ]

    return (
        <div>
            <h2>1,000,000+ Jobs available for you</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className={ classes.listingInput }>
                <input type="search" name="" id="" placeholder="Search" />
                <input type="text" name="" id="" placeholder="Location" />
                <input type="text" name="" id="" placeholder="Job Type" />
            </div>

            { jobs.map((job) =>{
                return(
                <div className={ classes.jobListing }>
                    <div className={ classes.listingIconCon }>
                        <div className={ classes.companyIconCon }>
                            <img src={ job.icon } alt="" width="100%"/>
                        </div>

                        <div className={ classes.listingOther }>
                            <h2>{ job.title }</h2>
                            <span>{ job.company }</span>

                            <div className={ classes.listingOtherInner }>
                                <div><img src={ Location } alt="" /> <span>{ job.location }</span></div>
                                <div><img src={ Briefcase } alt="" /> <span>{ job.type }</span></div>
                                <div><img src={ Dollar } alt="" /> <span>{ job.salary }</span></div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <p>Posted { job.time } ago</p>
                    </div>

                </div>
                )
            }) }
        </div>
    );
}

export default Jobs;