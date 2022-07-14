import classes from "./Podcast.module.css"
import Button from "../TinyComp/Button";

const Podcast = () => {
    return ( 
        <div className={ classes.podcastCon }>
            <div className={classes.firstPodSec}>
                <div>
                    <h2>Online Communities</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div>
                    <Button color="white" bgColor='#3754DB'>See all</Button>
                </div>
            </div>
        </div>
     );
}
 
export default Podcast;