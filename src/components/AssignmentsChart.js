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
                    y="averageDifficulty"
                    labels={({ datum }) => `Assignment: ${datum.assignment}
                    Average difficulty: ${datum.averageDifficulty}
                    `}
                    labelComponent={<VictoryTooltip
                        style={{ fontSize: 6 }}
                        flyoutPadding={{ top: 5, left: 7, right: 7 }}
                    />}
                />
                <VictoryBar
                    data={chartData}
                    x="assignment"
                    y="averageEnjoyability"
                    labels={({ datum }) => `Assignment: ${datum.assignment}
                    Average enjoyability: ${datum.averageEnjoyability}
                    `}
                    labelComponent={<VictoryTooltip
                        style={{ fontSize: 6 }}
                        flyoutPadding={{ top: 5, left: 7, right: 7 }}
                    />}
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