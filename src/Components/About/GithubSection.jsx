import { GitHubCalendar } from 'react-github-calendar';

const GithubSection = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto bg-[var(--card-bg)] dark:bg-white/5 p-10 rounded-[40px] border border-slate-200 dark:border-white/10">
                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-10 uppercase">
                    My Coding <span className="text-brand">Consistency</span>
                </h2>

                <div className="flex justify-center overflow-x-auto pb-6">
                    <GitHubCalendar
                        username="sarita595k"
                        blockSize={12}
                        blockMargin={4}
                        fontSize={16}
                        colorScheme={localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'}
                        theme={{
                            light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                    />
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="/Sarita_Resume.pdf"
                        download
                        className="inline-flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-brand/30"
                    >
                        Download My Full Resume (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GithubSection