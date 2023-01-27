import Header from '../components/Header'
import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import {fetchPageInfo} from '../utils/fetchPageInfo'
import { Experience, PageInfo, Project, Skill, Social } from '../typing'
import { fetchExperiences } from '../utils/fetchExperience'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { urlFor } from '@/sanity'

type Props ={
  pageInfo:PageInfo;
  experiences:Experience[];
  skills:Skill[];
  projects:Project[];
  socials:Social[];
}

export default function Home({pageInfo,experiences,skills,socials,projects}:Props) {
  return (
    <>
     <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
     overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
     '>
      {/* Head section */}
     <Head>
       {pageInfo?.name} - Portfolio
     </Head>
     {/* Header section */}
     <Header socials={socials}/>
    {/* Hero section */}
    <section id='hero' className='snap-start'>
      <Hero  pageInfo={pageInfo}/>
    </section>

    {/* About section */}
    <section id='about' className='snap-center'>
    <About pageInfo={pageInfo}/>
    </section>

    {/* Experience section */}
    <section id='experience' className='snap-center'>
      <WorkExperience experiences={experiences}/>
    </section>

    {/* skills section */}
    <section id='skills' className='snap-start'>
      <Skills skills={skills} />
    </section>

    {/* Projects section */}
    <section id='projects' className='snap-start'>
      <Projects projects={projects}/>
    </section>

    {/* ContactMe section */}
    <section id='contact' className='snap-start'>
      <ContactMe pageInfo = {pageInfo} />
    </section>

    <Link href='#hero'>
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <img
        className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
        src={urlFor(pageInfo?.heroImage).url()} alt="footer-image" />
      </div>
    </footer>
    </Link>
    </div>
    
     
    </>
  )
}

export const getStaticProps:GetStaticProps<Props> = async ()=>{
    const pageInfo:PageInfo= await fetchPageInfo();
    const experiences:Experience[] = await fetchExperiences();
    const projects:Project[] = await fetchProjects();
    const skills:Skill[] = await fetchSkills();
    const socials:Social[] = await fetchSocials();

    return {
      props:{
        pageInfo,
        experiences,
        projects,
        skills,
        socials,
      },
      revalidate:10
    }
} 