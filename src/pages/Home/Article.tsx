import  { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Subline from '../../components/Subline';
import Container from '../../components/Container';
import {motion} from 'framer-motion'
import { motionContainer } from '../../components/Framermotion/motionvarient';
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
    <Container>
      <div className=" mx-auto py-8">
      <h2 className="text-xl md:text-3xl text-center font-bold text-primary pt-16">Latest Articles on Winter Clothes Distribution</h2>
      <div className='pb-16'>
      <Subline bgPrimary={false}/>
      </div>
      <motion.div
      initial={motionContainer.initial}
      whileInView={motionContainer.whileInView}
      transition={motionContainer.transition}
       className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 mx-4 lg:mx-0">
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
      </motion.div>
    </div>
    </Container>
  );
};

export default Article;
