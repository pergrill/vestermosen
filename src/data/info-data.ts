type Address = {
  name: string
  street: string
  city: string
  phone: string
  extra?: string
  times?: string
}

export type InfoData = {
  title: string
  description: string
  addresses: Address[]
  imgSrc: string
  href: string
}

const infoData: InfoData[] = [
  {
    title: 'Politi 1 1 4',
    description: `Politiets service nr. hvor man får kontakt til den lokale politikreds. Skal benyttes i tilfælde,
    hvor der ikke er akut behov for politiets udrykning.`,
    addresses: [
      {
        name: 'Nordfyn Politbutik',
        street: 'Vesterled 8',
        city: '5471 Søndersø',
        phone: '',
        extra: '',
        times: 'Åben første torsdag i hver måned kl. 15:00 - 17:00',
      },
      {
        name: 'Fyns Politi Hovedpolitistation',
        street: 'Hans Mules Gade 1-3',
        city: '5000 Odense C',
        phone: '',
        extra: '',
        times: 'For åbningstider se Fyns Politis hjemmeside',
      },
    ],
    imgSrc: '/images/politi-sm.png',
    href: 'https://politi.dk/fyns-politi',
  },
  {
    title: 'Lægevagten 70 11 07 07',
    description: `Al kontakt til  lægevagten skal være telefonisk. Du vil komme til at tale med en læge.`,
    addresses: [
      {
        name: 'Sygehus Lillebælt',
        street: 'Østre Hougvej 55',
        city: 'Middelfart',
        phone: '',
        extra: '(Skadeklinikken ved hovedindgangen)',
        times:
          'Lægevagten har åbent på alle hverdage fra kl. 16.00 - 8.00 og lørdag, søn- og helligdage hele døgnet.',
      },
      {
        name: 'Odense Universitetshospital',
        street: 'Kløvervænget 25',
        city: '5000 Odense C',
        phone: '',
        extra: '',
        times: '',
      },
    ],
    imgSrc: '/images/laegevagten-sm.png',
    href: 'https://www.laegevagten.dk/kontakt-laegevagten/region-syddanmark',
  },
  {
    title: 'Apotek',
    description:
      'Al kontakt til  lægevagten skal være telefonisk. Du vil komme til at tale med en læge.',
    addresses: [
      {
        name: 'Bogense Apotek',
        street: 'Vestergade 9',
        city: '5400 Bogense',
        phone: '64 81 10 11',
        extra: '',
        times: 'Åben hverdage 09:00 - 17:30, Lørdag 09:00 - 13:00, Søndag lukket.',
      },
      {
        name: 'Middelfart Løve Apotek',
        street: 'Kløvervej 10-14',
        city: '5500 Middelfart',
        phone: '75 92 35 44',
        extra: '',
        times: 'Åben hverdage 09:00 - 19:00, Lørdag 09:00 - 15:00, Søndag 10:00 - 14:00.',
      },
      {
        name: 'Middelfart Apotek',
        street: 'Jernbanegade 2C',
        city: '5500 Middelfart',
        phone: '64 41 77 43',
        extra: '',
        times: '',
      },
      {
        name: 'Odense Apoteket Ørnen',
        street: 'Vestergade 80',
        city: '5000 Odense C',
        phone: '66 12 29 70',
        extra: '',
        times: `Åben alle dage 06:00 - 0:00 - Der opkræves vagtgebyr på hverdage efter kl. 20:00 og
        fra lørdag kl. 17.00 til mandag kl. 8.30, dog ikke for recepter udstedt samme dag.`,
      },
    ],
    imgSrc: '/images/apotek-sm.png',
    href: 'https://www.apoteket.dk/raadgivning/love-og-regler/vagtapoteker',
  },
  {
    title: 'Giftlinjen 82 12 12 12',
    description: `Giftlinjen er en landsækkende telefonrådgivning, hvor alle kan få direkte råd og hjælp i tilfælde
     af forgiftning. Sygeplejersker og læger, der er særligt uddannede inden for forgiftning, 
     sidder klar ved telefonerne døgnet rundt.`,
    addresses: [
      {
        name: '',
        street: '',
        city: '',
        phone: '',
        extra: '',
        times: '',
      },
    ],
    imgSrc: '/images/giftlinjen-sm.png',
    href: '',
  },
  {
    title: 'Bogense Dyrecenter',
    description: `Bogense Dyrecenter er en mindre dyreklinik, beliggende på havnen i Bogense.`,
    addresses: [
      {
        name: '',
        street: 'Østre Havnevej 4',
        city: '5400 Bogense',
        phone: '64 80 10 37 (døgnvagt)',
        extra: '',
        times: 'Butikken åben hverdage 9 - 16. Torsdag 9 - 17',
      },
    ],
    imgSrc: '/images/bogense-dyrecenter-sm.png',
    href: 'https://bogensedyrecenter.dk/',
  },
  {
    title: 'Dyrenes Vagtcentral 1812',
    description: `Vagtcentralen 1812 er en landsdækkende service, som vejleder i sager om dyr i nød.
    Den er en del af Dyrenes Beskyttelse`,
    addresses: [
      {
        name: '',
        street: '',
        city: '',
        phone: '',
        extra: '',
        times:
          'Da 1812 er et servicenummer, kan opkald til Dyrenes Beskyttelses Vagtcentral medføre merudgifter på din telefonregning',
      },
    ],
    imgSrc: '/images/dyrenes-beskyttelse-sm.png',
    href: 'https://www.dyrenesbeskyttelse.dk/vagtcentralen',
  },
  {
    title: 'Falck',
    description: '',
    addresses: [
      {
        name: 'Vagtcentral',
        street: '',
        city: '',
        phone: '70 10 20 30',
        extra: '',
        times: '',
      },
      {
        name: 'Kundeservice',
        street: '',
        city: '',
        phone: '70 10 20 31',
        extra: '',
        times: '',
      },
    ],
    imgSrc: '/images/falck-sm.png',
    href: 'https://www.falck.dk/',
  },
]

export default infoData

