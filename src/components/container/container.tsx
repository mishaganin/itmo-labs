import React from 'react';
import Page from '../page/page';
import Uploader from '../uploader/uploader';
import './container.scss';

const Container = () => {
    return (
        <div className="container">
            <Page />
            <Uploader />
        </div>
    )
}

export default Container;