import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const dataPointsvalues = props.dataPoints.map( dataPoint=> dataPoint.value)
    const totalMaximum = Math.max(...dataPointsvalues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart
