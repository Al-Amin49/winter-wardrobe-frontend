import { PieChart, Pie, Cell, ResponsiveContainer, PieLabelRenderProps } from "recharts";
import Cards from "./Cards";
import { useAppSelector } from "../../../redux/hook";

const AdminHome = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userInfo: any = useAppSelector((state) => state.auth.userInfo);
  const user = userInfo?.data?.user;
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx=0,
    cy,
    midAngle,
    innerRadius = 0,
    outerRadius,
    percent = 0,
  }: PieLabelRenderProps) => {
    const radius = innerRadius?? + (outerRadius?? - innerRadius) * 0.5;
    const x = cx?? + radius * Math.cos(-midAngle * RADIAN);
    const y = cy?? + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
    <h3 className="text-xl lg:text-2xl font-medium my-4">Welcome Back , <span className="font-bold text-primary">{user.username}</span></h3>
    <Cards/>
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
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
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default AdminHome;
