import React from 'react';
import { Helmet } from 'react-helmet';

const PageTittle = (props) => {
    return (
        <Helmet>
            <title>{props.title}-Volunteer Network</title>
        </Helmet>
    );
};

export default PageTittle;