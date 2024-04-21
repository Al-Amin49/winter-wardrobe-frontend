import { TCommunityComment } from "@/types";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { useGetSinglePostQuery } from "../../redux/api/communityPostApi";
import { useParams } from "react-router-dom";


const PostDetails = () => {
    const {id}= useParams();
    const { data, isLoading } = useGetSinglePostQuery(id);
    console.log(data?.data);
    const {author, content}= data?.data as TCommunityComment ;
    if(isLoading){
        return <Loading/>
    }
    return (
        <Container>
            <div>

            </div>
            <div>

            </div>
        </Container>
    );
};

export default PostDetails;