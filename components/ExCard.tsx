import { AnimatedShinyText } from "./ui/animated-shiny-text";

interface ExCardProps {
  title: string; // e.g. "Frontend Developer"
  company: string; // e.g. "Thrill"
  roleType: string; // e.g. "Part-time - Remote"
  dateRange: string; // e.g. "May 2025 – Present"
  highlights: string[]; // list of bullet points
}

export function ExCard({
  title,
  company,
  roleType,
  dateRange,
  highlights,
}: ExCardProps) {
  return (
    <div className="relative group">
      <div className="absolute top-14 sm:top-16 bottom-0 w-px sm:w-[2px] bg-border/50 transition-colors left-[35px] sm:left-[46px]"></div>
      <div className="relative flex gap-4 sm:gap-6">
        {/* Icon bubble */}
        <div className="relative flex-shrink-0 sm:ml-6 mr-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#33deed]/10  border-2 border-darkBlue dark:border-lightBlue flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5 text-darkBlue dark:text-lightBlue"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
        </div>

        {/* Card content */}
        <div className="flex-1 pb-8 sm:pb-12">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-transparent backdrop-blur-md border-2 hover:border-[#33deed]/50 transition-all space-y-3 sm:space-y-4">
            <div className="space-y-2">
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                {title}
              </h3>

              {/* Company + role type */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <span className="font-semibold text-myblue dark:text-mycyan">{company}</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 sm:w-4 sm:h-4 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <AnimatedShinyText className="text-secondary" shimmerWidth={30}>
                    {roleType}
                  </AnimatedShinyText>
                </span>
              </div>

              {/* Date range */}
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <AnimatedShinyText className="text-secondary" shimmerWidth={30}>
                  {dateRange}
                </AnimatedShinyText>
              </div>
            </div>

            {/* Highlights list */}
            <ul className="space-y-2 text-sm sm:text-base">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#33deed] mt-2 sm:mt-2.5 flex-shrink-0"></span>
                  <AnimatedShinyText className="text-secondary" shimmerWidth={30}>
                    {item}
                  </AnimatedShinyText>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
