export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: {
    icon: {
      url: string
      name: string
    }
  }[]
}

export type SectionConceptsProps = {
  title: string
  concepts: {
    title: string
    id: string
  }[]
}

export type SectionModulesProps = {
  title: string
  modules: {
    id: string
    title: string
    subtitle: string
    description: string
  }[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type pricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstalments: number
  realPrice: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type sectionAboutUsProps = {
  title: string
  authors: {
    name: string
    role: string
    description: string
    photo: {
      alternativeText: string
      url: string
    }
    socialLinks: {
      title: string
      url: string
    }[]
  }[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: pricingBoxProps
  sectionAboutUs: sectionAboutUsProps
}
