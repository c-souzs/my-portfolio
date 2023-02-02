import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiPrisma, SiNodedotjs, SiRedux, SiGithub, SiFigma } from 'react-icons/si';

export const dataTechnologies = {
    html: {
        icon: SiHtml5,
        name: 'html 5'
    },
    css: {
        icon: SiCss3,
        name: 'css 3'
    },
    github: {
        icon: SiGithub,
        name: 'github'
    },
    figma: {
        icon: SiFigma,
        name: 'figma'
    },
    javascript: {
        icon: SiJavascript,
        name: 'javascript'
    },
    typescript: {
        icon: SiTypescript,
        name: 'typescript'
    },
    react: {
        icon: SiReact,
        name: 'react'
    },
    redux: {
        icon: SiRedux,
        name: 'redux'
    },
    next: {
        icon: SiNextdotjs,
        name: 'nextJs'
    },
    tailwindcss: {
        icon: SiTailwindcss,
        name: 'tailwindcss'
    },
    styledcomponents: {
        icon: SiStyledcomponents,
        name: 'styled components'
    },
    prisma: {
        icon: SiPrisma,
        name: 'prisma'
    },
    node: {
        icon: SiNodedotjs,
        name: 'node'
    },
}

export type DataTechnologies = keyof typeof dataTechnologies;