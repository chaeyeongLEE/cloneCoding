import PropTypes from 'prop-types';

export default function Button({text, isClick}) {
    return <>
        <button onClick={isClick}>{text}</button>
    </>
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
}