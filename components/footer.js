import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex justify-between items-center mt-20 py-20 border-t border-paleyYellow-dark">
          <p>©2021 Sumire Hibiya</p>
          <div className="flex">
            <a
              href="https://twitter.com/suuminbot"
              className="p-2 mr-2"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} width="24" />
            </a>
            <a
              href="https://github.com/suuminbot"
              className="p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'github']} width="24" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
