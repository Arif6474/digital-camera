
import React from 'react';
import './Dashboard.css'
import { Area, AreaChart, CartesianGrid, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const data =  [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 5241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 5503,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 7026,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 5209,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 6900,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 6700,
            "revenue": 61000
        }
    ]
    return (
        <div className="chart-container ">
            
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  
  <YAxis />
  <Tooltip></Tooltip>
  <Legend />
  <CartesianGrid strokeDasharray="3 3" />
  
  <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey="sell" stroke="#ff7300" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>


<RadarChart outerRadius={90} width={730} height={250} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Revenue" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Radar name="Sell" dataKey="sell" stroke="#ff7300" fill="#82ca9d" fillOpacity={0.6} />
  <Tooltip/>
  <Legend />
</RadarChart>

</div>
    );
};

export default Dashboard;