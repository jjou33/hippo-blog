export type itemList = 'javascript' | 'code'

interface item {
  label: string
  href: string
}

type items = Array<item>

const itemSets: Record<itemList, items> = {
  javascript: [
    {
      label: 'Javscript',
      href: '/test',
    },
    {
      label: 'Javscript1',
      href: '/home',
    },
    {
      label: 'Javscript2',
      href: '/404',
    },
  ],
  code: [
    {
      label: 'code1',
      href: '/test',
    },
    {
      label: 'code2',
      href: '/home',
    },
    {
      label: 'code3',
      href: '/404',
    },
  ],
}

export { itemSets }
