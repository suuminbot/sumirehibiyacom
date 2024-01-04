export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="container px-4 pt-40 md:pt-48 pb-12 m-auto">{children}</div>
  )
}
