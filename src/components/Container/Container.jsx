import PropTypes from 'prop-types';
import { ContainerWrapper } from './Container.styled';

const Container = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
