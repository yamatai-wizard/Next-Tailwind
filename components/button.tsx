const Button = (props) => (
  <button
    type="button"
    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white ${props.color} hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
  >
    {props.text}
  </button>
);

export default Button;
