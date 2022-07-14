import classes from "./Podcast.module.css"
import Button from "../TinyComp/Button";
import Thumbnail from "../../Assets/podcast-img.png"

const Podcast = () => {

    const podcasts = [
        {
            title: "Women in Tech Series Q&A Series",
            anchor: "Martyna Lewinska, Co-Founder and CTO at Fiat Republic",
            duration: '12Mins',
            thumbnail: Thumbnail
        },
        {
            title: "Women in Tech Series Q&A Series",
            anchor: "Martyna Lewinska, Co-Founder and CTO at Fiat Republic",
            duration: '12Mins',
            thumbnail: Thumbnail
        }
    ]
    return (
        <div className={classes.podcastCon}>
            <div className={classes.firstPodSec}>
                <div>
                    <h2>Online Communities</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div>
                    <Button color="white" bgColor='#3754DB'>See all</Button>
                </div>
            </div>

            {podcasts.map((podcast) => {
                return (
                    <div className={classes.podcastListing}>
                        <div className={classes.imgConPod}>
                            <img src={podcast.thumbnail} alt={podcast.title} />
                        </div>

                        <div className={classes.podInner}>
                            <h3>{podcast.title}</h3>
                            <p>{podcast.anchor}</p>
                            <div>
                                <Button color='#3754DB' bgColor="#E2E8F0">{podcast.duration}</Button>
                            </div>
                        </div>


                    </div>
                )
            })}


        </div>
    );
}

export default Podcast;