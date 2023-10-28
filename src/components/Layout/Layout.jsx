import { LayoutWrapper } from "./Lyout"
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return (
        <LayoutWrapper> 
            {children}
        </LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;