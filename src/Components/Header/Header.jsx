import Nav from './Nav';
import classes from './Header.module.css'
import Wrapper from '../TinyComp/Wrapper';

const Header = () => {
    return (
        <header>
            <Wrapper>
                <div className={classes.headerCon}>
                    <h1>HerTech</h1>
                    <Nav />
                </div>
            </Wrapper>
        </header>
    );
}

export default Header;