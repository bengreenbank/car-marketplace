import Logo from '../images/logo.svg'
import Button from './Button'

export default () => (
  <header className="container flex justify-between items-center border-b border-b-slate-400">
    <img src={Logo} alt="Car Marketplace" width="100" height="100" />

    <Button
      url="https://github.com/bengreenbank/car-marketplace"
      target="_blank"
      text="View on GitHub"
    />
  </header>
)
