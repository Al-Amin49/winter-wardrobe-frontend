export type TCommunityUser = {
  _id: string;
  username: string;
  profile: string;
};

export type TCommunityComment = {
  _id: string;
  author: TCommunityUser;
  content: string;
};

export type TCommunityPost = {
  _id: string;
  content: string;
  comments?: TCommunityComment[]; 
  likes: number;
  author: TCommunityUser;
  likedBy?: TCommunityUser[];
  createdAt:string
};
