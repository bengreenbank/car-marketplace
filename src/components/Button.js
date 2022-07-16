export default (props) => (
  <a
    href={props.url}
    target={props.target}
    className="rounded text-white bg-rose-600 px-4 py-2.5"
  >
    {props.text}
  </a>
)
