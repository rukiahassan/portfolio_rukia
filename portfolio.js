import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center my-10">
        <h1 className="text-4xl font-bold">Rukia Hassan</h1>
        <p className="text-lg text-gray-400">Software Developer | AI/ML Enthusiast</p>
      </motion.div>
      
      {/* About Section */}
      <Card className="w-full max-w-2xl bg-gray-800 mb-6">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>
          <p className="text-gray-300">
            I'm a passionate software developer specializing in AI/ML, building intelligent, scalable solutions.
          </p>
        </CardContent>
      </Card>
      
      {/* Skills Section */}
      <Card className="w-full max-w-2xl bg-gray-800 mb-6">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <ul className="text-gray-300 grid grid-cols-2 gap-2">
            <li>Python</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>TensorFlow</li>
            <li>Node.js</li>
            <li>Machine Learning</li>
          </ul>
        </CardContent>
      </Card>
      
      {/* Projects Section */}
      <Card className="w-full max-w-2xl bg-gray-800 mb-6">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3">Projects</h2>
          <p className="text-gray-300">Check out my latest work on GitHub!</p>
        </CardContent>
      </Card>
      
      {/* Contact Section */}
      <Card className="w-full max-w-2xl bg-gray-800">
        <CardContent className="p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-3">Let's Connect</h2>
          <div className="flex gap-4">
            <Button variant="outline">
              <Github className="mr-2" /> GitHub
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2" /> LinkedIn
            </Button>
            <Button variant="outline">
              <Mail className="mr-2" /> Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
