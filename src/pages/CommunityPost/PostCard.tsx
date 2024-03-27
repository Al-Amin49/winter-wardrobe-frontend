import Loading from "../../components/Loading";
import { useGetAllCommunityPostQuery } from "../../redux/api/communityPostApi";


const PostCard = () => {
    const {data, isLoading}= useGetAllCommunityPostQuery("");

console.log('data', data)

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PostCard;