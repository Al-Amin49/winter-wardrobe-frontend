type TVolunteerCard = {
    title: string,
    description: string;
  };
const VolunteerCard = ({ title, description }: TVolunteerCard) => {
    return (
        <>
<div className="bg-primary shadow-md rounded-md p-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div> 
        </>
    );
};

export default VolunteerCard;