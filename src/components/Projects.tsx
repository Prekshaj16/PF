import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Palette, Zap } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "AI Resume Analyzer",
      description: "An AI-powered tool that analyzes resumes to assess skill alignment, job matching, and provides personalized improvement suggestions.",
      image: "./Resumepic.jpeg",
      tags: ["Python", "Docker", "Google Gemini AI", "Pdfplumber"],
      github: "https://github.com/Prekshaj16/AI_Prj",
      live: "https://huggingface.co/spaces/PrekshaJ16/AI-Resume-Analyzer",
      icon: Code
    },
    {
      title: "Restaurant POS System",
      description: "A user-friendly Point of Sale system designed for restaurants to manage orders, billing, and inventory efficiently. Supports real-time order tracking.",
      image: "/POS.jpg",
      tags: ["React.js", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Prekshaj16/RMS",
      live: "https://restaurantfrontend-ten.vercel.app/",
      icon: Code
    },
    {
      title: "Recipe Recommendation System",
      description: "A dynamic recipe recommendation system that displays multiple recipe videos and allows seamless playback for an interactive cooking experience.",

      tags: ["React.js", "Tailwind CSS", "API"],
      github: "https://github.com/Prekshaj16/RecipeApp_react.js",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fHww",
      live: "https://recipe-app-react-js-fawn.vercel.app/",
      icon: Code
    },

    {
      title: "Student Management System",
      description: " This Flask Student Management System lets you add, edit, delete, and search student records. It also shows real-time student counts and displays success/error messages for better user experience.",
      tags: ["Python", "Flask", "Jinja2"],
      github: "https://github.com/Prekshaj16/student_mng_sys",
      image: "/Student-Management-System.png",
      live: "https://preksha16.pythonanywhere.com/",
      icon: Code
    },



    {
      title: "Ecommerce Website",
      description: "ShopEasy is a sleek e-commerce platform built with Next.js, offering fast performance and a seamless shopping experience.",

      tags: ["Next.js", "Tailwind CSS", "Express", "MONGODB"],
      github: "https://github.com/Prekshaj16/ShopEasy",
      image: "/ecommerce.png",
      live: "https://shop-easy-frontend-lac.vercel.app/",
      icon: Code
    },



  ]

  const handleLinkClick = (url: string) => {
    if (url && url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            A showcase of some of my recent work, demonstrating different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <Card key={index} className="...">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>




              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent rounded-full text-xs font-medium border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={() => handleLinkClick(project.github)}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={() => handleLinkClick(project.live)}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            type="button"
            variant="outline"
            className="border-border hover:border-blue-500 px-8 py-3"
            onClick={(e) => {
              e.preventDefault();
              setShowAll(!showAll);
            }}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </Button>


        </div>
      </div>
    </section>
  );
};

export default Projects;
