import  { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Subline from '../../components/Subline';
const Article = () => {
  const [articles, setArticles] = useState([]);
type TArticle={
  id:string,
  title:string,
  author:string,
  content:string,
  date:Date,
  image:string
}
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('articles.json');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-center font-bold text-primary pt-16">Read Our Latest Articles on Winter Clothes Distribution</h2>
      <div className='pb-16'>
      <Subline bgPrimary={false}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article:TArticle) => (
          <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-primary mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-2">{article.author}</p>
              <p className="text-gray-600">{format(new Date(article.date), "MMM dd, yyyy")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
