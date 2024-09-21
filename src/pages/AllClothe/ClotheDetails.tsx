import Container from "../../components/Container";
import { useGetSingleClothesQuery } from "../../redux/api/ClotheApi";
import { Link, useParams } from "react-router-dom";
import Loading from '../../components/Loading';
import { TClothe } from "../../types";
import DonateModal from "../../components/Donate/DonateModal";
import { ArrowLeft } from "lucide-react";

const ClotheDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleClothesQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  const { image, title, description, size, category } = data.data as TClothe;

  return (
    <Container>
     

      <section className='bg-indigo-50 py-10'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <main className='flex flex-col'>
         
              <div className='bg-white p-6 rounded-lg shadow-md mb-6 flex justify-between'>
                
                <div className='text-gray-500 mb-4'>
                <div className='flex items-center text-indigo-500 hover:text-indigo-600 mb-4'>
            <ArrowLeft className='mr-2 ' />
            <Link to="/all-clothe"><span>Back to All Clothes</span></Link>
          </div>
                <h1 className='text-3xl font-bold '>{title}</h1>
                  <span className='badge badge-secondary'>{category}</span>
                </div>
                <DonateModal/>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>Description</h3>
                <p className='mb-4'>{description}</p>

                <h3 className='text-indigo-800 text-lg font-bold mb-2'>Available Sizes</h3>
                <ul className='flex space-x-2'>
                  {size.map((s) => (
                    <li key={s} className='list-none bg-primary p-2 rounded-lg text-white'>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </main>

            {/* Image Column */}
            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Image Preview</h3>
                <div className='flex justify-center'>
                  <img src={image} className='w-full max-w-xs' alt={title} />
                </div>
              </div>

            
            </aside>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ClotheDetails;
