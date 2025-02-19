import {
    IconBrandJavascript,
    IconBrandTypescript,
    IconBrandPython,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandReact,
    IconBrandDjango,
    IconBrandGit,
    IconBrandVscode,
    IconBrandFigma,
    IconBrandTailwind,
    IconBrandBootstrap,
    IconBrandGithub,
    IconBrandNextjs, // Import the correct Next.js icon
    IconBrandPrisma,
    IconLetterG,
    IconBrandMysql, // Import the correct Postman icon
  } from "@tabler/icons-react";
  import { motion } from "framer-motion";
  
  // Skill Card Component
  interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
  }
  
  const SkillCard = ({ icon, title, description, index }: SkillCardProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15,
          ease: [0.21, 0.68, 0.66, 0.99],
        }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        className="bg-black duration-300 hover:bg-gray-800 border-2 border-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center"
      >
        <div className="text-white/80 mb-4">{icon}</div>
        <h3 className="text-xl text-white font-semibold mb-3">{title}</h3>
        <p className="text-white/60 text-sm text-center">{description}</p>
      </motion.div>
    );
  };
  
  // Language Card Component
  interface LanguageCardProps {
    icon: React.ReactNode;
    name: string;
    index: number;
  }
  
  const LanguageCard = ({ icon, name, index }: LanguageCardProps) => {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.01,
          delay: index * 0.01,
        }}
        className="cursor-pointer flex flex-col items-center text-center p-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 border border-white/10 shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        <div className="text-white text-3xl mb-2">{icon}</div>
        <span className="text-white/80 text-sm">{name}</span>
      </motion.div>
    );
  };
  
  // Main SkillsPage Component
  const SkillsPage = () => {
    const languages = [
      { icon: <IconBrandJavascript className="w-10 h-10" />, name: "JavaScript" },
      { icon: <IconBrandTypescript className="w-10 h-10" />, name: "TypeScript" },
      { icon: <IconBrandPython className="w-10 h-10" />, name: "Python" },
      { icon: <IconBrandHtml5 className="w-10 h-10" />, name: "HTML" },
      { icon: <IconBrandCss3 className="w-10 h-10" />, name: "CSS" },
      { icon: <IconBrandMysql className="w-10 h-10" />, name: "MySQL" },
    ];
  
    const frameworks = [
      { icon: <IconBrandReact className="w-10 h-10" />, name: "React" },
      { icon: <IconBrandDjango className="w-10 h-10" />, name: "Django" },
      { icon: <IconBrandNextjs className="w-10 h-10" />, name: "Next.js" }, // Replaced React with Next.js
      { icon: <IconBrandTailwind className="w-10 h-10" />, name: "Tailwind CSS" },
      { icon: <IconBrandBootstrap className="w-10 h-10" />, name: "Bootstrap" },
      { icon: <IconLetterG className="w-10 h-10" />, name: "Gsap" },
    ];
  
    const tools = [
      { icon: <IconBrandGit className="w-10 h-10" />, name: "Git" },
      { icon: <IconBrandGithub className="w-10 h-10" />, name: "GitHub" },
      { icon: <IconBrandVscode className="w-10 h-10" />, name: "VsCode" },
      { icon: <IconBrandFigma className="w-10 h-10" />, name: "Figma" },
      { icon: <IconBrandPrisma className="w-10 h-10" />, name: "Postman" },
    ];
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4"
      >
        <div id="Skills" className="max-w-7xl w-full text-center py-32">
          <h1 className="text-5xl font-bold mb-12 tracking-tighter">My Skills & Tools</h1>
  
          {/* Languages Section (Now First) */}
          <h2 className="text-3xl font-semibold mb-8">Languages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6 mb-16">
            {languages.map((language, index) => (
              <LanguageCard
                key={language.name}
                icon={language.icon}
                name={language.name}
                index={index}
              />
            ))}
          </div>
  
          {/* Frameworks & Libraries Section */}
          <h2 className="text-3xl font-semibold mb-8">Frameworks & Libraries</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6 mb-16">
            {frameworks.map((framework, index) => (
              <SkillCard
                key={framework.name}
                icon={framework.icon}
                title={framework.name}
                description={`Experience with ${framework.name} for developing modern applications.`}
                index={index}
              />
            ))}
          </div>
  
          {/* Tools Section */}
          <h2 className="text-3xl font-semibold mb-8">Tools & Platforms</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
            {tools.map((tool, index) => (
              <SkillCard
                key={tool.name}
                icon={tool.icon}
                title={tool.name}
                description={`Experienced in using ${tool.name} for efficient development and deployment.`}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default SkillsPage;
  