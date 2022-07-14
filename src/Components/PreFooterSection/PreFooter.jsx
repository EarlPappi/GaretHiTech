import Communities from "../Communities/Communities";
import Podcast from "../Podcast/Podcast";
import Job from "../Job/Job";
import classes from "./PreFooter.module.css"
import Wrapper from "../TinyComp/Wrapper";


const PreFooter = () => {
    return (
        <Wrapper>
            <div className={classes.preFootersec}>
                <div className={ classes.jobCon }>
                    <Job />
                </div>

                <div className={ classes.comPodCon }>
                    <Communities />
                    <Podcast />
                </div>
            </div>
        </Wrapper>
    );
}

export default PreFooter;