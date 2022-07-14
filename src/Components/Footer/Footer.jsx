import Button from "../TinyComp/Button";
import Wrapper from "../TinyComp/Wrapper";
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={classes.footerCon}>
            <Wrapper>
                <div className={classes.footerInputSec}>
                    <div>
                        <h2>Newsletter</h2>
                        <p>Be the first to about discounts, offers and events</p>
                    </div>

                    <div className={ classes.inputMaj }>
                        <input type="email" placeholder="Enter your Email"/>
                        <Button color='#F7FAFC' bgColor='#3754DB'>Submit</Button>
                    </div>

                </div>

                <div className={ classes.footerNavCon }>
                    <div className={ classes.footerNav }>
                        <a href="./">Privacy Policy</a>
                        <a href="./">Terms of Use</a>
                        <a href="./">FAQs</a>
                    </div>

                    <p>2022, All Rights Reserved</p>
                </div>
            </Wrapper>
        </footer>
    );
}

export default Footer;