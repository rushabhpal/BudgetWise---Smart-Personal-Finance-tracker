import React from "react";
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}> 
      <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"  
          cy="50%"  
          outerRadius={100}  
          innerRadius={70}   
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={CustomTooltip} />
        <Legend content={CustomLegend} />
        {showTextAnchor && (
          <>
            <text
              x="50%"
              y="45%"  
              textAnchor="middle"
              fill="#464646"
              fontSize="14px"
            >
              {label}
            </text>
            <text
              x="50%"
              y="55%"  
              textAnchor="middle"
              fill="#313131"
              fontSize="24px"
              fontWeight="600"  
            >
              {totalAmount}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;