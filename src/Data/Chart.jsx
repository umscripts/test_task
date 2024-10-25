import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Sales: 30, Appointments: 10 },
    { name: 'Feb', Sales: 45, Appointments: 25 },
    { name: 'Mar', Sales: 60, Appointments: 20 },
    { name: 'Apr', Sales: 75, Appointments: 35 },
    { name: 'May', Sales: 50, Appointments: 20 },
    { name: 'Jun', Sales: 90, Appointments: 45 },
    { name: 'Jul', Sales: 110, Appointments: 60 },
    { name: 'Aug', Sales: 70, Appointments: 50 },
    { name: 'Sep', Sales: 95, Appointments: 30 },
    { name: 'Oct', Sales: 100, Appointments: 50 },
    { name: 'Nov', Sales: 85, Appointments: 40 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white drop-shadow-lg p-2 rounded text-Secondary">
                <p className="label  text-sm font-medium">{`${label}`}</p>
                <p className=' opacity-50 text-xs'>{`${payload[0].value} Sales`}</p>
                <p className=' opacity-50 text-xs'>{`${payload[1].value} Appointments`}</p>
            </div>
        );
    }
    return null;
};

const Chart = () => {
    return (
        <ResponsiveContainer height={400}>
            <BarChart
                data={data}
            >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis
                    ticks={[0, 25, 50, 75, 100, 125]}
                    tickFormatter={(value) => `$${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Sales" fill="#5679FF" />
                <Bar dataKey="Appointments" fill="#101928" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;
