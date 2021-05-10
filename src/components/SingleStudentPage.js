import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentsChart from './AssignmentsChart';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    profilePicture: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: '24px auto',
    },
    title: {
        marginBottom: theme.spacing(3),
    },
}));

function SingleStudentPage(props) {
    const {
        students,
        evaluations,
        visibility,
        lineChartDisplay,
        toggleRatingsVisibility,
        handleChartDisplay
    } = props;
    const classes = useStyles();
    const { name } = useParams();
    const student = students.find(student => student.name.first === name);
    const chartData = evaluations.filter(evaluation => evaluation.student === name);

    return (
        <>
            <Paper className={classes.root} elevation={3}>
                <Typography
                    component="h2"
                    variant="h3"
                    align="center"
                >
                    Student Details
            </Typography>
                <Avatar
                    className={classes.profilePicture}
                    variant="rounded"
                    alt={`${student.name.first} ${student.name.last}`}
                    src={student.picture.large}
                />
                <Divider />
                <List>
                    <ListItem divider>
                        <ListItemText
                            align="center"
                            primary="Full name"
                            secondary={`${student.name.first} ${student.name.last}`}
                        />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText
                            align="center"
                            primary="Age"
                            secondary={student.dob.age}
                        />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText
                            align="center"
                            primary="Email"
                            secondary={student.email}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            align="center"
                            primary="Phone number"
                            secondary={student.cell}
                        />
                    </ListItem>
                </List>
            </Paper>
            <Paper className={classes.root} elevation={3}>
                <Typography
                    className={classes.title}
                    component="h2"
                    variant="h3"
                    align="center"
                >
                    Student Ratings
            </Typography>
                <AssignmentsChart
                    chartData={chartData}
                    visibility={visibility}
                    lineChartDisplay={lineChartDisplay}
                    toggleRatingsVisibility={toggleRatingsVisibility}
                    handleChartDisplay={handleChartDisplay}
                />
            </Paper>
        </>
    );
}

export default SingleStudentPage;