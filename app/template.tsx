export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="container md:max-w-screen-sm m-auto hoge">{children}</div>
  );
}
