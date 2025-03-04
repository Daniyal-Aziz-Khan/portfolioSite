import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Daniyal Aziz</strong>. I'm a Full-Stack
              .NET Developer with over <strong>3 years</strong> of experience
              building scalable web applications. My expertise lies in .NET
              Core, React.js, Clean Architecture, and Repository Design
              Patterns.
              <br />
              <br />
              My journey in software development has been driven by a passion
              for problem-solving, writing clean code, and building efficient
              applications. I have strong experience working with - C#, .NET
              Core, ASP.NET, and React.js, ensuring robust backend solutions and
              modern, responsive front-end applications.
              <br />
              <br />
              I specialize in: - Designing secure, scalable, and
              high-performance web applications. Building RESTful APIs with .NET
              Core and integrating third-party APIs. Database design &
              optimization using SQL Server & MongoDB. Cloud deployments on
              Azure, leveraging its scalability and reliability. Agile
              methodologies and best development practices with Git, Jira,
              Asana.
              <br />
              <br />
              Throughout my career, I have successfully developed and maintained
              complex applications, collaborated with cross-functional teams,
              and optimized application performance by improving code efficiency
              and database queries. I take pride in writing maintainable,
              scalable, and well-tested code using xUnit Testing.
              <br />
              <br />
              Working in collaborative environments has enhanced my skills in
              teamwork, problem-solving, and effective communication. I am
              always eager to explore new technologies and innovative solutions
              to drive efficiency in software development.
              <div className="tagline2">Technologies I work with:</div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
