import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#4f8bc9',
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
})

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Typography className={classes.text} variant="body1">
                &copy; 2021 - Wessel Konstantinov
            </Typography>
        </footer>
    );
}

export default Footer;