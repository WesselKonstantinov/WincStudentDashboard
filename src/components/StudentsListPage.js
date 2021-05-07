import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

function StudentsListPage({ students }) {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={3}>
            <Typography
                component="h2"
                variant="h3"
                align="center"
            >
                All Students
            </Typography>
            <List dense>
                {students.map(student => {
                    return (
                        <ListItem key={student.login.uuid}>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`${student.name.first} ${student.name.last}`}
                                    src={student.picture.thumbnail}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={`${student.name.first} ${student.name.last}`} />
                            <ListItemSecondaryAction>
                                <IconButton
                                // component={Link}
                                // to={`/students/${student.name.first}`}
                                >
                                    <ArrowForward />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );
}

export default StudentsListPage;