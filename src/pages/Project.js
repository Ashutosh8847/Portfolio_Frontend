import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './project.css'
import { useState } from 'react';
import chartBotImage from '../Image/chatbot1.png'
import PortfolioImage from '../Image/portfolio.png'
import BookImage from '../Image/book.png'
import NoteImage from '../Image/note.png'
import TextImage from '../Image/text.png'
import newsImage from '../Image/news.png'
import EcommerceImage from '../Image/ecommerce.png'
import VoiceGpt from '../Image/voice.png'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRProject } from "react-icons/fa";
import { VscProject } from "react-icons/vsc";
import { AiFillProject } from "react-icons/ai";


const Project = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [chatbot, setChatbot] = useState(false);
    const [portfolio, setPortfolio] = useState(false);
    const [book, setBook] = useState(false);
    const [note, setNote] = useState(false);
    const [text, setText] = useState(false);
    const [news, setNews] = useState(false);
    const [ecommerce, setEcommerce] = useState(false);
    const [voice, setVoice] = useState(false);

    const toogleButton = async () => {
        setIsExpanded(!isExpanded)
    }

    const handlechatbot = async () => {
        setChatbot(!chatbot)
    }
    const handdlePortfolio = async () => {
        setPortfolio(!portfolio)
    }

    const handlebook = async () => {
        setBook(!book)
    }
    const handlenote = async () => {
        setNote(!note)
    }
    const handletext = async () => {
        setText(!text)
    }
    const handlenews = async () => {
        setNews(!news)
    }
    const handleecommerce = async () => {
        setEcommerce(!ecommerce)
    }
    const handlevoice = async () => {
        setVoice(!voice)
    }

    return (
        <div className='cardContainer'>
            <h2 style={{ textAlign: "center", marginTop: "30px" }} className='cardTitle'><span><VscProject style={{ marginRight: "10px" }} /></span><b>Projects:<hr /></b></h2>
            <Row className='justify-content-center'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className='mb-4'>
                        <Card.Img variant="top" src={TextImage} alt='Chatbot image' className='cardImage' />
                        <Card.Body>
                            <Card.Title className='cardTitle'>Text to SQL AI Application</Card.Title>
                            <Card.Text className='cardText'>
                                The Text to SQL AI Application leverages advanced NLP and LLMs to convert natural language queries
                                {text ? (
                                    <>
                                        <ul>
                                            into optimized SQL queries.
                                            <li>
                                                Converts human-readable questions into accurate SQL statements using Bedrock-integrated models like Claude and OpenAI.
                                            </li>
                                            <li>
                                                Retrieves schema metadata dynamically from Snowflake and guides query generation based on table relationships.
                                            </li>
                                            <li>
                                                Includes a fallback mechanism with prompt engineering for failed query generation attempts, ensuring robustness.
                                            </li>
                                            <li>
                                                Designed to support enterprise-grade SQL generation workflows with interactive error handling and seamless LLM communication.
                                            </li>
                                        </ul>
                                    </>
                                ) : null}
                            </Card.Text>
                            <Button className='cardbtn' variant="primary" onClick={handletext}>
                                {text ? 'Show Less' : 'Read More'}
                            </Button>
                            <Link to={`https://github.com/Ashutosh8847`} target='_blank'>
                                <FaGithub className='icon' style={{ marginLeft: "20px" }} />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className='mb-4'>
                        <Card.Img variant="top" src={VoiceGpt} alt='Chatbot image' className='cardImage' />
                        <Card.Body>
                            <Card.Title className='cardTitle'>RAG Chatbot</Card.Title>
                            <Card.Text className='cardText'>
                                Developed a Retrieval-Augmented Generation (RAG) Document AI chatbot integrating AWS Bedrock and Pinecone

                                {voice ? (
                                    <>
                                        <ul>
                                            for scalable vector search and contextual document Q&A.
                                            <li>
                                                Leverages OpenAI's or Claude's language models to provide accurate and contextual answers from uploaded documents.
                                            </li>
                                            <li>
                                                Integrated with Pinecone for scalable vector search and fast semantic retrieval.
                                            </li>
                                            <li>
                                                Enables secure PDF upload, automatic chunking, and embedding for efficient document processing.
                                            </li>
                                            <li>
                                                Designed to handle multiple files with dynamic document-based question answering.
                                            </li>
                                        </ul></>

                                ) : null}
                            </Card.Text>

                            <Button className='cardbtn' variant="primary" onClick={handlevoice}>
                                {voice ? 'Show Less' : 'Read More'}
                            </Button>

                            <Link to="https://github.com/Ashutosh8847" target="_blank">
                                <FaGithub className='icon' style={{ marginLeft: "20px" }} />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className='mb-4'>
                        <Card.Img variant="top" src={chartBotImage} alt='Chatbot image' className='cardImage' />
                        <Card.Body>
                            <Card.Title className='cardTitle'>ChatBot Development</Card.Title>
                            <Card.Text className='cardText'>
                                Chatbot development involves creating automated conversational agents using AI and ML, interacting with
                                {chatbot ? (
                                    <>
                                        users through text or voice and integrating with several platforms like salesforce, AWS etc..
                                        <ul>
                                            <li>Key technologies include Python, Node.js, Flask, React.js, MySQL, MongoDB, and AWS (Lex, Lambda, S3).</li>
                                            <li>Projects like developing customer service bots for  Telecom industries, HR bots for customer service, and sales representative bots for a Pharmaceuticals company .</li>
                                            <li>The process involves requirement analysis, design, coding, testing, and monitoring with Salesforce integration.</li>
                                            <li>Chatbots enhance sectors like customer service, sales, and healthcare.</li>
                                        </ul>
                                        {/* <div className='icon'>
                                        <Link  to={`https://github.com/Ashutosh8847`} target='_blank'> <FaGithub  className='icon' style={{ marginLeft: "20px" }}/></Link>
                                        </div> */}

                                    </>
                                ) : null}
                            </Card.Text>
                            <Button className='cardbtn' variant="primary" onClick={handlechatbot}>
                                {chatbot ? 'Show Less' : 'Read More'}
                            </Button>
                            <Link to={`https://github.com/Ashutosh8847`} target='_blank'> <FaGithub className='icon' style={{ marginLeft: "20px" }} /></Link>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className='mb-4'>
                        <Card.Img variant="top" src={PortfolioImage} alt='Chatbot image' className='cardImage' />
                        <Card.Body>
                            <Card.Title className='cardTitle'>Personal Portfolio React js</Card.Title>
                            <Card.Text className='cardText'>
                                My personal portfolio, powered by Node.js and Express.js on the backend, and crafted using React.js
                                {portfolio ? (
                                    <>
                                        on the frontend, showcases my projects and skills effectively.
                                        <ul>
                                            <li>Leveraging modular React components, it ensures a seamless user experience with interactive design elements and responsive layouts.</li>
                                            <li>
                                                Integrated with backend services, it supports real-time data updates and dynamic content rendering for optimal performance.
                                            </li>
                                            <li>
                                                Built for scalability and performance, it reflects my commitment to delivering polished web applications that highlight my technical expertise.
                                            </li>
                                            <li>
                                                Explore my portfolio to discover more about my projects, skills, and experiences in software development.
                                            </li>
                                        </ul>
                                    </>
                                ) : null}
                            </Card.Text>
                            <Button className='cardbtn' variant="primary" onClick={handdlePortfolio}>
                                {portfolio ? 'Show Less' : 'Read More'}
                            </Button>
                            <Link to={`https://github.com/Ashutosh8847`} target='_blank'> <FaGithub className='icon' style={{ marginLeft: "20px" }} /></Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {!isExpanded && (
                <div className='text-center'>
                    <Button className='cardButton' variant='warning' onClick={toogleButton}>Show More</Button>
                </div>
            )}
            {isExpanded && (
                <>
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Card className='mb-4'>
                                <Card.Img variant="top" src={BookImage} alt='Chatbot image' className='cardImage' />
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Book Management System</Card.Title>
                                    <Card.Text className='cardText'>
                                        This Book Management System, built with Node.js and Express.js on the backend, and React.js on the frontend,
                                        {book ? (
                                            <>
                                                enables seamless management of your book collection.
                                                <ul>
                                                    <li>Featuring functionalities to add, read, edit, and delete books, it ensures effortless organization and accessibility of your library.</li>
                                                    <li>
                                                        Built with a modern and responsive design, it offers a smooth and intuitive user experience.
                                                    </li>
                                                    <li>
                                                        Integrated with backend services for real-time updates, users can share their book collections with others for reading and exploration.
                                                    </li>
                                                    <li>
                                                        Utilizing modular React components, it offers a user-friendly interface and responsive design for intuitive navigation and interaction.
                                                    </li>
                                                    <li>
                                                        Explore this system to manage your books effectively and share your literary interests with the community effortlessly.
                                                    </li>
                                                </ul>
                                            </>
                                        ) : null}
                                    </Card.Text>
                                    <Button className='cardbtn' variant="primary" onClick={handlebook}>
                                        {book ? 'Show Less' : 'Read More'}
                                    </Button>
                                    <Link to={`https://github.com/Ashutosh8847`} target='_blank'> <FaGithub className='icon' style={{ marginLeft: "20px" }} /></Link>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Card className='mb-4'>
                                <Card.Img variant="top" src={newsImage} alt='Chatbot image' className='cardImage' />
                                <Card.Body>
                                    <Card.Title className='cardTitle'>News Application</Card.Title>
                                    <Card.Text className='cardText'>
                                        The News Application leverages React.js, Context API, Axios, and other frontend technologies to deliver an
                                        {news ? (
                                            <>
                                                interactive and dynamic news   browsing experience.
                                                <ul>
                                                    <li>
                                                        Users can access the latest news by fetching data from news APIs, ensuring real-time updates and relevance.
                                                    </li>
                                                    <li>
                                                        Featuring an intuitive user interface with interactive pages, users can browse news articles efficiently and seamlessly.
                                                    </li>
                                                    <li>
                                                        Context API manages state effectively across components, optimizing performance and enhancing user interaction.
                                                    </li>
                                                    <li>
                                                        Explore the News Application for a streamlined news browsing experience, combining modern UI design with real-time data updates for enhanced user engagement.
                                                    </li>
                                                </ul>
                                            </>
                                        ) : null}
                                    </Card.Text>
                                    <Button className='cardbtn' variant="primary" onClick={handlenews}>
                                        {news ? 'Show Less' : 'Read More'}
                                    </Button>
                                    <Link to={`https://github.com/Ashutosh8847`} target='_blank'> <FaGithub className='icon' style={{ marginLeft: "20px" }} /></Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Card className='mb-4'>
                                <Card.Img variant="top" src={EcommerceImage} alt='Chatbot image' className='cardImage' />
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Ecommerce Application </Card.Title>
                                    <Card.Text className='cardText'>
                                        The Ecommerce Application features a robust backend built entirely with Node.js, Express.js, MongoDB, and
                                        {ecommerce ? (
                                            <>
                                                Node Mailer, ensuring seamless functionality for ecommerce operations.
                                                <ul>
                                                    <li>
                                                        It includes essential APIs for user authentication (login, signup) etc..., product management, and more, providing a secure and scalable platform.
                                                    </li>
                                                    <li>
                                                        Integrated with technologies like Cloudinary for efficient image management and storage, enhancing product display capabilities.
                                                    </li>
                                                    <li>
                                                        Utilizes Express.js for routing and middleware management, optimizing performance and security in API endpoints.
                                                    </li>
                                                    <li>
                                                        Explore this Ecommerce Application for a comprehensive backend solution, designed to support a dynamic and efficient online shopping experience.
                                                    </li>
                                                </ul>
                                            </>
                                        ) : null}
                                    </Card.Text>
                                    <Button className='cardbtn' variant="primary" onClick={handleecommerce}>
                                        {ecommerce ? 'Show Less' : 'Read More'}
                                    </Button>
                                    <Link to={`https://github.com/Ashutosh8847`} target='_blank'> <FaGithub className='icon' style={{ marginLeft: "20px" }} /></Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Card className='mb-4'>
                                <Card.Img variant="top" src={NoteImage} alt='Chatbot image' className='cardImage' />
                                <Card.Body>
                                    <Card.Title className='cardTitle'>NoteZipper Application</Card.Title>
                                    <Card.Text className='cardText'>
                                        The NoteZipper Application, powered by Node.js, Express.js, React.js, Redux, and Axios, serves as a secure platform
                                        {note ? (
                                            <>
                                                for personal note-taking and organization.
                                                <ul>
                                                    <li>
                                                        Users can register, log in securely, and create individual notes tailored to their needs, ensuring privacy and organization.
                                                    </li>
                                                    <li>
                                                        Featuring functionalities for creating, editing, and deleting personal notes, it enhances productivity and personal organization.
                                                    </li>
                                                    <li>
                                                        Integrated with Redux for efficient state management and Axios for seamless API interactions, ensuring smooth and responsive user experience.
                                                    </li>
                                                    <li>
                                                        Utilizing modular React components, it offers a user-friendly interface and responsive design for intuitive navigation and interaction.
                                                    </li>
                                                    <li>
                                                        Explore NoteZipper for a streamlined, secure, and personalized note-taking experience, tailored to individual preferences and organizational needs.
                                                    </li>
                                                </ul>
                                            </>
                                        ) : null}
                                    </Card.Text>
                                    <Button className='cardbtn' variant="primary" onClick={handlenote}>
                                        {note ? 'Show Less' : 'Read More'}
                                    </Button>
                                    <Link to={`https://github.com/Ashutosh8847`} target='_blank'> <FaGithub className='icon' style={{ marginLeft: "20px" }} /></Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <Col xs={12} sm={6} md={4} lg={3}>
                            <Card className='mb-4'>
                                <Card.Img variant="top" src={VoiceGpt} alt='Chatbot image' className='cardImage' />
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Voice Gpt</Card.Title>
                                    <Card.Text className='cardText'>
                                    Voice GPT utilizes JavaScript, OpenAI API, HTML, and CSS to create an interactive application where users can 
                                        {voice ? (
                                            <>
                                                ask questions via voice or text.
                                                <ul>
                                                    <li>
                                                    The application leverages OpenAI's powerful language models to provide accurate and contextual answers in both voice and chat formats.
                                                    </li>
                                                    <li>
                                                    Designed with a user-friendly interface using HTML and CSS, ensuring intuitive navigation and visual appeal.
                                                    </li>
                                                    <li>
                                                    Integrates seamlessly with OpenAI API for natural language processing, enabling sophisticated conversational interactions.
                                                    </li>
                                                    <li>
                                                    Explore Voice GPT for a dynamic experience where users can interact naturally and receive informative responses through both voice and chat interfaces.
                                                    </li>
                                                </ul>
                                            </>
                                        ) : null}
                                    </Card.Text>
                                    <Button className='cardbtn' variant="primary" onClick={handlevoice}>
                                        {voice ? 'Show Less' : 'Read More'}
                                    </Button>
                                    <Link to={`https://github.com/Ashutosh8847`} target='_blank'> <FaGithub  className='icon' style={{ marginLeft: "20px" }}/></Link>

                                </Card.Body>
                            </Card>
                        </Col> */}




                        <div className='text-center'>
                            <Button className='cardButton' variant='warning' onClick={toogleButton}>Show Less</Button>
                        </div>
                    </Row>
                </>
            )
            }
        </div>
    )
}
export default Project
