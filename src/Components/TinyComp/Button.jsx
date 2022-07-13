import classes from './Button.module.css'

const Button = ({ children, href, bgColor, color, fontSize }) => {

    return (
        <a href={href} style={{ backgroundColor: bgColor, color: color, fontSize: fontSize }} className={classes.btn}>{children}</a>
    );
}

export default Button;