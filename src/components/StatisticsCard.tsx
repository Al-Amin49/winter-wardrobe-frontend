
const StatisticsCard = () => {
    const stats = [
        { number: 180, label: 'Featured Campaign' },
        { number: 280, label: 'Dedicated Volunteers' },
        { number: 1560, label: 'People Helped Happily' }
      ];
    return (
        <div>
            <div className="flex justify-around items-center pt-10 bg-gray-50">
      {stats.map((stat, index) => (
        <div key={index}>
        <div className="flex flex-col items-center bg-white rounded-md p-4 shadow-md">
      <span className="text-4xl font-bold text-yellow-600">{stat.number}+</span>
      <span className="text-lg font-medium text-gray-800">{stat.label}</span>
    </div>
    </div>
      ))}
    </div>
        </div>
    );
};

export default StatisticsCard;