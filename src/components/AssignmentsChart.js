import {
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryLegend,
    VictoryTooltip,
    VictoryAxis,
    VictoryLabel,
    VictoryTheme,
} from 'victory';

function AssignmentsChart({ chartData }) {
    const dataContainsAverageRatings = chartData.every(datum => 'averageDifficulty' in datum && 'averageEnjoyability' in datum);

    return (
        <VictoryChart
            width={600}
            height={300}
            theme={VictoryTheme.material}
        >
            <VictoryLegend
                x={210}
                orientation="horizontal"
                gutter={20}
                colorScale={['#4f8bc9', '#ffa500']}
                style={{ border: { stroke: '#000' } }}
                data={[
                    { name: 'Difficulty' },
                    { name: 'Enjoyability' },
                ]}
            />
            <VictoryGroup offset={3} colorScale={['#4f8bc9', '#ffa500']}>
                <VictoryBar
                    data={chartData}
                    x="assignment"
                    y={dataContainsAverageRatings ? 'averageDifficulty' : 'difficulty'}
                    labels={({ datum }) => dataContainsAverageRatings ?
                        `Assignment: ${datum.assignment}
                        Average difficulty: ${datum.averageDifficulty}` :
                        `Assignment: ${datum.assignment}
                        Difficulty rating by ${datum.student}: ${datum.difficulty}`}
                    labelComponent={<VictoryTooltip style={{ fontSize: 6 }} />}
                />
                <VictoryBar
                    data={chartData}
                    x="assignment"
                    y={dataContainsAverageRatings ? 'averageEnjoyability' : 'enjoyability'}
                    labels={({ datum }) => dataContainsAverageRatings ?
                        `Assignment: ${datum.assignment}
                        Average enjoyability: ${datum.averageEnjoyability}` :
                        `Assignment: ${datum.assignment}
                        Enjoyability rating by ${datum.student}: ${datum.enjoyability}`}
                    labelComponent={<VictoryTooltip style={{ fontSize: 6 }} />}
                />
            </VictoryGroup>
            <VictoryAxis dependentAxis domain={[0, 5]} />
            <VictoryAxis
                style={{ tickLabels: { fontSize: 4.5, padding: 0 } }}
                tickLabelComponent={
                    <VictoryLabel
                        textAnchor="start"
                        angle={35}
                    />
                }
            />
        </VictoryChart>
    );
}

export default AssignmentsChart;