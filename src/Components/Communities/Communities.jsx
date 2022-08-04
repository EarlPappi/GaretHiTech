import classes from "./Communities.module.css";
import Button from "../TinyComp/Button";
import Avatar from "../../Assets/group-avatar.png"

const Communities = () => {

    const communties = [
        {
            title: 'Product Management',
            members: 107
        },
        {
            title: 'Product Design',
            members: 291
        },
        {
            title: 'Web Development',
            members: 23
        },
        {
            title: 'Graphics Design',
            members: 17
        }
    ]
    return (
        <div className={classes.communitiesCon}>
            <div className={classes.firstCommSec}>
                <div>
                    <h2>Online Communities</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                

                <div>
                    <Button color="white" bgColor='#3754DB'>See all</Button>
                </div>
            </div>

            {communties.map((community) => {
                return (
                    <div className={ classes.commLisiting }>
                        <div>
                            <h2>#{community.title}</h2>
                            <div className={ classes.innerConListing }><img src={Avatar} alt="" /> <span>+{community.members}</span></div>

                        </div>

                        <div>
                            <Button color='#3754DB' bgColor='#E2E8F0'>Join</Button>
                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default Communities;