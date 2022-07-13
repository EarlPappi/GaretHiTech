import Button from "../TinyComp/Button";
import classes from "./Header.module.css"

const Nav = () => {
    return (
        <nav className={ classes.navCon }>
            <a href="./">Job Listing</a>
            <a href="./">Find a Mentor</a>
            <a href="./">Find a Community</a>
            <a href="./">New Page</a>

            <Button href='http://github.com/EarlPappi' bgColor='#3754DB' fontSize='.8rem' color='white'>Earl Github</Button>        </nav>
    );
}

export default Nav;