import PropTypes from 'prop-types';

const Menu = ({ children }) => {
    return <nav>{children}</nav>;
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
