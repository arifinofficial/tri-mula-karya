import { homeHeroImg } from '@/assets'
import { TransitionLink } from '@/components/atoms/TransitionLink'
import projectData from '@/data/global/projectData'
import homeProjectData from '@/data/home/homeProjectData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const layoutConfig = [
    {
        grid: "col-span-11 col-start-1 md:col-span-6 md:col-start-1",
        aspect: "aspect-[4/3]",
    },
    {
        grid: "col-span-11 col-start-2 md:col-span-6 md:col-start-7",
        aspect: "aspect-[4/4]",
    },
    {
        grid: "col-span-11 col-start-1 md:col-span-6 md:col-start-1",
        aspect: "aspect-[4/4]",
    },
    {
        grid: "col-span-11 col-start-2 md:col-span-5 md:col-start-8",
        aspect: "aspect-[4/4]",
    },
    {
        grid: "col-span-11 col-start-1 md:col-span-5 md:col-start-1",
        aspect: "aspect-[4/4]",
    },
    {
        grid: "col-span-11 col-start-2 md:col-span-6 md:col-start-7",
        aspect: "aspect-[4/4]",
    },
];

const HomeProject = () => {

    return (
        <section className='px-9 xl:px-21 py-12.5 lg:py-25 bg-primary z-10 relative'>
            <div className='flex flex-col gap-4 lg:gap-5'>
                <pre className='font-sans! font-medium text-sm md:text-base'>{homeProjectData.preTitle}</pre>
                <div className='flex flex-row justify-between items-end'>
                    <h2 className='w-9/12 text-3xl md:text-5xl xl:text-6xl font-medium'>{homeProjectData.title}</h2>
                    <span className='text-3xl md:text-5xl xl:text-6xl font-medium self-end'>[04]</span>
                </div>
            </div>
            <div className="grid grid-cols-12 mt-12.5 xl:mt-25 gap-2 lg:gap-8 gap-y-10 lg:gap-y-16">
                {projectData.slice(0, 4).map((project, index) => (

                    <div key={index} className="col-span-12 md:col-span-6">
                        <TransitionLink href={`/projects/${project.slug}`} className="group">
                            <div className='relative mb-5'>
                                <Image
                                    src={project.projectThumbnail}
                                    alt={project.projectName}
                                    className={`w-full h-full aspect-[4/4] object-cover`}
                                />
                                <div className='absolute top-0 left-0 w-full h-full bg-primary/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out' />
                                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center '>
                                    <Image
                                        src={project.projectThumbnail}
                                        alt={project.projectName}
                                        className={`w-full h-full aspect-[4/4] object-cover scale-0 group-hover:scale-75 transition-all duration-500 ease-in-out`}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 lg:gap-10 h-[1.3em] lg:h-[1.2em] items-center">
                                    <span className="text-sm lg:text-lg text-foreground/70">
                                        [{String(index + 1).padStart(2, "0")}]
                                    </span>
                                    <span className="text-sm lg:text-lg font-medium">
                                        {project.projectName}
                                    </span>
                                </div>

                                <div className="overflow-hidden h-[1lh] lg:h-[1.2lh]">
                                    <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-[0.8lh] lg:group-hover:-translate-y-[1lh] items-end">
                                        <span className="text-sm lg:text-lg font-medium">
                                            {project.projectYear}
                                        </span>
                                        <span className="text-sm lg:text-lg font-medium">
                                            View project →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </TransitionLink>
                    </div>

                ))}
            </div>

            <div className='w-full flex justify-center mt-12.5 xl:mt-25'>
                <TransitionLink
                    href={'/projects'}
                    className={`text-[#1A1A19] bg-[#F8FAFC] p-2.5 px-5 flex items-center gap-2.5 text-base hover:opacity-70 transition-all duration-500 ease-in-out flex-shrink-0 w-fit`}
                >
                    <div className="w-1.5 h-1.5 bg-[#1A1A19]"></div>
                    View All Projects
                </TransitionLink>
            </div>
        </section>
    )
}

export default HomeProject
