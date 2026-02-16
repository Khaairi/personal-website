import { Award, Trophy } from "lucide-react"

const certifications = [
    {
        title: "Dev Certification for Machine Learning with TensorFlow (DCML)",
        issuer: "dev.cert",
        year: "2025",
        image: "/images/DCML.jpg",
        link: "https://dev.id/certificate/verify/Z3WX1XMWQ2"
    },
    {
        title: "Bangkit 2024 Batch 1 Machine Learning Cohort",
        issuer: "Google",
        year: "2024",
        image: "/images/bangkit.jpg",
        link: "https://drive.google.com/file/d/1UYh9XtD46buiICWnU8s_khWFsdHmD7Ao/view"
    },
]

const achievements = [
    {
        title: "Qdrant Hackathon 2025 Best-in-Caregory Twelvelabs",
        description:
            "Collaborated in a team to build a multimodal knowledge assistant that integrates Qdrant vector database and Twelve Labs video understanding API.",
        image: "/images/qdrant.jpeg",
        link: "https://qdrant.tech/blog/vector-space-hackathon-winners-2025/#twelvelabs-prize-qlassroom-yhha"
    },
    {
        title: "Hology 7.0 2024 Finalist of Data Mining",
        description:
            "Selected as 1 of 8 finalist from 80+ team in Data Mining competition.",
        image: "/images/Hology.png",
        link: "https://drive.google.com/file/d/1Z7pPt2I6i4pHLWQs-fbd4es1bTTjzCmh/view"
    },
]

export default function Certifications() {
    return (
        <section id="certifications" className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <div className="text-center">
                    <p className="font-mono text-sm text-primary">
                        Certifications & Achievements
                    </p>
                    <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Recognition & Credentials
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                        Professional certifications and milestones that represent my
                        dedication to continuous learning.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {/* Certifications */}
                    <div>
                        <h3 className="mb-6 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                            <Award className="h-4 w-4" />
                            Certifications
                        </h3>
                        <div className="flex flex-col gap-4">
                            {certifications.map((item) => (
                                <a
                                    href={item.link}
                                    key={item.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                                    </div>
                                    <div className="p-5">
                                        <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                            {item.title}
                                        </p>

                                        {item.issuer && (
                                            <p className="text-xs text-muted-foreground mt-1">{item.issuer}</p>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* <div>
                        <h3 className="mb-6 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                            <Award className="h-4 w-4" />
                            Certifications
                        </h3>
                        <div className="flex flex-col gap-4">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.title}
                                    className="group flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                                >
                                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                                        <img
                                            src={cert.image}
                                            alt={`${cert.title} badge`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="truncate font-semibold text-card-foreground">
                                            {cert.title}
                                        </p>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {cert.issuer} &middot; {cert.year}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Achievements */}
                    <div>
                        <h3 className="mb-6 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                            <Trophy className="h-4 w-4" />
                            Achievements
                        </h3>
                        <div className="flex flex-col gap-4">
                            {achievements.map((item) => (
                                <a
                                    href={item.link}
                                    key={item.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                                    </div>
                                    <div className="p-5">
                                        <p className="font-semibold text-card-foreground">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
