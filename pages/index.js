import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Amit Rebala - Product Leader | $760K+ Revenue Impact</title>
          <meta name="description" content="Product Manager with expertise in AI-powered platforms, UGC monetization, and user engagement. Delivered $760K+ revenue impact across 30M+ users." />
        </Head>
        <Container>
          <Intro />
        </Container>
        
        {/* Hero Project Section */}
        <div className="bg-sky-50 pt-16 pb-16">
          <Container>
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
          </Container>
        </div>

        {/* All Projects Section */}
        <Container>
          <div className="md:mt-16" id="projects">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
                Featured Projects
              </h2>
              <p className="text-lg text-slate-500 mt-4">
                Explore my portfolio of product initiatives that drove measurable business impact
              </p>
            </div>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            
            {/* Call to Action Section */}
            <div className="bg-accent-1 text-white rounded-lg p-8 md:p-12 mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Drive Product Growth?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how I can help accelerate your product strategy and user engagement
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:reddy.rebalaamit@gmail.com?subject=Product%20Collaboration%20Inquiry"
                  className="bg-white text-accent-1 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors duration-200"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/assets/resume/Resume.pdf"
                  className="border border-white text-white hover:bg-white hover:text-accent-1 font-bold py-3 px-8 rounded-md transition-colors duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
