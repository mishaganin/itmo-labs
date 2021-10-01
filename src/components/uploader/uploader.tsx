import React from 'react';

export default class Uploader extends React.Component {
    state = {
        file: null
    }
    handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e);
        let reader: FileReader = new FileReader();
        let imgFile = e.target.files ? e.target.files[0] : null;
        reader.onloadend = () => {
            this.setState({
                file: imgFile
            })
        }
        console.log(imgFile);
        if (imgFile) {
            reader.readAsDataURL(imgFile)
        };
    }
    render() {
        return (
            <div>
                <input type="file" onChange={this.handleFileChange}/>
            </div>
        )
    }  
}


















// import { ReadStream } from 'fs';
// import React, {useState} from 'react';

// const Uploader = () => {
//     const [file, setFile] = useState(null);
//     return (
//         <div>
//             <input type="file" onChange={
//                 (e) => {
//                     e.preventDefault();
//                     console.log(e);
//                     let reader = new FileReader();
//                     let imgFile = e ? e.target.files[0] : '';
//                     reader.onloadend = () => {
//                         setFile(imgFile);
//                     }
//                     reader.readAsDataURL(imgFile);
//                 }
//             }/>
//         </div>
//     )
// }

// export default Uploader;