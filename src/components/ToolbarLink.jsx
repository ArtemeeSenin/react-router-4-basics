import React from 'react';
import { NavLink } from 'react-router-dom';

function ToolbarLink({children, ...rest}) {
    return (
        <NavLink
            activeClassName="mdc-tab--active"
            className="mdc-tab"
            {...rest}

            >{children}</NavLink>
    );
}

export default ToolbarLink;
