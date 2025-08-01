import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

const About = () => {
    return (
            <>
              <Layout>
                <Container>
                  <Header />
                </Container>
                <div className="bg-sky-50 pt-16 pb-16">
                  <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      <div>
                        <Image title={"amit-rebala"} src={"/assets/about/amit.jpeg"} height={295} width={293} />
                      </div>
                      <div className="md:pr-8 md:col-span-2">
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-12">
                          I drive product strategy and growth.
                        </h1>
                        <p className="text-lg block text-slate-500 mb-4">As a seasoned Product Manager with expertise in AI-powered platforms and user engagement optimization, I've delivered measurable business impact across leading media brands including Condé Nast properties like Vogue, Wired, Epicurious, and Bon Appétit.</p>
                          <p className="text-lg block text-slate-500 mb-4">My track record includes generating $760K+ in revenue impact through strategic UGC monetization initiatives, achieving 7x user engagement improvements, and scaling platforms to serve 30M+ monthly users. I specialize in leveraging advanced analytics, AI/ML capabilities, and data-driven insights to transform user experiences.</p>
                          <p className="text-lg block text-slate-500 mb-4">With experience spanning fintech, media, and consulting at organizations like TCS, Goldman Sachs, and BJ's Restaurants, I bring a unique perspective on product strategy, combining technical depth with business acumen to drive sustainable growth and innovation.</p>
                      </div>
                    </div>
                  </Container>
              </div>
              </Layout>
            </>
        //   )

    );
}

export default About;