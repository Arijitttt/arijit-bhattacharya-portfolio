import { motion } from "framer-motion";
import { Trophy, Award, Medal, Code, Target, Users } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "SPYDER Event Coordinator",
      description: "Coordinated SPYDER, the Web Development event at UEM Kolkata's Ureckon, overseeing registration of 100+ participants",
      category: "Leadership"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "100+ LeetCode Problems",
      description: "Solved over 100 coding challenges with focus on algorithms and data structures",
      category: "Competitive Programming"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Full-Stack Projects",
      description: "Built multiple end-to-end web applications using modern technologies",
      category: "Development"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "API Integration Expert",
      description: "Successfully integrated Google Maps API, Gemini API, and various REST APIs",
      category: "Technical Skills"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Database Management",
      description: "Proficient in MongoDB, MySQL, PostgreSQL, and NeonDB implementations",
      category: "Backend"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimized applications for better performance and user experience",
      category: "Development"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Achievements
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Key milestones and accomplishments in my development journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs text-purple-300 uppercase tracking-wider mb-2">
                    {achievement.category}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
