import React from 'react';
import { FaCode, FaUsers } from 'react-icons/fa';
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiHtml5, SiCss3, SiMysql } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="py-5 bg-light" id="skills">
      <div className="container">
        <h2 className="text-center mb-4">Habilidades</h2>
        
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center mb-3">Habilidades Técnicas</h3>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <div className="text-center">
                <SiPython size={50} />
                <p>Python</p>
              </div>
              <div className="text-center">
                <SiJavascript size={50} />
                <p>JavaScript</p>
              </div>
              <div className="text-center">
                <SiCplusplus size={50} />
                <p>C++</p>
              </div>
              <div className="text-center">
                <SiReact size={50} />
                <p>React</p>
              </div>
              <div className="text-center">
                <SiHtml5 size={50} />
                <p>HTML</p>
              </div>
              <div className="text-center">
                <SiCss3 size={50} />
                <p>CSS</p>
              </div>
              <div className="text-center">
                <SiMysql size={50} />
                <p>MySQL</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="text-center mb-3">Habilidades Blandas</h3>
            <ul>
              <li><FaUsers /> Comunicación efectiva</li>
              <li><FaUsers /> Trabajo en equipo</li>
              <li><FaUsers /> Resolución de problemas</li>
              <li><FaUsers /> Liderazgo</li>
              <li><FaUsers /> Gestión del tiempo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
