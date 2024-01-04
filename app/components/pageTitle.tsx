interface pageTitleProps {
  text: string
}

const pageTitle: React.FC<pageTitleProps> = ({ text }) => {
  return <h1 className="text-4xl font-display tracking-wide mb-8">{text}</h1>
}

export default pageTitle
