import { Badge } from "./Badge"

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "SQL"],
    },
    {
        title: "AI Frameworks & Libraries",
        skills: [
            "Tensorflow",
            "Pytorch",
            "Scikit-learn",
            "Langchain"
        ],
    },
    {
        title: "Backend & Databases",
        skills: [
            "FastAPI",
            "MongoDB",
            "Qdrant",
            "MySQL"
        ],
    },
    {
        title: "Web Application",
        skills: [
            "React",
            "Streamlit",
        ],
    },
    {
        title: "Data Processing",
        skills: [
            "Pandas",
            "Numpy",
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <SectionHeader
                    label="Skills & Stack"
                    title="Technologies I Work With"
                    description="A growing toolkit of languages, frameworks, and tools I use daily to bring ideas to life."
                />

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.title}
                            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                        >
                            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="rounded-md px-3 py-1 text-xs"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function SectionHeader({
    label,
    title,
    description,
}) {
    return (
        <div className="text-center">
            <p className="font-mono text-sm text-primary">{label}</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                {description}
            </p>
        </div>
    )
}
