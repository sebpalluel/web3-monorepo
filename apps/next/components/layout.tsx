import type { ReactChildren } from 'react'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
