import { useEffect, useRef, useState } from "react"
import Chips from "./components/ui/chips"
import { ActiveNav, EXPERIENCE, TECH_STACK } from "./constant"
import { cn } from "./utils";

function App() {

  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [activeNav, setActiveNav] = useState<ActiveNav>(ActiveNav.ABOUT)
;
  useEffect(() => {
    function onScroll() {
      const expBounds = experienceRef.current?.getBoundingClientRect();
      const aboutBound =  aboutRef.current?.getBoundingClientRect();
      if (aboutBound && aboutBound?.top < 90 && aboutBound.bottom > 90) {
        setActiveNav(ActiveNav.ABOUT)
      } else if (expBounds && expBounds?.top < 90 && expBounds.bottom > 90) {
        setActiveNav(ActiveNav.EXPERIENCE)
      } else {
        setActiveNav(ActiveNav.PROJECTS)
      }
    }
    const refs = mainRef?.current;
    if (!refs) return;
    refs.addEventListener('scroll', onScroll)
    return () => refs.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-accent-1 w-full p-8 flex h-full">
      <div className="flex-1 sticky top-0">
        <h1 className="font-Acorn text-[44px]">Dipesh Agarwal</h1>
        <h4 className="font-Acorn text-[24px] pb-6">Frontend Engineer</h4>
        <p className="max-w-xs tracking-wide opacity-80">I build accessible, pixel-perfect digital experiences for the web.</p>
        <div className="flex text-[12px] flex-wrap my-6 tracking-widest ml-[-4px] mt-8">
          {
            TECH_STACK.map((item, index) => (
              <Chips key={index}>{item}</Chips>
            ))
          }
        </div>
        <div className="text-[16px] tracking-wide font-semibold mt-10">
          <div className={cn("flex items-center opacity-50", {"opacity-100": activeNav === ActiveNav.ABOUT})}>
            <div className={cn("w-20 h-[2px] rounded-full transition-all duration-200 bg-accent-3 mr-2", {"w-28": activeNav === ActiveNav.ABOUT})}></div>About</div>
          <div className={cn("flex items-center opacity-50", {"opacity-100": activeNav === ActiveNav.EXPERIENCE})}>
            <div className={cn("w-20 h-[2px] rounded-full bg-accent-3 mr-2 transition-all duration-200", {"w-28": activeNav === ActiveNav.EXPERIENCE})}></div>Experience</div>
          <div className={cn("flex items-center opacity-50 transition-all duration-200", {"opacity-100": activeNav === ActiveNav.PROJECTS})}>
            <div className={cn("w-20 h-[2px] rounded-full bg-accent-3 mr-2 transition-all duration-200", {"w-28": activeNav === ActiveNav.PROJECTS})}></div>Projects</div>
        </div>
      </div>
      <div ref={mainRef} className="flex-1 overflow-scroll">
        <div ref={aboutRef} className="w-full">
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange</p>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange</p>
        </div>
        <div ref={experienceRef} className="w-full text-accent-4 mx-4">
          {
            EXPERIENCE.map((exp, index) => (
              <div key={index} className="cursor-pointer flex p-6 rounded-lg hover:bg-opacity-50 hover:bg-accent-2">
                <div className="pr-4 opacity-80">{exp.duration}</div>
                <div className="flex-1">
                  <div className="font-semibold text-[16px] flex items-center"><div>{exp.role}</div><div className="px-1 opacity-60">@</div><div>{exp.companyName}</div></div>
                  <p className="py-2 opacity-80">{exp.description}</p>
                  <div className="flex text-[12px] flex-wrap my-6 tracking-widest ml-[-4px] mt-4">
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
        <div ref={projectsRef} className="w-full text-accent-4 mx-4">
          {
            EXPERIENCE.map((exp, index) => (
              <div key={index} className="cursor-pointer flex p-6 rounded-lg hover:bg-opacity-50 hover:bg-accent-2">
                <div className="pr-4 opacity-80">{exp.duration}</div>
                <div className="flex-1">
                  <div className="font-semibold text-[16px] flex items-center"><div>{exp.role}</div><div className="px-1 opacity-60">@</div><div>{exp.companyName}</div></div>
                  <p className="py-2 opacity-80">{exp.description}</p>
                  <div className="flex text-[12px] flex-wrap my-6 tracking-widest ml-[-4px] mt-4">
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
