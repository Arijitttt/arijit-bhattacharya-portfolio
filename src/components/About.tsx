
import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code with modern best practices."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Problem Solving",
      description: "Applying competitive programming techniques and logical reasoning to tackle complex challenges in innovative ways."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fast & Reliable Delivery",
      description: "Building and deploying robust full-stack applications on time, with a focus on functionality, performance, and user experience."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
           I'm a dedicated full-stack web developer and a passionate competitive programmer with a strong grasp of data structures and algorithms. With over 100+ problems solved on LeetCode and a solid command of Python, I bring efficient problem-solving skills into real-world web applications. My expertise spans both frontend and backend technologies, ensuring scalable, high-performance solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
