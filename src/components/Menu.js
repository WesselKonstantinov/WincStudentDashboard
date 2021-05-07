import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    logoWrapper: {
        backgroundColor: '#fafafa',
    },
    logo: {
        width: 100,
        display: 'block',
        margin: '0 auto',
        borderRadius: '50%',
        padding: 10,
    },
    menu: {
        backgroundColor: '#4f8bc9',
    },
    icon: {
        color: '#fff',
    },
    studentLink: {
        marginLeft: 'auto',
    },
    heading: {
        '@media (max-width: 400px)': {
            fontSize: '1rem',
        },
    },
});

function Menu() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.menu}>
            <Logo classes={classes} />
            <Toolbar>
                <Typography className={classes.heading} variant="h6" component="h1">
                    Student Dashboard
                </Typography>
                <Tooltip title="Home">
                    <IconButton
                        className={classes.icon}
                        component={Link}
                        to="/"
                        aria-label="Home"
                    >
                        <HomeIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Students">
                    <IconButton
                        className={`${classes.icon} ${classes.studentLink}`}
                        component={Link}
                        to="/students"
                        aria-label="Students"
                    >
                        <PersonIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Assignments">
                    <IconButton
                        className={classes.icon}
                        component={Link}
                        to="/assignments"
                        aria-label="Assignments"
                    >
                        <AssignmentIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

export default Menu;