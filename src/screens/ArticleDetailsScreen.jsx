import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticleDetailsScreen = () => {
  // const [article, setArticle] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   getArticle(id).then((article) => setArticle(article));
  // }, [id]);

  return (
    <section
      className="min-h-screen h-auto flex justify-center items-center bg-fixed bg-cover"
      // style={{ backgroundImage: `url(${article.image})` }}
    >
      <div className="bg-white opacity-90 container pt-18 px-4 mx-4 max-w-screen-xl text-center lg:py-16 lg:px-12 border rounded-md">
        <h2 className="text-center py-7 text-4xl font-bold tracking-tight sm:text-5xl">
          {/* {article.title} */}
        </h2>
        <p className="py-7 tracking-tight text-lg">
          {/* {article.author} - {article.date?.toDate()?.toString()} */}
        </p>
        {/* <p className="py-7 tracking-tight text-lg">{article.description}</p> */}
      </div>
    </section>
  );
};

export default ArticleDetailsScreen;
