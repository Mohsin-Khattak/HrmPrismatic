import React from 'react';
import {View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const BarGraph = () => {
  return (
    <BarChart
      data={{
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            data: [1.2, 1.8, 1.4, 1.6, 2.0, 1.6, 1.4], // Values from the graph
            //   colors: [
            //     // (opacity = 1) => `rgba(34, 85, 140, ${opacity})`, // First set color
            //     // (opacity = 1) => `rgba(240, 190, 70, ${opacity})`, // Second set color
            //   ],
          },
        ],
      }}
      width={screenWidth - 30} // Adjust the width to fit the screen
      height={220}
      yAxisLabel=""
      yAxisSuffix=""
      yAxisInterval={1} // Defines the step size between y-axis labels
      chartConfig={{
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 1, // Set decimal points if needed
        barPercentage: 0.5, // Adjust the bar width
        color: (opacity = 1, index) => {
          // Alternate colors based on bar index
          // return index % 2 === 0 ? 'blue' : 'yellow';
        },
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

        style: {
          borderRadius: 16,
        },
      }}
      verticalLabelRotation={0} // No rotation for labels
    />
  );
};

export default BarGraph;
