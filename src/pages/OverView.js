import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypingAnimation from './TypingAnimation';
import Button from 'react-bootstrap/esm/Button';
import "./Overview.css"
import githubImage from '../Image/github.png'
import linkedinImage from '../Image/linkedin.png';
import Experience from './Experience';
// import { FaLinkedin, FaGithub } from "react-icons/fa";
import AshuImage from '../Image/Ashutosh.jpg'
import HomeRight from '../Image/home-right.webp'
import { MdCastForEducation } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import { useState } from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';
import ashuImage from '../Image/Ashutosh.jpg'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
const OverView = ({ startMonths = 22, startYear = 2024, startMonth = 8 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [experience, setExperience] = useState('');

  useEffect(() => {
    const calculateExperience = () => {
      const currentDate = new Date();
      console.log("----------currentDate----------", currentDate)
      const currentYear = currentDate.getFullYear();
      console.log("----------currentYear----------", currentYear)
      const currentMonth = currentDate.getMonth() + 1;
      console.log("----------currentMonth----------", currentMonth)

      // Calculate the difference in years and months
      const yearDifference = currentYear - startYear;
      const monthDifference = currentMonth - startMonth;

      // Calculate total months of experience
      const totalMonths = startMonths + (yearDifference * 12) + monthDifference;

      console.log("----------totalMonths----------", totalMonths)

      // Calculate years and remaining months
      const years = Math.floor(totalMonths / 12);
      console.log("----------years----------", years)
      const months = totalMonths % 12;
      console.log("----------months----------", months)

      // Return formatted experience
      if (months === 0) {
        return `${years}.0`;
      } else {
        return `${years}.${months}`;
      }
    };

    setExperience(calculateExperience());
  }, [startMonths, startYear, startMonth]);

  const toogleButton = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Container className='overviewContainer' style={{ marginTop: "40px", marginLeft: "auto" }}>

      <section id="overview">
        <Row>
          <Col>
            <h4 style={{ fontFamily: "serif" }}><b>Hi, I am </b></h4>
            <h1 style={{ fontFamily: "serif" }}>Ashutosh Pattanayak</h1>
            <TypingAnimation />
            <p>As a software engineer with {experience} years of experience, AI and Generative AI specialist with proven expertise in building intelligent chat and voice bots using Python, Node.js, JavaScript, MySQL, and MongoDB. Skilled in deploying enterprise-grade solutions leveraging AWS services including Lex, Lambda, EC2, S3, DynamoDB, CloudFront, Connect, Kinesis, and Bedrock.
              <br />
              <br />
              Experienced in developing GenAI-powered RAG-based Document AI bots using AWS Textract and ChromaDB for real-time, context-aware document interaction. Also built Text-to-SQL bots that convert natural language to SQL queries with dynamic graph-based data visualizations. Focused on driving automation, streamlining sales processes, and enhancing customer engagement through Salesforce-integrated AI solutions for Telecom, HR, and Pharma industries.</p>
            <Button className='hirebutton' as={Link} smooth to="/#contact" >Contact Me</Button>
            <a href='https://drive.google.com/file/d/1Gtp8HqZ8SoNbvHPBgYLx3Gh0obP-hIFw/view?usp=sharing' target='_blank' rel="noopener noreferrer" download="AshutoshPattanayakResume.pdf">
              <Button className='cv' style={{ backgroundColor: " #0f9edb" }}  >view CV</Button></a>

            <span className='image'>
              <Link to="https://github.com/Ashutosh8847" target='_blank'>
                <div className='icon-wrapper'>
                  <FaGithub />
                </div>
              </Link>
              <Link to="https://www.linkedin.com/in/ashutosh-pattanayak-4b06a3214" target='_blank'>
                <div className='icon-wrapper'>
                  {/* <img src={linkedinImage} alt="linkedin" /> */}
                  <FaLinkedin />
                </div>
              </Link>
              <Link to="https://twitter.com/Ashutosh8847" target='_blank'>
                <div className='icon-wrapper'>
                  <FaTwitter />
                </div>
              </Link>
            </span>


          </Col>
          <Col>
            <div className='imageContainer' style={{ marginTop: "10px", marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <img className='image' style={{ maxHeight: "400px" }} src={ashuImage} alt="Ashu"></img>
              {/* <img style={{maxHeight:"400px", borderRadius:"55%", marginTop:"-44px"}} src={AshuImage} alt="Ashu"></img> */}
            </div>
          </Col>
        </Row>


        {/* <Row>
          <Col className="custom-col" style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "serif", textAlign: "center" }}><span style={{ marginRight: "10px", fontSize: "32px" }}><FcBusinessman /></span><b>About Me<hr /></b></h2>
            <ul>
              <li>
                I am a dedicated software engineer and chatbot developer with {experience} years of experience specializing in AI conversational chatbots using various OpenAI and AWS technologies. Currently, I serve as an Associate Software Engineer and Chatbot Developer at smartbots.ai, a subsidiary of Palni India Pvt Ltd in Hyderabad, Telangana. In this role, I have successfully developed and integrated sophisticated chat and voice bots using advanced AI solutions and AWS tools such as Lex, Lambda, Connect, DynamoDB, and S3. My work includes creating WhatsApp bots for diverse industries like Travel & Hospitality, Insurance, and Telecom, significantly enhancing customer support and operational efficiency.

              </li>

              {
                !isExpanded && (
                  <Button style={{ marginTop: "10px" }} variant="warning" onClick={toogleButton}>Read More</Button>
                )}
              {
                isExpanded && (
                  <>
                    <li>
                      I have completed notable projects utilizing cutting-edge technologies to develop functional and effective chatbots. Currently, I am involved in the development of a project for a pharmaceuticals company, where I focus on streamlining sales operations and enhancing customer engagement through AI-driven solutions integrated with Salesforce.
                    </li>

                    <li>
                      In addition to my technical expertise, I am skilled in full-stack development, manual application testing, and generative AI technologies. I am fluent in English, Hindi, and Odia, and I have a range of interests outside of work, including sports, entertainment, cooking, and farming.
                    </li>
                    <li>
                      I am committed to pushing the boundaries of technology and continuously seek opportunities to apply my skills and knowledge to new and exciting challenges. I am eager to contribute to innovative projects and make a meaningful impact in the IT industry.
                    </li>
                    <Button style={{ marginTop: "10px" }} onClick={toogleButton}>Read Less</Button>

                  </>
                )
              }
            </ul>
          </Col>
          <Col className="custom-col" style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "serif", textAlign: "center" }}><span style={{ marginRight: "10px", fontSize: "32px" }}><MdCastForEducation /></span><b>Educational Qualifications<hr /></b></h2>
            <ul>
              <li>
                <b>B.Tech in Mechanical Engineering</b><br />
                <b>Institution:</b> Government College of Engineering Kalahandi<br />
                <b>University:</b> BPUT University<br />
                <b>Year of Passing:</b> 2022<br />
                <b>Aggregate:</b> 80.9%

              </li>
              <li style={{ marginTop: "15px" }}>
                <b>+2 Science (12th)</b><br />
                <b>Institution:</b> Alfa Best College of Science & Tech<br />
                <b>Board:</b> CHSE Board<br />
                <b>Year of Passing:</b> 2017<br />
                <b>Aggregate:</b> 66.33%
              </li>
              <li style={{ marginTop: "15px" }}>
                <b>10th</b><br />
                <b>Institution:</b> Ishaneswar High School Podana, Narasinghpur<br />
                <b>Board:</b> BSE Board<br />
                <b>Year of Passing:</b> 2015<br />
                <b>Aggregate:</b> 76%
              </li>
            </ul>
          </Col>
        </Row> */}
        <div className="custom-section" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "serif" }}>
            <span style={{ marginRight: "10px", fontSize: "32px" }}><FcBusinessman /></span>
            <b>About Me<hr /></b>
          </h2>
          <ul>
            <li>
              <p>
                I am a dedicated software engineer and chatbot developer with {experience} years of experience, specializing in designing and deploying conversational AI solutions using Python, Node.js, and AWS technologies. I currently work as an Associate Software Engineer and Chatbot Developer at smartbots.ai, a subsidiary of Palni India Pvt Ltd in Hyderabad, Telangana. My expertise includes developing multilingual chat and voice bots using AWS Lex, Lambda, and OpenAI, with a strong focus on enhancing user experiences across sectors like Travel, Hospitality, Insurance, and Telecom.
              </p>
            </li>

            {
              !isExpanded && (
                <Button style={{ marginTop: "10px" }} variant="warning" onClick={toogleButton}>Read More</Button>
              )
            }

            {
              isExpanded && (
                <>
                  <li style={{ paddingLeft: "0px" }}>
                    <p>
                      I have successfully implemented LLMs, RAG, and Agentic RAG to enhance chatbot functionalities, built a Document AI bot using AWS Textract and ChromaDB for precise file retrieval, and developed a Text-to-SQL chatbot to visualize query results using Streamlit and Chart.js.
                    </p>
                  </li>

                  <li>
                    <p>
                      My skill set includes full-stack development with Node.js, React.js, Flask, and MySQL, as well as the integration of AWS tools such as EC2, S3, RDS, Redshift, and Bedrock for cloud-native, scalable chatbot applications. I am also well-versed in testing, Power BI, and various generative AI tools.
                    </p>
                  </li>

                  <li>
                    <p>
                      Outside of work, I enjoy bike riding, technology exploration, working on side projects, and constantly learning new frameworks. I’m passionate about pushing boundaries in AI and contributing to impactful innovations in the IT industry.
                    </p>
                  </li>

                  <Button style={{ marginTop: "10px" }} onClick={toogleButton}>Read Less</Button>
                </>
              )
            }
          </ul>

        </div>

        <div className="custom-section" style={{ textAlign: "center", marginTop: "40px" }}>
          <h2 style={{ fontFamily: "serif" }}>
            <span style={{ marginRight: "10px", fontSize: "32px" }}><MdCastForEducation /></span>
            <b>Educational Qualifications<hr /></b>
          </h2>
          <ul>
            <li>
              <b>B.Tech in Mechanical Engineering</b><br />
              <b>Institution:</b> Government College of Engineering Kalahandi<br />
              <b>University:</b> BPUT University<br />
              <b>Year of Passing:</b> 2022<br />
              <b>Aggregate:</b> 80.9%
            </li>

            <li style={{ marginTop: "15px" }}>
              <b>+2 Science (12th)</b><br />
              <b>Institution:</b> Alfa Best College of Science & Tech<br />
              <b>Board:</b> CHSE Board<br />
              <b>Year of Passing:</b> 2017<br />
              <b>Aggregate:</b> 66.33%
            </li>

            <li style={{ marginTop: "15px" }}>
              <b>10th</b><br />
              <b>Institution:</b> Ishaneswar High School Podana, Narasinghpur<br />
              <b>Board:</b> BSE Board<br />
              <b>Year of Passing:</b> 2015<br />
              <b>Aggregate:</b> 76%
            </li>
          </ul>
        </div>

      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

    </Container>
  )
}

export default OverView
