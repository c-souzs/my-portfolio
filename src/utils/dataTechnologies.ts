import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiPrisma, SiRedux, SiGithub, SiFigma, SiNodedotjs, SiJest, SiTestinglibrary, SiGraphql, SiStripe, SiEslint, SiPrettier } from 'react-icons/si';

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
        name: 'UI Design'
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
    jest: {
        icon: SiJest,
        name: 'jest'
    },
    reactTestingLibrary: {
        icon: SiTestinglibrary,
        name: 'testing library'
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
        name: 'nodeJs'
    },
    graphQl: {
        icon: SiGraphql,
        name: 'graphQL'
    },
    stripe: {
        icon: SiStripe,
        name: 'stripe'
    },
    eslint: {
        icon: SiEslint,
        name: 'eslint'
    },
    prettier: {
        icon: SiPrettier,
        name: 'prettier'
    }
}

export type DataTechnologies = keyof typeof dataTechnologies;