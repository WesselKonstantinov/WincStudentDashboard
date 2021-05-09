import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import StudentsChart from './StudentsChart';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    title: {
        marginBottom: theme.spacing(3),
    },
}));

function SingleAssignmentPage({ evaluations }) {
    const classes = useStyles();
    const { name } = useParams();
    const chartData = evaluations.filter(evaluation => evaluation.assignment === name);

    return (
        <Paper className={classes.root} elevation={3}>
            <Typography
                className={classes.title}
                component="h2"
                variant="h3"
                align="center"
            >
                {name}
            </Typography>
            <StudentsChart chartData={chartData} />
        </Paper>
    );
}

export default SingleAssignmentPage;