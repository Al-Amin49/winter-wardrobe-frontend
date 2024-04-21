import PostDetails from "../pages/CommunityPost/PostDetails";
import CommunityDashboard from "../components/layout/CommunityDashboard";
import CommunityPost from "../pages/CommunityPost/CommunityPost";

export const communityRoutes = [
  {
    path:"/community",
    element:<CommunityDashboard/>,
    children:[
      {
        index:true,
        element: <CommunityPost />,
      },
      {
        path:":id",
        element: <PostDetails />,
      },
    ]
  }
];
