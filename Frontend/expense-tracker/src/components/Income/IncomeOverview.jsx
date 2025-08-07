import React, { useState, useEffect } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareIncomeBarChartData } from "../../utils/helper";
import CustomBarChart from "../charts/CustomBarChart";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (transactions?.length > 0) {
      const validData = transactions
        .filter(t => t.date && !isNaN(Number(t.amount)))
        .map(t => ({
          date: new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          amount: Number(t.amount),
          source: t.source || "Other"
        }));
      setChartData(validData.slice(0, 6));
    } else {
      setChartData([]);
    }
  }, [transactions]);

  return (
    <div className="card">
      {/* 🔼 Header with title + Add button */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Recent Income</h2>
        <button
          onClick={onAddIncome}
          className="add-btn add-btn-fill flex items-center gap-2"
        >
          <LuPlus size={18} />
          Add Income
        </button>
      </div>

      <div className="h-[300px] mt-6"> 
        {chartData.length > 0 ? (
          <CustomBarChart data={chartData} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            {transactions ? "No income data available" : "Loading..."}
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomeOverview;

