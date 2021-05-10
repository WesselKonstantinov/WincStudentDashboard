import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

const BlueSwitch = withStyles({
    switchBase: {
        color: '#72a2d3',
        '&$checked': {
            color: '#4f8bc9',
        },
        '&$checked + $track': {
            backgroundColor: '#72a2d3',
        },
    },
    checked: {},
    track: {},
})(Switch);

const OrangeSwitch = withStyles({
    switchBase: {
        color: '#ffb732',
        '&$checked': {
            color: '#ffa500',
        },
        '&$checked + $track': {
            backgroundColor: '#ffb732',
        },
    },
    checked: {},
    track: {},
})(Switch);

function ChartDisplayOptions(props) {
    const {
        visibility,
        lineChartDisplay,
        toggleRatingsVisibility,
        handleChartDisplay
    } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Tooltip title="Toggle difficulty rating">
                <BlueSwitch
                    name="difficultyRating"
                    checked={visibility.difficultyRating}
                    onChange={toggleRatingsVisibility}
                    inputProps={{ 'aria-label': 'Toggle difficulty rating' }}
                />
            </Tooltip>
            <Tooltip title="Toggle enjoyability rating">
                <OrangeSwitch
                    name="enjoyabilityRating"
                    checked={visibility.enjoyabilityRating}
                    onChange={toggleRatingsVisibility}
                    inputProps={{ 'aria-label': 'Toggle enjoyability rating' }}
                />
            </Tooltip>
            <Tooltip title="Toggle bar/line chart">
                <IconButton onClick={handleChartDisplay} aria-label="Toggle bar/line chart">
                    {lineChartDisplay ? <BarChartIcon /> : <ShowChartIcon />}
                </IconButton>
            </Tooltip>
        </div>
    );
}

export default ChartDisplayOptions;