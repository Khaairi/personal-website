import { MapPin, Mail, Github, Linkedin } from "lucide-react"
import React, { useState, useEffect } from 'react';

const passions = [
    "Data Science",
    "Natural Language Processing",
    "Computer Vision",
    "Backend Development",
    "Machine Learning"
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % passions.length);
                setFade(true);
            }, 500);

        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="about"
            className="relative flex min-h-screen items-center justify-center px-6"
        >
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[auto_1fr] md:items-center">
                {/* Photo */}
                <div className="flex justify-center md:justify-start">
                    <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-primary/30 shadow-lg shadow-primary/10 md:h-56 md:w-56">
                        <img
                            src="/images/avatar.jpeg"
                            alt="Photo of Khaairi"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left">
                    <p className="mb-2 font-mono text-sm text-primary">Hello, I am</p>
                    <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        Mochamad Khaairi
                    </h1>
                    <p className="mt-2 text-lg font-medium text-muted-foreground md:text-xl">
                        Passionate about:{" "}
                        <span
                            className={`inline-block text-primary transition-all duration-500 ease-in-out ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                                }`}
                        >
                            {passions[index]}
                        </span>
                    </p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                        Motivated Computer Science graduate with a strong proficiency in Machine Learning and Data Science. Demonstrated technical expertise through hands-on projects and competitions, building predictive models and solving complex problems. Seeking to leverage my expertise in Data and AI to contribute to impactful projects while further developing my professional skills.
                    </p>

                    {/* Contact chips */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                        <a
                            href="mailto:mochamad.khaairi30@gmail.com"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                            <Mail className="h-4 w-4" />
                            mochamad.khaairi30@gmail.com
                        </a>
                        <a
                            href="https://github.com/Khaairi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                            <Github className="h-4 w-4" />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mochamad-khaairi-7604062a2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                        </a>
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground">
                            <MapPin className="h-4 w-4" />
                            Bandung, Indonesia
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <a href="#skills" aria-label="Scroll to skills section">
                    <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/40 p-1">
                        <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                    </div>
                </a>
            </div>
        </section>
    )
}
