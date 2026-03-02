export type CTFTableEntry = {
  name: string
  /** Slug or path to blog post, e.g. "infinite-qualifier" or "amazon-appsec/final" */
  postId?: string
  ranking: string
  openWriteups: 'ye' | 'nein' | 'nein?' | string
  date: string
  comment?: string
}

export const CTF_TABLE: CTFTableEntry[] = [
  { name: 'infinite ctf qualifier', postId: 'infinite-qualifier', ranking: '5th', openWriteups: 'ye', date: '9.27.2025', comment: '(8 hours)' },
  { name: 'amazon app sec ctf namer final', postId: 'amazon-appsec/final', ranking: '3rd', openWriteups: 'ye', date: '9.22-26.2025' },
  { name: 'holmes ctf', postId: 'holmes', ranking: 'dead (in game)', openWriteups: 'nein', date: '9.26.2025', comment: '(6 hours)' },
  { name: 'und cyberhawks national ctf qualifiers', postId: 'und-cyberhawksctf-qualifiers', ranking: '1st. ($$$)', openWriteups: 'ye', date: '9.22-26.2025' },
  { name: 'owasp secure coding', postId: 'owasp-secure-coding', ranking: '34', openWriteups: 'ye', date: '9.20.2025' },
  { name: 'fortidCTF', postId: 'fortidctf', ranking: '169st', openWriteups: 'nein', date: '9.13.2025' },
  { name: 'watCTF', postId: 'watctf-f25', ranking: '2nd (regional)', openWriteups: 'ye', date: '9.6.2025' },
  { name: 'imaginaryCTF', postId: 'imaginaryctf', ranking: 'varies', openWriteups: 'ye', date: '8.2025' },
  { name: 'corCTF', postId: 'corctf', ranking: '—', openWriteups: 'ye', date: '7.2025' },
  { name: 'nullconCTF', postId: 'nullconctf', ranking: '—', openWriteups: 'ye', date: '6.2025' },
  { name: 'snakeCTF', postId: 'snakectf-quals', ranking: '—', openWriteups: 'ye', date: '5.2025' },
  { name: 'ec council ctf (hackerverse)', ranking: '—', openWriteups: 'nein', date: '5.2025' },
  { name: 'scriptCTF', postId: 'scriptctf', ranking: '—', openWriteups: 'ye', date: '4.2025' },
  { name: 'sekaiCTF', postId: 'sekaictf', ranking: '—', openWriteups: 'ye', date: '4.2025' },
  { name: 'diana initiative', ranking: '—', openWriteups: 'nein', date: '4.2025' },
  { name: 'init.g (google)', ranking: '—', openWriteups: 'nein', date: '3.2025' },
  { name: 'dod sentinel', postId: 'dod-sentinel', ranking: '—', openWriteups: 'ye', date: '11.9.2025' },
  { name: 'ncl (spring 2025)', ranking: '—', openWriteups: 'nein', date: '3.2025' },
  { name: 'swampCTF', postId: 'swampctf', ranking: '—', openWriteups: 'ye', date: '11.30.2025' },
  { name: 'metaCTF', postId: 'metactf', ranking: '—', openWriteups: 'ye', date: '2.2025' },
  { name: 'ncae west overflow 2025', ranking: '—', openWriteups: 'nein', date: '1.2025' },
]
