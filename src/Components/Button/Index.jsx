const Button = (props) => {
  // destructering props
  const { classname, children } = props;
  return (
    <button
      className={`h-10 px-6 rounded-lg   ${classname} text-white`}
      type="submit"
    >
      {/* //children itu sebuah props uniq yg menampung isi dalam sebuah element */}
      {children}
    </button>
  );
};

export default Button;
