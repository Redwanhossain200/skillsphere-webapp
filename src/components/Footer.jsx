import Link from 'next/link';
import { LuBookOpen } from 'react-icons/lu';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-auto border-t border-base-300">
      <div className="footer max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-10 gap-8 place-items-center sm:place-items-start text-center sm:text-left">
        <aside className="lg:col-span-2">
          <div className="flex flex-col items-center sm:items-start gap-2 mb-2 w-full">
            <Link href="/" className="flex items-center justify-center sm:justify-start gap-2 group transition-all">
              <LuBookOpen className="text-primary w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                SkillSphere
              </span>
            </Link>
            <span className="text-sm text-base-content/50 mt-1 italic">
              #SkillSphere #LearnWithSkillSphere
            </span>
          </div>
          <p className="max-w-xs mx-auto sm:mx-0 leading-relaxed text-base-content/70">
            Providing reliable tech courses since 2026.
            <br />
            Empowering your learning journey.
          </p>
        </aside>

        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title opacity-100 text-primary">Services</h6>
          <Link href="/courses" className="link link-hover hover:text-primary transition-colors duration-300">
            Courses
          </Link>
          <Link href="#" className="link link-hover hover:text-primary transition-colors duration-300">
            Mentorship
          </Link>
          <Link href="#" className="link link-hover hover:text-primary transition-colors duration-300">
            Careers
          </Link>
        </nav>

        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title opacity-100 text-primary">Company</h6>
          <Link href="#" className="link link-hover hover:text-primary transition-colors duration-300">
            About us
          </Link>
          <Link href="#" className="link link-hover hover:text-primary transition-colors duration-300">
            Contact
          </Link>
          <Link href="#" className="link link-hover hover:text-primary transition-colors duration-300">
            Jobs
          </Link>
        </nav>

        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title opacity-100 text-primary">Legal</h6>
          <Link href="#" className="link link-hover hover:text-primary transition-colors duration-300">
            Terms of use
          </Link>
          <Link href="#" className="link link-hover hover:text-primary transition-colors duration-300">
            Privacy policy
          </Link>
          <Link href="#" className="link link-hover hover:text-primary transition-colors duration-300">
            Cookie policy
          </Link>
        </nav>

        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title opacity-100 text-primary">Social</h6>
          <div className="flex gap-5 justify-center sm:justify-start mt-1">
            <Link
              href="https://www.facebook.com/redwan.hossain.281607"
              target="_blank"
              className="hover:text-primary hover:-translate-y-1.5 transition-all duration-300"
            >
              <FaFacebookF size={26} />
            </Link>
            <Link
              href="https://github.com/Redwanhossain200"
              target="_blank"
              className="hover:text-primary hover:-translate-y-1.5 transition-all duration-300"
            >
              <FaGithub size={26} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/redwan-hossain-dev/"
              target="_blank"
              className="hover:text-primary hover:-translate-y-1.5 transition-all duration-300"
            >
              <FaLinkedin size={26} />
            </Link>
          </div>
        </nav>
      </div>

      <div className="py-6 border-t border-base-300 text-sm text-center text-base-content/50 bg-base-300/30">
        <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-primary/70">SkillSphere</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}