import Image from 'next/image'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Hi, I'm Amit Rebala,<br />Product Leader
        </h1>
        <p className="text-lg block text-slate-500">Transforming user experiences and driving business growth through data-driven product strategy. 
          Delivered $760K+ revenue impact through AI-powered platforms, UGC monetization, and user engagement optimization. 
          Expert in scaling products for 30M+ monthly users at leading media brands.</p>
        <a href="/assets/resume/Resume.pdf"
          className="bg-accent-1 hover:bg-white hover:text-accent-1 border border-accent-1 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-6 inline-block"
        >
          Download Resume
        </a>
      </div>
      <Image title={"amit-rebala"} src={"/assets/posts/authors/amit.jpeg"} height={295} width={293}
      />
    </section>
  )
}
