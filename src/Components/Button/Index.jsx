const Button = (props) => {
  // destructering props
  const { classname, children, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 px-6 rounded-lg   ${classname} text-white`}
      type={type}
      // tangkap props onClick untuk event hadnler  di child component
      onClick={() => onClick()}
    >
      {/* //children itu sebuah props uniq yg menampung isi dalam sebuah element */}
      {children}
    </button>
  );
};

export default Button;
