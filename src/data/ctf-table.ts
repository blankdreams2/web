export type TableEntryCategory = 'ctf' | 'project' | 'tools' | 'education'

export type CTFTableEntry = {
  name: string
  /** Slug or path to blog post, e.g. "infinite-qualifier" or "amazon-appsec/final" */
  postId?: string
  /** Category for filtering/grouping. CTF, projects, tools, education — table shows all (writeups + non-writeups) */
  category?: TableEntryCategory
  ranking: string
  /** ye = has writeup, nein/nein?/no = no writeup yet — both shown in table */
  openWriteups: 'ye' | 'nein' | 'nein?' | 'no' | string
  date: string
  comment?: string
}

export const CTF_TABLE: CTFTableEntry[] = [
  {
    name: 'infinite ctf qualifier',
    postId: 'infinite-qualifier',
    ranking: '5th',
    openWriteups: '🌹',
    date: '9.27.2025',
    comment: 'attack/defense (2 boxes) — automation to cheese the bottom teams the strat;',
  },
  {
    name: 'amazon app sec ctf namer final',
    postId: 'amazon-appsec/final',
    ranking: '3rd',
    openWriteups: 'nein',
    date: '9.26.2025 (6 hours)',
    comment: '🐧 should not have gone to lunch',
  },
  {
    name: 'holmes ctf',
    postId: 'holmes',
    ranking: 'dead (in game)',
    openWriteups: 'ye',
    date: '9.22-26.2025',
    comment: "forensics main players are having a blast with this. I'm dead in the water though.",
  },
  {
    name: 'und cyberhawks national ctf qualifiers',
    postId: 'und-cyberhawksctf-qualifiers',
    ranking: '5th',
    openWriteups: 'nein',
    date: '9.16-20.2025',
    comment: 'in such a short notice with no online-option for the final...while the flight ticket is 4 digits. BROTHERRRR 🤷🏽‍♀️. They offer an online option but no prize',
  },
  {
    name: 'owasp secure coding',
    postId: 'owasp-secure-coding',
    ranking: '1st. ($$$)',
    openWriteups: 'nein',
    date: '9.19-21.2025',
    comment: '💀.',
  },
  {
    name: 'fortidCTF',
    postId: 'fortidctf',
    ranking: '34',
    openWriteups: 'ye',
    date: '9.12-14.2025',
    comment: 'harder than i thought',
  },
  {
    name: 'amazon appsec ctf - namer quals',
    postId: 'amazon-appsec',
    ranking: '11th',
    openWriteups: 'nein',
    date: '9.11-13.2025',
    comment: 'great challenges from htb (no wus tho).',
  },
  {
    name: 'watCTF',
    postId: 'watctf-f25',
    ranking: '64th',
    openWriteups: 'ye',
    date: '9.9-11.2025',
    comment: 'classic waterloo.',
  },
  {
    name: 'imaginaryCTF',
    postId: 'imaginaryctf',
    ranking: '48th',
    openWriteups: 'ye',
    date: '9.5-7.2025',
    comment: 'a bunch of godlike ctf players.',
  },
  {
    name: 'corCTF',
    postId: 'corctf',
    ranking: '< 100th',
    openWriteups: 'ye',
    date: '9.4-5.2025',
    comment: 'will come back next year.',
  },
  {
    name: 'nullconCTF',
    postId: 'nullconctf',
    ranking: '39th',
    openWriteups: 'ye',
    date: '8.29-31.2025',
    comment: 'meh.',
  },
  {
    name: 'snakeCTF',
    postId: 'snakectf-quals',
    ranking: '41st',
    openWriteups: 'ye',
    date: '8.29-30.2025',
    comment: 'same as above.',
  },
  {
    name: 'ec council ctf (hackerverse)',
    ranking: '91 (atm)',
    openWriteups: 'nein?',
    date: 'dunno',
    comment: 'L ctf and L challenges. feels like a scam',
  },
  {
    name: 'scriptCTF',
    postId: 'scriptctf',
    ranking: '169st',
    openWriteups: 'ye',
    date: '8.15-17.2025',
    comment: 'disappointed in myself.',
  },
  {
    name: 'sekaiCTF',
    postId: 'sekaictf',
    ranking: 'aksjhdqawnbd Iciuqhgcqb',
    openWriteups: 'ye',
    date: 'we dont talk about this',
    comment: 'I was baffled, cooked, folded, and crumbled beyond belief.',
  },
  {
    name: 'diana initative',
    ranking: '2nd',
    openWriteups: 'no',
    date: '8.4.2025',
    comment: 'should have napped the first place.',
  },
  {
    name: 'init.g (google)',
    ranking: '1st',
    openWriteups: 'no',
    date: '8.8.2025',
    comment: 'how?',
  },
  {
    name: 'dod sentinel',
    postId: 'dod-sentinel',
    ranking: '29th',
    openWriteups: 'ye',
    date: '6.17.2025',
    comment: 'regret.',
  },
  {
    name: 'ncl (spring 2025)',
    ranking: '38th (solo) / 46th (team)',
    openWriteups: 'no',
    date: '1.27.2025 - 5.24.2025',
    comment: 'regret.',
  },
  {
    name: 'swampCTF',
    postId: 'swampctf',
    ranking: '42nd',
    openWriteups: 'ye',
    date: '3.28.2025',
    comment: 'second ctf.',
  },
  {
    name: 'metaCTF',
    postId: 'metactf',
    ranking: 'varies',
    openWriteups: 'ye',
    date: '3.30.2025',
    comment: 'best organizer / best support team.',
  },
  {
    name: 'ncae west overflow 2025',
    ranking: '2nd (regional)',
    openWriteups: 'nein',
    date: '3.16.2025',
    comment: 'first ctf. (L)',
  },
]
