export type TUserType = {
    _id: string;
    username: string;
    profile: string;
  };
  
 export type TClotheType = {
    _id: string;
    title: string;
    category: string;
  };
  
  // Define the DonationType for the donation data
  export type TDonationType = {
    _id: string;
    userId: TUserType;
    clotheId: TClotheType;
    quantity: number;

  };