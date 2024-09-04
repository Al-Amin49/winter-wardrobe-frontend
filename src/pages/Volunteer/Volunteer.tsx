import Subline from "../../components/Subline";
import Container from "../../components/Container";
import volunteer from "../../utils/lottie/volunteer.json";
import { LottieAnimationOptions } from "@/types";
import { useLottie } from "lottie-react";

import VolunteerSignUp from "./VolunteerSignUp";
const Volunteer = () => {
  // Volunteer animation options
  const options = {
    animationData: volunteer,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options as LottieAnimationOptions, {
    height: 400,
  });

  return (
    <Container>
      <div className="pt-20 pb-10">
        <h3 className="text-2xl lg:text-4xl text-center text-secondary font-bold">
          Get Involved: Volunteer with Us
        </h3>
        <Subline bgPrimary={true} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center mt-5">
          <div>{View}</div>
          <div>
            <h2 className="text-3xl text-primary font-bold">
             Our Mission
            </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum blanditiis rerum dolorem error iste. Modi minus dolores saepe sit voluptate nostrum quas fuga nam praesentium delectus illum, molestias aliquam commodi? Architecto, maxime recusandae magni sequi commodi earum quam dicta blanditiis saepe rerum id assumenda deserunt tenetur obcaecati deleniti voluptatum sint.</p>
            
          </div>
        </div>
      </div>
      {/* Volunteer sign up */}

      <VolunteerSignUp/>
    </Container>
  );
};


export default Volunteer;
