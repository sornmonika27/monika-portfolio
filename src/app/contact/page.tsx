import { FaPaperPlane, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="text-white mb-[100px]">
      <div className="flex items-center justify-center gap-2">
        {/* <div className="h-[200px] w-[30%]">
          <h1 className="text-3xl font-bold text-white text-center">
            SORN MONIKA
          </h1>
          <div className="flex justify-center items-center mt-5 gap-5">
            <FaPaperPlane size={30} color="white" />
            <FaEnvelope size={30} color="white" />
            <FaPhone size={30} color="white" />
          </div>
        </div> */}

        <div className="h-[200px] w-[30%] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text">
              A bit about me!
            </h1>

            <p className="text-lg text-gray-400 mt-4 w-[400px]">
              I am passionate about coding, eager to learn new technologies, and
              dedicated to building user-friendly and efficient applications. I
              believe in continuous learning and collaboration to create
              impactful digital solutions.
            </p>
          </div>
        </div>

        <div className="h-[200px] w-[30%]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text ">
              Web & Mobile App Developer
            </h2>

            <nav className="mt-4">
              <ul className="flex justify-center space-x-6 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-purple-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-purple-400">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-purple-400">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-purple-400">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex justify-center items-center mt-5 gap-10 text-gray-400">
              <a href="https://t.me/sornmonika">
                <FaPaperPlane size={25} color="" />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <FaEnvelope size={25} color="" />
              </a>
              <a href="tel:+885223207">
                <FaPhone size={25} color="" />
              </a>
            </div>

            {/* <div className="mt-6 text-gray-400">
              <p>© 2025 Monika. All rights reserved.</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[100px]">
        <div className="w-[70%] border-b-4 border-transparent rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:100%_4px] bg-bottom"></div>
      </div>
    </footer>
  );
};

export default Contact;
