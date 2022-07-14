import Meta from "../../Assets/facebookmeta.png";
import Linkedin from "../../Assets/linkedin.png";
import Loom from "../../Assets/Vector.svg";
import Dollar from "../../Assets/dollar-sign.png";
import Briefcase from "../../Assets/briefcase.png";
import Location from "../../Assets/map-pin.png";

const Jobs = () => {
    const Jobs = [
        {
            title: 'Product Manager - Remote',
            company: 'Meta',
            location: 'USA, Remote',
            type: 'Full Time',
            salary: '120k - 130k',
            icon: Meta
        },
        {
            title: 'Product Manager - Onsite',
            company: 'Meta',
            location: 'USA, Onsite',
            type: 'Full Time',
            salary: '120k - 130k',
            icon: Meta
        }
    ]

    return (
        <div>
            <h2>1,000,000+ Jobs available for you</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div>
                <input type="search" name="" id="" placeholder="Search" />
                <input type="text" name="" id="" placeholder="Location" />
                <input type="text" name="" id="" placeholder="Job Type" />
            </div>

            
        </div>
    );
}

export default Jobs;