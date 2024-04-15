import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import CallToAction from "../components/CallToAction";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Welcome to my Blog
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Here you'll find a variety of articles and tutorials on topics such
            as web development, software engineering, and programming languages.
          </p>
          <Link
            to="/search"
            className="mt-8 inline-block px-6 py-3 rounded-full text-base font-semibold mb-4 bg-teal-500 text-white hover:bg-teal-600"
          >
            View all posts
          </Link>
        </div>
        <div className="p-3 bg-amber-100 dark:bg-slate-700">
          <CallToAction />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div key={post._id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/search"
            className="inline-block px-6 py-3 mb-3 rounded-full text-base font-semibold bg-teal-500 text-white hover:bg-teal-600"
          >
            View all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
