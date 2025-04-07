
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-teal-500 font-medium mb-2">About Me</p>
          <h2 className="heading-lg text-navy-800">Know Me More</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Designer working on a project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-teal-500/10 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="heading-md text-navy-800">
              I'm <span className="text-teal-500">Jane Doe</span>, a Creative Designer
            </h3>
            <p className="text-gray-600">
              I help clients create visually appealing and functional digital experiences. With over 8 years of experience in the design industry, I specialize in creating user-centered designs that solve business problems and enhance user engagement.
            </p>
            <p className="text-gray-600">
              My approach combines aesthetic sensibility with technical knowledge, ensuring that my designs are not only beautiful but also practical and implementable. I believe in continuous learning and staying updated with the latest design trends and technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="p-3 bg-teal-500/10 rounded-full mb-4">
                  <Briefcase size={24} className="text-teal-500" />
                </div>
                <h4 className="font-semibold text-navy-800">Experience</h4>
                <p className="text-gray-600 text-center">8+ Years</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="p-3 bg-teal-500/10 rounded-full mb-4">
                  <Award size={24} className="text-teal-500" />
                </div>
                <h4 className="font-semibold text-navy-800">Completed</h4>
                <p className="text-gray-600 text-center">200+ Projects</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="p-3 bg-teal-500/10 rounded-full mb-4">
                  <GraduationCap size={24} className="text-teal-500" />
                </div>
                <h4 className="font-semibold text-navy-800">Education</h4>
                <p className="text-gray-600 text-center">MFA Design</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-block">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
