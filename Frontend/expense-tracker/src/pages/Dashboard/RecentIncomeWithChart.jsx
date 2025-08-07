import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomBarChart from "../../components/charts/CustomBarChart"

const RecentIncomeWithChart = ({ data = [], totalIncome = 0 }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log("Raw income data:", data); // Debug log
    
    // Process data safely
    try {
      const processedData = (Array.isArray(data) ? data : [])
        .filter(item => item?.date && !isNaN(Number(item.amount)))
        .map(item => ({
          date: moment(item.date).isValid() 
            ? moment(item.date).format("MMM D") 
            : "Invalid Date",
          amount: Number(item.amount),
          source: item.source || "Other"
        }));
      
      console.log("Processed chart data:", processedData); // Debug log
      setChartData(processedData);
    } catch (error) {
      console.error("Error processing income data:", error);
      setChartData([]);
    }
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Recent Income</h5>
        <span className="text-green-500 font-medium">
          Total: ${totalIncome.toLocaleString()}
        </span>
      </div>

      <div className="h-[300px] mt-4">
        {chartData.length > 0 ? (
          <CustomBarChart data={chartData} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            {data.length === 0 ? "No income data available" : "Loading..."}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentIncomeWithChart;