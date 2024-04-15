import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto flex justify-center items-center flex-col gap-6 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-500 mb-6">
        Projects
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Build fun and engaging projects while learning HTML, CSS, and
        JavaScript!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-md  p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-500 mb-4">
            Project 1
          </h2>
          <p className="text-gray-600 mb-4">
            Description of Project 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <a href="#" className="text-teal-500 font-semibold hover:underline">
            View Project
          </a>
        </div>
        <div className=" rounded-md p-6  shadow-lg">
          <h2 className="text-xl font-semibold  text-gray-500 mb-4">
            Project 2
          </h2>
          <p className="text-gray-600 mb-4">
            Description of Project 2. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <a href="#" className="text-teal-500 font-semibold hover:underline">
            View Project
          </a>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}
