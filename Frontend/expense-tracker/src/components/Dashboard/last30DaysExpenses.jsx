import React from "react";
import moment from "moment";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Last30DaysExpenses = ({ data }) => {
  // Process real data or fallback to test data
  const chartData = data?.transactions?.length > 0
    ? data.transactions.map(t => ({
        date: moment(t.date).format("MMM D"),
        amount: Number(t.amount),
        category: t.category || "Other"
      }))
    : [
        { date: "Aug 1", amount: 400, category: "Test" },
        { date: "Aug 2", amount: 300, category: "Test" },
        { date: "Aug 3", amount: 600, category: "Test" }
      ];

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 30 Days Expenses</h5>
        {data?.total && (
          <span className="text-primary font-medium">
            Total: ${data.total.toLocaleString()}
          </span>
        )}
      </div>

      <div className="h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

  

      </div>
    </div>
  );
};

export default Last30DaysExpenses;