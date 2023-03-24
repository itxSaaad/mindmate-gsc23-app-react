import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { getArticles, addArticles } from "../firebase";

const ArticlesScreen = () => {
  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [newArticle, setNewArticle] = useState({
    title: "",
    image: "",
    description: "",
    author: "",
    date: "",
  });

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-screen h-auto flex justify-center items-center">
      {loading && <Loader />}
      <div className=" container py-auto px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className="text-center py-7 text-4xl font-bold tracking-tight sm:text-5xl">
          Read New Articles!
        </h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setShowForm(true)}
        >
          Add New Article
        </button>
        {showForm && (
          <form
            className=" bg-gray-100 shadow-md rounded mt-4 px-8 pt-12 pb-8 mb-4"
            onSubmit={handleAddArticle}
          >
            <p className="text-center text-xl font-bold leading-relaxed">
              Add a New Article
            </p>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 sr-only"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                name="title"
                placeholder="Enter Title"
                value={newArticle.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 sr-only"
                htmlFor="author"
              >
                Author Name
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                type="text"
                name="author"
                placeholder="Enter Author Name"
                value={newArticle.author}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 sr-only"
                htmlFor="image"
              >
                Image URL
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="url"
                name="image"
                placeholder="Enter Image URL"
                value={newArticle.image}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 sr-only"
                htmlFor="description"
              >
                Content
              </label>
              <textarea
                className="w-full rounded-lg appearance-none border-gray-200 p-4 pr-12 text-sm shadow-sm leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                placeholder="Write your Content here"
                value={newArticle.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
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
                  By {article.author} on {article.date.toString()}
                </p>
                <p className="text-gray-600">
                  {article.description.substr(0, 100)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesScreen;
