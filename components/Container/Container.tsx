import { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren<{}>) => {
  return <div className="w-full max-w-screen-xl mx-auto px-4">{children}</div>
}

export default Container
