export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-6">
            Welcome to Blogger's Blog
          </h1>
          <p className="text-lg text-black mb-8">
            Your go-to source for insightful articles and tutorials on
            technology, coding, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Blogger's Blog was founded with a mission to share knowledge,
              inspire curiosity, and foster a community of learners in the world
              of software engineering.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer a wide range of articles and tutorials covering web
              development frameworks, programming languages, and software
              engineering best practices. Whether you're a beginner or an
              experienced developer, there's something for everyone.
            </p>
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Join our community of learners, where you can engage with other
              readers, leave comments, and share your insights. Together, we can
              grow and learn from each other's experiences.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Stay updated with our weekly newsletter, featuring the latest
              articles, tutorials, and insights from the world of software
              engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
