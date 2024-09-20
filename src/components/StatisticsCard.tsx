
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatisticsCard = () => {
  const stats = [
    { number: 180, label: 'Featured Campaign' },
    { number: 280, label: 'Dedicated Volunteers' },
    { number: 1560, label: 'People Helped Happily' }
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-4">
        {stats.map((stat, index) => (
          <StatItem key={index} number={stat.number} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

// Create a new StatItem component to handle individual count animations
const StatItem = ({ number, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,   // Trigger the animation only once
    threshold: 0.3       // Adjust the threshold to start counting when 30% of the component is in view
  });

  return (
    <div ref={ref} className="flex flex-col items-center bg-white rounded-md p-6 shadow-md">
      <span className="text-4xl font-bold text-yellow-600">
        {/* CountUp component starts only when the item is in view */}
        {inView && <CountUp start={0} end={number} duration={2.5} />}+
      </span>
      <span className="text-lg font-medium text-gray-800 mt-2">{label}</span>
    </div>
  );
};

export default StatisticsCard;
