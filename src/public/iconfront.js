import React from 'react';
import classnames from 'classnames';
import './iconfron.css'
const scriptElem = document.createElement('script');
scriptElem.src = '//at.alicdn.com/t/font_2396637_2u3m0ix17de.js';
document.body.appendChild(scriptElem);

function SuperIcon({ className, type, ...restProps }) {

    return (
        <svg
            className={classnames('icon', className)}
            aria-hidden="true"
            {...restProps}
        >
            <use xlinkHref={`#${type}`} />
        </svg>
    );
}

export default SuperIcon

