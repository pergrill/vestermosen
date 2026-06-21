import siteLabels from '@/data/site-labels'

export type BoardMember = {
  label: string
  name: string
  email: string
}

const boardMembers: BoardMember[] = [
  {
    label: siteLabels.chairmanLabel,
    name: 'Claus Fink',
    email: 'fink6670@gmail.com',
  },
  {
    label: siteLabels.treasurerLabel,
    name: 'Bente Irene Pedersen',
    email: 'assensvej200@gmail.com',
  },
  {
    label: siteLabels.secretaryLabel,
    name: 'Per Grill',
    email: 'pergrill@gmail.com',
  },
  {
    label: siteLabels.boardMemberLabel,
    name: 'Regner Bæk Hessellund',
    email: 'hessellund@hotmail.com',
  },
  {
    label: siteLabels.boardMemberLabel,
    name: 'Kristian Schrøder',
    email: 'kschroder@live.dk',
  },
  {
    label: siteLabels.suppleant,
    name: 'Martin Johansen',
    email: 'himmelhunden@live.dk',
  },
  {
    label: siteLabels.suppleant,
    name: 'Poul Erik Pedersen',
    email: 'pehope1@gmail.com',
  },
]

export default boardMembers
