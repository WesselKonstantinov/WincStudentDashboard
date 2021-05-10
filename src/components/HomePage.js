import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AssignmentsChart from './AssignmentsChart';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    title: {
        marginBottom: theme.spacing(3),
    },
}));

function HomePage(props) {
    const {
        evaluations,
        visibility,
        lineChartDisplay,
        getAssignments,
        getAverageRatingsForAssignment,
        toggleRatingsVisibility,
        handleChartDisplay
    } = props;
    const classes = useStyles();
    const assignments = getAssignments(evaluations);
    const chartData = assignments.map(assignment => getAverageRatingsForAssignment(assignment));

    return (
        <Paper className={classes.root} elevation={3}>
            <Typography
                className={classes.title}
                component="h2"
                variant="h3"
                align="center"
            >
                Average Ratings
            </Typography>
            <AssignmentsChart
                chartData={chartData}
                visibility={visibility}
                lineChartDisplay={lineChartDisplay}
                toggleRatingsVisibility={toggleRatingsVisibility}
                handleChartDisplay={handleChartDisplay}
            />
        </Paper>
    );
}

export default HomePage;