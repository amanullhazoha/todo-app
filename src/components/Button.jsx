/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
const Button = ({ text, type, ...rest }) => (
    <button type={type} {...rest}>
        {text}
    </button>
);

export default Button;
