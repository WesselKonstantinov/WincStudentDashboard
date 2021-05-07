import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AssignmentsTable from './AssignmentsTable';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

function AssignmentsListPage({ evaluations, getAssignments, getAverageRatingsForAssignment }) {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={3}>
            <Typography
                component="h2"
                variant="h3"
                align="center"
            >
                All Assignments
            </Typography>
            <AssignmentsTable
                evaluations={evaluations}
                getAssignments={getAssignments}
                getAverageRatingsForAssignment={getAverageRatingsForAssignment}
            />
        </Paper>
    );
}

export default AssignmentsListPage;