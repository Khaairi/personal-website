import { Badge } from "./Badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        title: "CineBot: Intelligent AI Movie Companion",
        description:
            "An AI-powered conversational agent using Streamlit and Google Gemini. This application leverages an Agentic Workflow via LangChain to fetch real-time movie data from the TMDB API and display it through rich visual cards. Key features include customizable AI personas, a smart watchlist management system, and a Retrieval-Augmented Generation (RAG) pipeline powered by Qdrant and HuggingFace embeddings, allowing users to upload and interactively analyze movie scripts or PDFs. Additionally, the bot integrates the Google Search API to provide real-time 'Now Playing' cinema schedules and showtimes specific to Indonesian theaters.",
        tags: ["Langchain", "RAG", "TMDB API", "Google Search API", "Streamlit", "Qdrant"],
        image: "/images/cinebot.jpeg",
        github: "https://github.com/Khaairi/Cinebot_Agentic_Movie_Assistant.git",
    },
    {
        title: "Multimodal RAG Recipe Assistant",
        description:
            "An AI-powered culinary assistant using Streamlit and Google Gemini. This application leverages a Multimodal RAG pipeline to retrieve precise cooking advice from PDF cookbooks, utilizing IBM Docling for layout-aware document parsing that accurately separates ingredients from instructions. Key features include an ingredient detection system powered by Computer Vision (Gemini Vision/LLaVA) that suggests recipes from user photos, and a robust Hybrid Vector Architecture that automatically fails over from Qdrant Cloud to local ChromaDB for high availability. Additionally, the system supports privacy-focused local inference via Ollama, orchestrated seamlessly through LangChain.",
        tags: ["Langchain", "Gemini Vision", "LLaVA", "Ollama", "Multimodal RAG", "Qdrant", "Streamlit", "Docling"],
        image: "/images/recipe.png",
        github: "https://github.com/Khaairi/Recipe_Chatbot_Multimodal_RAG.git",
    },
    {
        title: "Student Facial Expression Recognition System",
        description:
            "Developed as a final-year thesis, this project focuses on building an efficient and accurate facial expression recognition system using a Hybrid MobileNetV3 and Vision Transformer (ViT) architecture. To ensure domain applicability, a specialized dataset of student expressions in classroom settings was constructed for rigorous model testing. The system is deployed via a Streamlit web interface, featuring an integrated LLM (Large Language Model) pipeline to analyze emotional trends from video inputs and generate actionable pedagogical recommendations for teachers.",
        tags: ["Facial Expression Recognition (FER)", "Hybrid MobileNetV3-ViT"],
        image: "/images/fer.png",
        github: "https://github.com/Khaairi/Facial_Expression_Recognition_Hybrid_ViT_Mobilenetv3.git",
    },
    {
        title: "AI-Powered Job-CV Matching with Vector Search",
        description:
            "Developed for the Compfest AI Innovation Challenges 2024 Preliminary, this project streamlines the recruitment process for IT professionals through an advanced AI-driven recommendation engine. The system leverages a fine-tuned SBERT model and Vector Search technology (powered by Zilliz Milvus) to perform high-precision similarity matching on a custom dataset of over 85,000 entries. Key features include seamless resume uploading and real-time job recommendations, ensuring highly relevant matches between candidates and job descriptions.",
        tags: ["SBERT Model", "Vector Search", "ReactJS"],
        image: "/images/job-cv.png",
        github: "https://github.com/bwbayu/JobFitte.git",
    },
    {
        title: "SILELA: Sistem Pelayanan Elektronik Isola",
        description:
            "A mobile application designed to digitize administrative correspondence processes for the Kelurahan Isola government office. As a Backend Developer, I designed and implemented the MySQL database schema and built robust RESTful APIs using FastAPI to handle complex business logic. (Code currently on private do to some reasons)",
        tags: ["FastAPI", "MySQL"],
        image: "/images/silela.png",
    },
    {
        title: "Clothing Multilabel Classification",
        description:
            "Developed for the Hology Data Mining 2024 Preliminary, this project fine-tuned a Vision Transformer (ViT) for multi-label classification to predict clothing type and color. Achieving an Exact Match Ratio (EMR) of 0.9829, the project secured a top-8 position out of 196 teams, showcasing its high accuracy and innovative approach.",
        tags: ["Vision Transformer (ViT)", "Multilabel Classification"],
        image: "/images/clothing.png",
        github: "https://github.com/Khaairi/Clothing_Multilabel_Classification.git",
    },
    {
        title: "Multiclass Text Classification",
        description:
            "Developed for the Satria Data 2024 preliminary round, this project focuses on multiclass text classification for election-related content across 8 distinct categories. By addressing data challenges like slang and class imbalance through rigorous preprocessing (using IndoNLP) and fine-tuning the indobenchmark/indobert-base-p1 model, the project achieved a Balanced Accuracy of 0.7085 on the test set.",
        tags: ["BERT", "IndoNLP"],
        image: "/images/text-classification.jpg",
        github: "https://github.com/Khaairi/Multiclass_Text_Classification_SatriaData2024.git",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <div className="text-center">
                    <p className="font-mono text-sm text-primary">Projects</p>
                    <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Selected Work
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                        A collection of projects that showcase my approach to solving
                        problems and building products.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Project image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`Screenshot of ${project.title}`}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    {project.title}
                                </h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-justify">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="rounded-md text-xs font-normal"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        <Github className="h-4 w-4" />
                                        Code
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
