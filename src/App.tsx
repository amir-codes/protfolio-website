import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(var(--accent))]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[rgb(var(--accent2))]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s", animationDuration: "10s" }}
        />
      </div>

      {/* Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
