import React, {useState} from 'react';
import ExtractFile from '../extract-file/extract-file';
import Task from '../task/task';
import Uploader from '../uploader/uploader';
import './container.scss';

const Container = () => {
    const [text, setText] = useState('Hello World');
    // ExtractFile();
    return (
        <div className="container">
            <Task/>           
            <Uploader />
        </div>
    )
}

export default Container;