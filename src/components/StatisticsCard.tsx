
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatisticsCard = () => {
  const stats = [
    { number: 180, label: 'Featured Campaign' },
    { number: 280, label: 'Dedicated Volunteers' },
    { number: 1560, label: 'People Helped Happily' }
  ];

  return (
    <div className=" bg-secondary p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-4">
        {stats.map((stat, index) => (
          <StatItem key={index} number={stat.number} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

type TStatItem={
  number:number,
  label:string
}
// Create a new StatItem component to handle individual count animations
const StatItem = ({ number, label }:TStatItem) => {
  const { ref, inView } = useInView({
    triggerOnce: true,   
    threshold: 0.3       
  });

  return (
    <div ref={ref} className="flex flex-col items-center bg-white rounded-md p-6 shadow-md">
      <span className="text-2xl lg:text-4xl font-bold text-yellow-600">
        {/* CountUp component starts only when the item is in view */}
        {inView && <CountUp start={0} end={number} duration={2.5} />}+
      </span>
      <span className="text-lg font-medium text-gray-800 mt-2">{label}</span>
    </div>
  );
};

export default StatisticsCard;
