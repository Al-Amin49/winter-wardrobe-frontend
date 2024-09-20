// import  { useEffect } from 'react';
// import parllaxImg from '../../assets/img/donateVolunteer.png';
import StatisticsCard from '../../components/StatisticsCard';

const ParallaxSection = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const parallax = document.getElementById('parallax');
  //     if (parallax) {
  //       parallax.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup event listener on unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="relative h-screen overflow-hidden ">
      {/* Background with parallax effect */}
      {/* <div
        id="parallax"
        className="absolute inset-0 bg-cover bg-center h-1/2"
        style={{ backgroundImage: `url(${parllaxImg})`, backgroundAttachment: 'fixed' }}
      ></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* <div className="mb-20">
          <h1 className="text-4xl font-bold text-black">Join the Helpers Group</h1>
          <button className="btn btn-primary text-white mt-2">Join as a Volunteer</button>
        </div> */}

        <StatisticsCard />
      </div>
    </div>
  );
};

export default ParallaxSection;
