import React, { useState } from "react";
import "./style.css";
import { Switch, Text } from "../../components";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Response = () => {
  const [isRequired, setIsRequired] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Summary");

  const changeRequired = () => {
    setIsRequired((prevIsRequired) => !prevIsRequired);
  };

  const menuAs = [
    { label: "Summary", path: "/response" },
    { label: "Individual", path: "/individual" },
  ];

  const handleMenuItemClick = (label) => {
    setSelectedMenuItem(label);
  };

  const data = [
    { name: 'Hồ Chí Minh', value: 35 },
    { name: 'Tokyo', value: 25 },
    { name: 'Paris', value: 20 },
    { name: 'London', value: 20 },
  ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div className="response-container">
      <div className="response-header">

        <div className="response-header-number">
          <p>1 answer</p>
        </div>

        <div className="switch">
          <Switch label="Accept feedback" itemID={""} changeRequired={changeRequired} />
        </div>

        <div className="menuA-container">
          <ul className="horizontal-menuA">
            {menuAs.map((menuA, index) => (
              <li key={index} className="menuA-item">
                <Link
                  to={menuA.path}
                  className={`menuA-link ${selectedMenuItem === menuA.label ? "selected" : ""}`}
                  onClick={() => handleMenuItemClick(menuA.label)}
                >
                  <Text size={18} color={"#374957"} fontWeight={700} cursor={"pointer"}>
                    {menuA.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="response-content">       
        <text className="response-question" > Đây là thành phố nào?</text>
        <text className="response-content-number"> 1 answer</text>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart className="chart-container">
              <Pie className="pie"
                data={data}
                cx="30%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="pie-cell" />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                layout="vertical"
                wrapperStyle={{ top: '110px', left: '675px', right: '0px', bottom: '200px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Response;
