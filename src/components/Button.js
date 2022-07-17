const Button = (props) => (
  <a
    href={props.url}
    target={props.target}
    className="rounded bg-rose-600 px-4 py-2.5 text-white"
  >
    {props.text}
  </a>
)

export default Button
