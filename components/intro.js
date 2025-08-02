
export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm Amit Rebala,<br />
          <span className="text-accent-1">Product Leader</span>
        </h1>
        <p className="text-lg block text-slate-500 mt-6 mb-8 max-w-2xl">
          Transforming user experiences and driving business growth through data-driven product strategy. 
          Delivered <strong className="text-accent-1">$760K+ revenue impact</strong> through AI-powered platforms, UGC monetization, and user engagement optimization. 
          Expert in scaling products for <strong className="text-accent-1">30M+ monthly users</strong> at leading media brands.
        </p>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-8 text-center md:text-left">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent-1">$760K+</div>
            <div className="text-sm text-slate-500">Revenue Impact</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent-1">30M+</div>
            <div className="text-sm text-slate-500">Monthly Users</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent-1">7x</div>
            <div className="text-sm text-slate-500">Engagement Growth</div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="mailto:reddy.rebalaamit@gmail.com?subject=Product%20Collaboration%20Inquiry"
            className="bg-accent-1 hover:bg-accent-7 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 text-center"
          >
            Let's Collaborate
          </a>
          <a 
            href="/assets/resume/Resume.pdf"
            className="border border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 text-center"
          >
            Download Resume
          </a>
          <a 
            href="#projects"
            className="text-accent-1 hover:text-accent-7 font-bold py-3 px-4 transition-colors duration-200 text-center flex items-center justify-center"
          >
            View Projects 
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Enhanced Image Section */}
      <div className="mt-8 md:mt-0 flex-shrink-0">
        <div className="relative">
          <img 
            title="Amit Rebala - Product Manager" 
            src="/assets/posts/authors/amit.jpeg" 
            height={295} 
            width={293} 
            alt="Amit Rebala - Product Manager specializing in AI-powered platforms and user engagement optimization"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-accent-1 text-white p-3 rounded-lg shadow-lg">
            <div className="text-sm font-bold">Available for</div>
            <div className="text-xs">Product Leadership</div>
          </div>
        </div>
      </div>
    </section>
  )
}
