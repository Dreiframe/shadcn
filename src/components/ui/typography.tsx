import { ReactNode } from 'react'

// https://ui.shadcn.com/docs/components/typography

type Props = {
  children: ReactNode
}

export function TH1(props: Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  )
}

export function TH2(props: Props) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  )
}

export function TH3(props: Props) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  )
}

export function TH4(props: Props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  )
}

export function TP(props: Props) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {props.children}
    </p>
  )
}

export function TS(props: Props) {
  return <div className="text-sm font-medium leading-none">{props.children}</div>
}

export function TM(props: Props) {
  return <div className="text-sm text-muted-foreground">{props.children}</div>
}

export function TL(props: Props) {
  return <div className="text-lg font-semibold">{props.children}</div>
}
