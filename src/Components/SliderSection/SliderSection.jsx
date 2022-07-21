import Audi from '../../Assets/audi.png';
import Netflix from '../../Assets/netflix.png';
import Maxar from '../../Assets/maxar.png';
import SpaceX from '../../Assets/space-x.png';
import classes from './SliderSection.module.css';
import Wrapper from '../TinyComp/Wrapper';
import Vector from "../../Assets/Vector.svg"

const SliderSection = () => {
    return (
        <section className={classes.sliderSection}>
            <Wrapper>
                <p>COMPANIES HIRING ON HERTECH</p>

                <div className={ classes.iconCon }>
                    <img src={Audi} alt="" />
                    <img src={Netflix} alt="" />
                    <img src={Audi} alt="" />
                    <img src={SpaceX} alt="" />
                    <img src={Vector} alt="" />
                    <img src={Maxar} alt="" />
                    <img src={Audi} alt="" />

                </div>
            </Wrapper>

        </section>
    );
}

export default SliderSection;