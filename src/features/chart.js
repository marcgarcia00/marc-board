import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = ({data, lineColor}) => {
  return (
    <LineChart width={730} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="name"/>
      <YAxis />
      <Line type="monotone" dataKey="happyMeter" stroke={lineColor} />
    </LineChart>
  );
}

export default Chart;