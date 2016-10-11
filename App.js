import React from 'react';
import ReactFlot from './src/ReactFlot.jsx';

const options = {
  series: {
    bars: {
      show: true,
      barWidth: 0.3,
      align: 'center',
      lineWidth: 0,
      fill: 0.75,
    },
  },
  xaxis: {
    ticks: [
      [0, 'First'],
      [1, 'Second'],
      [2, 'Third'],
      [3, 'Fourth'],
    ],
    mode: 'categories',
    tickLength: 0,
  },
  yaxis: {
    max: 10,
  },
};

const data = [[
 [0, 4],
 [1, 6],
 [2, 3],
 [3, 8],
]];

const App = () => (
  <div>
    <ReactFlot data={data} options={options} />
  </div>
);

export default App;
