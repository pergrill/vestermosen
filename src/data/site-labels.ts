const siteLabels = {
  footerText: '',
  pageNotFound: 'Siden kunne ikke findes.',
  backToHomepage: 'Til forsiden',
  about: 'Om os',
  info: 'Info',
  links: 'Links',
  generalInfo: 'Generel info',
  board: 'Bestyrelse',
  chairmanLabel: 'Formand:',
  treasurerLabel: 'Kasserer:',
  secretaryLabel: 'Sekretær:',
  boardMemberLabel: 'Bestyrelsesmedlem:',
  suppleant: 'Suppleant',
  flagdays: 'Flagdage',
  streetmap: 'Vej kort',
  areamap: 'Område kort',
  contingent: 'Kontingent',
  commonRoad: 'Fællesvej',
  bathingPier: 'Badebro',
  seeMore: 'Se mere',
  artikler: 'Artikler',
} as const

export type SiteLabels = typeof siteLabels

export default siteLabels
