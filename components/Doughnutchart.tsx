"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'; // Added Chart.js imports

ChartJS.register(ArcElement, Tooltip, Legend); // Registering the components




const Doughnutchart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "banks",
                data: [1250,2500,3750],
                backgroundColor: ["#0747b6", "#2265d8", "#2f91FA"]
            }

        ],
        labels: ["bank 1", "bank 2" , "bank 3"]
    }
  return <Doughnut 
  data={data}
  options={
    {
        cutout: "70%",
        plugins: {
            legend:{
                display: false
            }
        }
    }
  }
   />
  
}
export default Doughnutchart