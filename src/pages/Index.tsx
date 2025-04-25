import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TypeWriter from "@/components/TypeWriter";
import ProgressBar from "@/components/ProgressBar";
import { Mail, FileText } from "lucide-react";

const Index = () => {
  const roles = [
    "UI/UX Designer",
    "Developer"
  ];

  const handleEmailClick = () => {
    const emailAddress = "krishna98das@gmail.com";
    const subject = "Hello Krishnadas";
    const body = "Hi Krishnadas,\n\nI came across your portfolio and would love to connect with you.\n\nBest regards,";
    
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Hey, I'm Krishnadas Kadambottupalliyalil
          </h1>
          <h2 className="text-xl md:text-2xl text-text-light mb-8">
            I'm a <TypeWriter words={roles} />
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary-light px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-text mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Designing Is My Passion</h3>
            <p className="text-text-light mb-8">
              Passionate Front-End Developer with 1+ years of experience in building modern, responsive web applications. 
              Skilled in UI/UX design, performance optimization, and front-end frameworks like React.js. 
              Adept at collaborating with teams to deliver high-quality digital experiences. 
              Seeking opportunities to contribute technical expertise and creativity to innovative web development projects.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <FileText className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-text mb-4">My Skills</h2>
          <p className="text-center text-text-light mb-12 max-w-2xl mx-auto">
            Skills Reflects Our Knowledge
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <ProgressBar skill="HTML" percentage={95} />
              <ProgressBar skill="CSS" percentage={90} />
              <ProgressBar skill="JavaScript" percentage={60} />
              <ProgressBar skill="PHP" percentage={20} />
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-secondary-light rounded-lg">
                <h3 className="text-4xl font-bold text-primary mb-2">1+</h3>
                <p className="text-text">Years of Experience</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-text">Master's in Data Analytics</h4>
                    <p className="text-sm text-text-light">Dublin Business School (2023 – 2024)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Bachelor of Engineering</h4>
                    <p className="text-sm text-text-light">Dhanalakshmi Srinivasan College of Engineering (2017 - 2021)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text">Certifications</h3>
                <div>
                  <h4 className="font-medium text-text">UI/UX Design Certification</h4>
                  <p className="text-sm text-text-light">Futura Labs, Calicut</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary-light px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-text mb-4">Contact Me</h2>
          <h3 className="text-2xl font-semibold text-primary mb-4">Let's Create Something Amazing Together</h3>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to drop me an email. 
            I'll try my best to get back to you!
          </p>
          <Button onClick={handleEmailClick} className="bg-primary hover:bg-primary-dark">
            <Mail className="mr-2 h-4 w-4" /> Email Me
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-text-light text-sm">
        Created By KD | © 2025 All Rights Reserved
      </footer>
    </div>
  );
};

export default Index;
