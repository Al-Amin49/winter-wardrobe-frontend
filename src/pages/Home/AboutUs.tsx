import about from '../../assets/img/about.jpeg';
const AboutUs = () => {
    return (
        <div>
            <h3 className="text-3xl text-primary pt-20 text-center font-bold">About Us</h3>
          <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
    {/* Text Column */}
    <div className="text-column p-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
      <p className="mb-4">Our mission is to provide warmth through winter clothes to those in need, ensuring that the harsh cold does not become a barrier to their well-being. We believe in community support and generosity to make a significant impact.</p>
      <h2 className="text-2xl font-bold text-primary mb-4">Our Goal</h2>
      <p>We aim to distribute over 10,000 winter clothing items this year, reaching out to underprivileged communities across different regions. Our goal is to not only provide physical warmth but also to spread hope and kindness.</p>
    </div>
    
    {/* Image Column */}
    <div className="image-column p-4 flex justify-center">
      <img src={about} alt="Winter Clothes Distribution" className="w-full h-auto rounded-lg shadow-lg" />
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;