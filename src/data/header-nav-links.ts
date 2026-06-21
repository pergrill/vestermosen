import siteLabels from './site-labels'

const headerNavLinks = [  
  { href: '/info', title: siteLabels.info },
  { href: '/flagdays', title: siteLabels.flagdays },
  { href: '/links', title: siteLabels.links },
  { href: '/streetmap', title: siteLabels.streetmap },
  { href: '/areamap', title: siteLabels.areamap },
  { href: '/about', title: siteLabels.about },
] as const

export type HeaderNavLink = (typeof headerNavLinks)[number]

export default headerNavLinks
