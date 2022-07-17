import NumberFormat from 'react-number-format'

const Card = (props) => (
  <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.item.year} {props.item.make} {props.item.model}
    </h3>

    <p className="mb-3 text-xl font-bold tracking-tight text-gray-900">
      <NumberFormat
        value={props.item.price}
        thousandSeparator={true}
        displayType="text"
        prefix={'£'}
      />
    </p>

    <ul className="mb-4 flex flex-col gap-2 font-normal capitalize text-gray-700 dark:text-gray-400">
      <li>{props.item.colour}</li>

      <li>{props.item.fuel}</li>

      <li>{props.item.gearbox}</li>

      <li>
        <NumberFormat
          value={props.item.mileage}
          thousandSeparator={true}
          displayType="text"
          suffix=" miles"
          className="lowercase"
        />
      </li>
    </ul>

    <button className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Enquire
    </button>
  </div>
)

export default Card
