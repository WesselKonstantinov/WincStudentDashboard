import logo from '../images/winc-academy-icon.png';

function Logo({ classes }) {
    return (
        <div className={classes.logoWrapper}>
            <img
                className={classes.logo}
                src={logo}
                alt="Winc Academy logo"
            />
        </div>
    )
}

export default Logo;