import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createArticle } from "../redux/actions/articleActions";

import Loader from "./Loader";
import Message from "./Message";

const AddArticleForm = ({ onCreate }) => {
  const dispatch = useDispatch();

  const articleCreate = useSelector((state) => state.articleCreate);
  const { loading, error } = articleCreate;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const handleAddArticle = (e) => {
    e.preventDefault();
    const article = { title, image, description, author, date: new Date() };

    dispatch(createArticle(article));

    setTitle("");
    setImage("");
    setDescription("");
    setAuthor("");

    onCreate();
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Message type="error">{error}</Message>}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            onClick={() => onCreate()}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddArticleForm;
