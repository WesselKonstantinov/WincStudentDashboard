import {
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryLegend,
    VictoryTooltip,
    VictoryAxis,
    VictoryTheme
} from 'victory';

function StudentsChart({ chartData }) {
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
            <VictoryGroup offset={15} colorScale={['#4f8bc9', '#ffa500']}>
                <VictoryBar
                    data={chartData}
                    x="student"
                    y="difficulty"
                    labels={({ datum }) => `Difficulty rating by ${datum.student}: ${datum.difficulty}`}
                    labelComponent={<VictoryTooltip style={{ fontSize: 6 }} />}
                />
                <VictoryBar
                    data={chartData}
                    x="student"
                    y="enjoyability"
                    labels={({ datum }) => `Enjoyability rating by ${datum.student}: ${datum.enjoyability}`}
                    labelComponent={<VictoryTooltip style={{ fontSize: 6 }} />}
                />
            </VictoryGroup>
            <VictoryAxis dependentAxis domain={[0, 5]} />
            <VictoryAxis style={{ tickLabels: { padding: 0 } }} />
        </VictoryChart>
    );
}

export default StudentsChart;