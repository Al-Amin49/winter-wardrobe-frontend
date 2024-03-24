import Container from "../../components/Container";
import { useGetSingleClothesQuery } from "../../redux/api/ClotheApi";
import { useParams } from "react-router-dom";
import Loading from '../../components/Loading';
import { TClothe } from "../../types";
const ClotheDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleClothesQuery(id);
  console.log(data?.data);
  if (isLoading) {
    return <Loading />;
  }
  const { image, title, description, size, category } = data.data as TClothe;

  return (
    <Container>
      <div className="pt-20">
        <div className=" flex  flex-col lg:flex-row justify-center m-4 lg:m-0 lg:justify-around items-center ">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="border shadow-lg p-16">
            <h2 className="space-x-2">
              <span className="text-primary font-bold text-3xl">{title}</span>
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p className="text-xl font-bold py-8">{description}</p>
            <span className=" flex justify-between items-center text-secondary font-bold">
              Available Sizes:
              {size.map((size) => (
                <li
                  key={size}
                  className="list-none bg-primary p-2 rounded-lg text-white "
                >
                  {size}
                </li>
              ))}
            </span>
            <div className="text-center pt-10">
              <button className="font-bold btn btn-primary text-white">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClotheDetails;
