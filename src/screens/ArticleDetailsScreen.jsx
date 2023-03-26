import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { listArticleDetails } from "../redux/actions/articleActions";

const ArticleDetailsScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const articleDetails = useSelector((state) => state.articleDetails);
  const { loading, error, article } = articleDetails;

  useEffect(() => {
    dispatch(listArticleDetails(id));
  }, [dispatch, id]);

  return (
    <section
      className="min-h-screen h-auto flex justify-center items-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${article.image})` }}
    >
      {loading ? (
        <Loader />
      ) : article ? (
        <div className="bg-white opacity-90 container pt-18 px-4 mx-4 max-w-screen-xl text-center lg:py-16 lg:px-12 border rounded-md">
          {error && <Message type="error">{error}</Message>}
          <h2 className="text-center py-7 text-4xl font-bold tracking-tight sm:text-5xl">
            {article.title}
          </h2>
          <p className="py-7 tracking-tight text-lg">
            {article.author} - {article.date?.toDate()?.toString()}
          </p>
          <p className="py-7 tracking-tight text-lg">{article.description}</p>
        </div>
      ) : null}
    </section>
  );
};

export default ArticleDetailsScreen;
