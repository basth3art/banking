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
  const accountNames  = accounts.map((a) => a.name)
  const  balances = accounts.map((a) => a.currentBalance)

    const data = {
        datasets: [
            {
                label: "banks",
                data: balances,
                backgroundColor: ["#0747b6", "#2265d8", "#2f91FA"]
            }

        ],
        labels: accountNames
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