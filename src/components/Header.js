import Logo from '../images/logo.svg'
import Button from './Button'

const Header = () => (
  <header className="container flex items-center justify-between border-b border-b-slate-400">
    <img src={Logo} alt="Car Marketplace" width="100" height="100" />

    <Button
      url="https://github.com/bengreenbank/car-marketplace"
      target="_blank"
      text="View on GitHub"
    />
  </header>
)

export default Header
