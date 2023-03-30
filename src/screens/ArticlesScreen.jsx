import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { listArticles } from "../redux/actions/articleActions";

import AddArticleForm from "../components/AddArticleForm";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";

const ArticlesScreen = () => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);

  const articlesList = useSelector((state) => state.articlesList);
  const { loading, error, articles } = articlesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleArticleCreate = () => {
    setShowForm(false);
  };

  useEffect(() => {
    dispatch(listArticles());
  }, [dispatch]);

  return (
    <>
      <Meta title="Read Articles - MindMate" />
      <section className="min-h-screen h-auto flex justify-center items-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message type="error">{error}</Message>
        ) : (
          <div className=" container py-auto px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h2 className="text-center pt-20 py-7 text-4xl font-bold tracking-tight  sm:text-5xl">
              Read New Articles!
            </h2>

            {userInfo && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setShowForm(true)}
              >
                Add New Article
              </button>
            )}
            {showForm && <AddArticleForm onCreate={handleArticleCreate} />}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 gap-4">
              {articles.map((article) => (
                <Link
                  to={`/articles/${article.id}`}
                  key={article.id}
                  className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-700 text-sm mb-2">
                      By {article.author} on{" "}
                      {article.date?.toDate()?.toString().substr(0, 15)}
                    </p>
                    <p className="text-gray-600">
                      {article.description.substr(0, 100)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ArticlesScreen;
