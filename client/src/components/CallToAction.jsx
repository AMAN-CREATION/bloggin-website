import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";

export default function CallToAction() {
  return (
    <div className="dark:bg-gray-900 text-white py-12 px-6 rounded-xl flex items-center justify-between">
      <div className="w-1/2 mr-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-600">
          Explore My GitHub Projects
        </h2>
        <p className="text-lg mb-4 text-gray-500">
          Check out my GitHub repositories to discover projects with their
          source code.
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-lg"
          onClick={() =>
            window.open("https://github.com/AMAN-CREATION?tab=repositories")
          }
        >
          <FaGithub className="mr-2" />
          <span>Visit GitHub</span>
        </Button>
      </div>
      <div className="w-1/2">
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt="GitHub Projects"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
