// AboutPage.js
import React from "react";
import { Layout } from "../../components";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import "./style.css";

const AboutPage = () => {
  const data = [
    { name: 'Option A', value: 35 },
    { name: 'Option B', value: 25 },
    { name: 'Option C', value: 20 },
    { name: 'Option D', value: 20 },
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
    <Layout>
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to our About page. Here, you can learn more about our company or organization.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor non
          justo congue, vel scelerisque ligula blandit. Fusce eget est ut elit ultrices bibendum
          eget nec velit. Sed id mauris in nunc fermentum rhoncus.
        </p>
      </div>
      <h1>Chart</h1>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
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
            <Legend verticalAlign="middle" align="right" layout="vertical" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
};

export default AboutPage;
