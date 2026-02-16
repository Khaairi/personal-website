export default function Footer() {
    return (
        <footer className="border-t border-border px-6 py-8">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
                <p className="font-mono text-sm text-muted-foreground">
                    {"</>"} &middot; Built with React & Tailwind
                </p>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Khaairi. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
