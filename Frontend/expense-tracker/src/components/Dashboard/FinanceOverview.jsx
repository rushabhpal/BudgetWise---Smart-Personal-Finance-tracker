import React from 'react'
import CustomPieChart from '../charts/CustomPieChart'
const COLORS = ["#875CFF", "#FA2C37", "#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Financial Overview</h5>
      </div>

      <div className="flex justify-center mt-4">
        <CustomPieChart
          data={balanceData}
          label="Total Balance"
          totalAmount={`$${totalBalance}`}
          colors={COLORS}
          showTextAnchor
        />
      </div>
    </div>
  );
};

export default FinanceOverview;