import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-accent-2">
      <Container>
        <div className="py-12">
          <div className="flex justify-center items-center">
            <a className="mx-4" href="https://github.com/amitrebala">
                <img alt="github logo" src={"/icons/github-fill.svg"} height={45} width={45} />
                <span className="invisible">Github</span>
            </a>
            <a className="mx-4"
              href="mailto:reddy.rebalaamit@gmail.com">
              <img alt="email logo" src={"/icons/mail-fill.svg"} height={45} width={45} />
              <span className="invisible">Email</span>
            </a>
            <a className="mx-4" href="https://www.linkedin.com/in/amit-reddy-rebala-310a2898/">
                <img alt="linkedin logo" src={"/icons/linkedin-box-fill.svg"} height={45} width={45} />
                <span className="invisible">LinkedIn</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
