import { useEffect, useRef, useState } from "react"
import Chips from "./components/ui/chips"
import { ActiveNav, EXPERIENCE, PROJECTS, TECH_STACK } from "./constant"
import { cn } from "./utils";
import { useMediaQuery } from "./hooks/useMediaQuery";
import CallIcon from "./assets/call.svg";
import EmailIcon from "./assets/email.svg";
import GithubIcon from "./assets/github.svg";
import LinkedinIcon from "./assets/linkedin.svg";
import LinkIcon from "./assets/link.svg";
import ResumeIcon from "./assets/resume.svg";

function App() {

  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const [activeNav, setActiveNav] = useState<ActiveNav>(ActiveNav.ABOUT);
  const scrollRef = useRef<HTMLDivElement | null>(desktopRef.current);

  useEffect(() => {
    function onScroll() {
      const expBounds = experienceRef.current?.getBoundingClientRect();
      const aboutBound =  aboutRef.current?.getBoundingClientRect();
      const endOfScroll = (scrollRef.current?.offsetHeight || 0) + (scrollRef.current?.scrollTop || 0) >= (scrollRef.current?.scrollHeight || 0);
      if (endOfScroll) {
        setActiveNav(ActiveNav.PROJECTS)
      } else if (aboutBound && aboutBound?.top < 150 && aboutBound.bottom > 150) {
        setActiveNav(ActiveNav.ABOUT)
      } else if (expBounds && expBounds?.top < 150 && expBounds.bottom > 150) {
        setActiveNav(ActiveNav.EXPERIENCE)
      } else {
        setActiveNav(ActiveNav.PROJECTS)
      }
    }
    scrollRef?.current?.removeEventListener('scroll', onScroll);
    scrollRef.current = isDesktop ? desktopRef?.current : mainRef?.current as HTMLDivElement;
    if (!scrollRef.current) return;
    scrollRef.current.addEventListener('scroll', onScroll)
    return () => scrollRef?.current?.removeEventListener('scroll', onScroll)
  }, [isDesktop])

  return (
    <div ref={mainRef} className="bg-accent-1 w-full lg:px-8 px-4 lg:flex h-full overflow-scroll lg:py-8">
      <div className="lg:flex-1 lg:sticky lg:top-0 mx-4">
        <h1 className="font-Acorn text-[44px]">Dipesh Agarwal</h1>
        <h4 className="font-Acorn text-[24px] pb-6">Frontend Engineer</h4>
        <p className="max-w-xs tracking-wide opacity-80">I build accessible, pixel-perfect digital experiences for the web.</p>
        <div className="flex text-[12px] flex-wrap my-6 tracking-widest ml-[-4px] mt-8">
          {
            TECH_STACK.map((item, index) => {
              return (
              <Chips key={index}>{item}</Chips>
            )})
          }
        </div>
        <div className="pt-4">
          <div className="pb-2 text-2xl z-10 font-Acorn">Let's Connect</div>
          <div className="flex gap-4 pb-2">
            <a href="tel:+918670592956"><img className="size-6" src={CallIcon}/></a>
            <a href="mailto:dipesh1903@gmail.com"><img className="size-6" src={EmailIcon}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/dipesh-agarwal-49bb05142/"><img className="size-6" src={LinkedinIcon}/></a>
            <a target="_blank" href="https://github.com/dipesh1903"><img className="size-6" src={GithubIcon}/></a>
            <a target="_blank" href="https://pink-myranda-24.tiiny.site"><img className="size-6" src={ResumeIcon}/></a>
          </div>
        </div>
        <div className="hidden lg:block text-[16px] tracking-wide font-semibold mt-10">
          <div
            className={cn("flex items-center opacity-50 cursor-pointer", {"opacity-100": activeNav === ActiveNav.ABOUT})}
            onClick={() => {setActiveNav(ActiveNav.ABOUT); aboutRef.current?.scrollIntoView({behavior: 'smooth'})}}
            >
            <div className={cn("w-20 h-[2px] rounded-full transition-all duration-200 bg-accent-3 mr-2", {"w-40": activeNav === ActiveNav.ABOUT})}></div>About</div>
          <div 
            onClick={() => {setActiveNav(ActiveNav.EXPERIENCE); experienceRef.current?.scrollIntoView({behavior: 'smooth'})}}
            className={cn("flex items-center opacity-50 cursor-pointer", {"opacity-100": activeNav === ActiveNav.EXPERIENCE})}>
            <div className={cn("w-20 h-[2px] rounded-full bg-accent-3 mr-2 transition-all duration-200", {"w-40": activeNav === ActiveNav.EXPERIENCE})}></div>Experience</div>
          <div
            onClick={() => {setActiveNav(ActiveNav.PROJECTS); projectsRef.current?.scrollIntoView({behavior: 'smooth'})}} 
            className={cn("flex items-center opacity-50 transition-all duration-200 cursor-pointer", {"opacity-100": activeNav === ActiveNav.PROJECTS})}>
            <div className={cn("w-20 h-[2px] rounded-full bg-accent-3 mr-2 transition-all duration-200", {"w-40": activeNav === ActiveNav.PROJECTS})}></div>Projects</div>
        </div>
      </div>
      <div ref={desktopRef} className="lg:flex-1 lg:overflow-scroll mx-4">
        <div className={cn("lg:hidden py-4 text-2xl z-10 font-Acorn", {"sticky top-0 mx-[-32px] pl-8 bg-slate-400": activeNav === ActiveNav.ABOUT})}>About</div>
        <div ref={aboutRef} className="w-full lg:my-2 lg:border-[0.5px] lg:border-opacity-20 lg:border-accent-4 lg:rounded-lg lg:p-6">
          <p className="opacity-80"><b>Software Engineer</b> with a solid background in designing, coding, testing and debugging software applications. My past experiences has thought me to <b> show empathy, listen to problems</b> , respect everyone's opinion and then jump to any conclusions</p>
          <p className="py-2 opacity-80"><b>I believe in re-iteration </b> and so I ask questions to understand the problems, try to foresee the solutions to reduce the customer pain point in bugs , <b>distribute and break down my work </b> and follow it. This helps to keep me at peace and to take out time for myself and also to enjoy work.
          </p>
        </div>
        <div className={cn("lg:hidden py-4 transition-all z-10 text-2xl font-Acorn duration-200", {"sticky top-0 mx-[-32px] pl-8 bg-slate-400": activeNav === ActiveNav.EXPERIENCE})}>Experiences</div>
        <div ref={experienceRef} className="lg:my-2 w-full  lg:border-[0.5px] lg:border-opacity-20 lg:border-accent-4 lg:rounded-lg first:py-0 text-accent-4">
          {
            EXPERIENCE.map((exp, index) => (
              <a href={exp.link} target="_blank"><div key={index} className=" cursor-pointer max-sm:p-1 flex px-6 py-6 flex-col lg:flex-row rounded-lg hover:bg-opacity-50 hover:bg-accent-2">
                <div className="pr-4 opacity-80">{exp.duration}</div>
                <div className="flex-1">
                  <div className="font-semibold text-[16px] flex items-center"><div>{exp.role}</div><div className="px-1 opacity-60">@</div><div>{exp.companyName}</div></div>
                  <p className="py-2 opacity-80">{exp.description}</p>
                  <div className="flex text-[12px] flex-wrap my-6 tracking-widest ml-[-4px] mt-2">
                    {
                      exp.techStack.map((item, index) => (
                        <Chips key={(index + 1 )*10}>{item}</Chips>
                      ))
                    }
                  </div>
                </div>
              </div></a>
            ))
          }
        </div>
        <div className={cn("lg:hidden py-4 transition-all text-2xl z-10 font-Acorn duration-200", {"sticky top-0 mx-[-30px] pl-8 bg-slate-400": activeNav === ActiveNav.PROJECTS})}>Projects</div>
        <div ref={projectsRef} className="lg:my-2 lg:border-[0.5px] lg:border-opacity-20 lg:border-accent-4 lg:rounded-lg bg-opacity-70 w-full first:py-0 text-accent-4">
          {
            PROJECTS.map((exp, index) => (
              <div key={index} className="cursor-pointer max-sm:p-1 flex px-6 py-6 flex-col lg:flex-row rounded-lg hover:bg-opacity-50 hover:bg-accent-2">
                <div className="flex-1">
                  <a target="_blank" href={exp.link || exp.githubLink}><div className="font-semibold text-[20px] flex items-center"><div>{exp.name}</div><img className="size-6 pl-2" src={LinkIcon}/></div></a>
                  <p className="py-2 opacity-80">{exp.description}</p>
                  <div><a target="_blank" href={exp.githubLink} className="underline italics">Source Code</a></div>
                  <div className="flex text-[12px] flex-wrap my-6 tracking-widest ml-[-4px] mt-2">
                    {
                      exp.techStack.map((item, index) => (
                        <Chips key={(index + 1 )*10}>{item}</Chips>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
