import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Code2 } from 'lucide-react';

const careerPaths = [
  {
    emoji: '🧑‍💻',
    role: 'Python Developer',
    work: 'Write software, scripts, and tools that solve day-to-day problems.',
    build: 'Command-line tools, file processors, and useful Python applications.',
    skills: 'Python, Git, testing'
  },
  {
    emoji: '👩‍💻',
    role: 'Backend Developer',
    work: 'Build the server-side features and APIs that power websites and apps.',
    build: 'Web services, login systems, and database-backed applications.',
    skills: 'Python, Django or Flask, APIs, databases'
  },
  {
    emoji: '🧑‍🔬',
    role: 'Data Analyst',
    work: 'Turn business data into clear answers, reports, and recommendations.',
    build: 'Clean datasets, reports, and interactive data dashboards.',
    skills: 'Python, Pandas, SQL, visualization'
  },
  {
    emoji: '👩‍🔬',
    role: 'Data Scientist',
    work: 'Explore data and create models to explain patterns or make predictions.',
    build: 'Forecasts, customer insights, and data science experiments.',
    skills: 'Python, statistics, Pandas, scikit-learn'
  },
  {
    emoji: '🤖',
    role: 'AI / Machine Learning Engineer',
    work: 'Train and integrate models that recognize patterns or generate results.',
    build: 'Prediction services, recommendation features, and AI-powered apps.',
    skills: 'Python, machine learning, model deployment'
  },
  {
    emoji: '🧑‍🔧',
    role: 'Automation Engineer',
    work: 'Automate repetitive tasks across files, reports, and business systems.',
    build: 'Report generators, data workflows, and task automation scripts.',
    skills: 'Python, APIs, scripting, workflow tools'
  },
  {
    emoji: '🧑‍🏫',
    role: 'Research & Analytics Consultant',
    work: 'Use code and analysis to investigate questions and explain findings.',
    build: 'Reproducible research, analysis reports, and decision-support tools.',
    skills: 'Python, data analysis, communication'
  },
  {
    emoji: '👩‍🚀',
    role: 'Freelancer / Project Builder',
    work: 'Deliver custom software, data, or automation solutions for clients.',
    build: 'Client websites, integrations, dashboards, and small business tools.',
    skills: 'Python, projects, problem-solving, client communication'
  }
];

export default function PythonCareers() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]"></div>
      <main className="relative z-10 mx-auto w-full max-w-[90%] 2xl:max-w-[1600px] px-4 sm:px-6 pt-28 md:pt-32 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/20 hover:text-white"
        >
          <ArrowLeft size={17} /> Back to syllabuses
        </Link>

        <section className="mx-auto mb-12 mt-8 max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-200/30 bg-cyan-300/15 text-4xl shadow-lg shadow-cyan-950/30">
            🧑‍💻
          </div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
            <BriefcaseBusiness size={15} /> Python career paths
          </p>
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            What can you do with Python?
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Python can lead to different kinds of work. Explore the people-focused examples below to see what each role does and what you could build. Most paths need focused practice and projects beyond Python basics.
          </p>
        </section>

        <section aria-label="Career options after learning Python" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {careerPaths.map(({ emoji, role, work, build, skills }) => (
            <article
              key={role}
              className="group flex flex-col rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.14] hover:shadow-cyan-950/30"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-100/20 bg-cyan-100/10 text-3xl" aria-hidden="true">
                  {emoji}
                </span>
                <h2 className="text-lg font-bold leading-snug text-white">{role}</h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-200">{work}</p>
              <div className="mb-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-cyan-200">What you could build</p>
                <p className="text-sm leading-relaxed text-gray-200">{build}</p>
              </div>
              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="text-xs font-semibold text-gray-400">Skills to grow</p>
                <p className="mt-1 text-sm text-gray-200">{skills}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-200/25 bg-gradient-to-r from-cyan-950/70 to-blue-950/60 p-6 shadow-xl sm:flex-row sm:p-8">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">Choose a path and start building</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-300">
              Start with Python fundamentals, then follow the syllabus that best matches the kind of work you want to explore.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              to="/syllabus/python-developer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-200/40 bg-cyan-300/15 px-5 py-3 text-sm font-bold text-cyan-50 transition-colors hover:bg-cyan-300/25"
            >
              Python syllabus <ArrowRight size={17} />
            </Link>
            <Link
              to="/syllabus/python-with-ai"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              Python with AI <Code2 size={17} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
