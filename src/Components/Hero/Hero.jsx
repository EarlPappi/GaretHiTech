import heroImg from '../../Assets/heroImg.png';
import Button from '../TinyComp/Button';
import Wrapper from '../TinyComp/Wrapper';
import classes from './Hero.module.css'

const Hero = () => {
    return (
        <div className={classes.hero}>
            <Wrapper>
                <div className={classes.heroCon}>
                    <div className={ classes.heroTextCon }>
                        <h1>Hire female tech-talent in demand</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam laudantium aliquid excepturi deleniti.</p>

                        <div className={ classes.heroBtnCon }>
                            <Button bgColor='#3754DB' color='#E1E8FF'>Get Started</Button>

                            <Button bgColor='#E1E8FF' color='#3754DB'>See Job Listing</Button>
                        </div>

                        <div className={classes.listing}>
                            <div>
                                <h2>100k+ </h2>
                                <p>Job Listed</p>
                            </div>

                            <div className={classes.middleChild}>
                                <h2>262+ </h2>
                                <p>Members</p>
                            </div>

                            <div>
                                <h2>5+</h2>
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>

                    <div className={ classes.heroImgCon }>
                        <img src={heroImg} alt="heroSection" width="100%"/>
                    </div>
                </div>

            </Wrapper>

        </div>
    );
}

export default Hero;