import React from 'react'
import './Experience.css'
import { MdWork } from "react-icons/md";

const Experience = () => {
    return (
        <div className='experienceConatiner' style={{ marginTop: "30px" }}>
            <h2 style={{ textAlign: "center" }}><span style={{ marginRight: "10px", fontSize: "32px" }}><MdWork /></span><b>Work Experience:<hr /></b></h2>
            <ul>
                <li>
                    <b>Position:</b> Associate Software Engineer, Conversational AI Chatbot Developer<br />
                    <b>Organization:</b> smartbots.ai, a subsidiary of Palni India Pvt Ltd<br />
                    <b>Location:</b> Hyderabad, Telangana<br />
                    <b>Duration:</b> November 2022 – Present<br />
                    <b>Responsibilities:</b>
                    <ul>
                        <li>
                            Designed, developed, and deployed chat and voice bots using AWS Lex, Lambda, Connect, DynamoDB, S3, and OpenAI for automation across sectors like Travel, Hospitality, Insurance, and Telecom.
                        </li>
                        <li>
                            Developed Document AI bots using AWS Textract and ChromaDB, enabling accurate file parsing and retrieval.
                        </li>
                        <li>
                            Built a Text-to-SQL chatbot for query generation and visualization using Streamlit and Chart.js, enhancing user-friendly data access from structured databases.
                        </li>
                        <li>
                            Successfully integrated Agentic RAG and Retrieval Augmented Generation (RAG) models to elevate contextual response quality and accuracy in chatbot workflows.
                        </li>
                        <li>
                            Currently leading development of a chatbot solution for a pharmaceutical client, streamlining sales operations and customer engagement via Salesforce and AI-driven capabilities.
                        </li>
                        <li>
                            Collaborated on full-stack chatbot applications using Node.js, React.js, Flask, and MySQL, with cloud deployment on AWS EC2, Redshift, and Bedrock.
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    )
}

export default Experience
