import React from 'react';
import './uploader.scss';

export default class Uploader extends React.Component {
    state = {
        file: null
    }
    handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Hey');
        e.preventDefault();
        let reader: FileReader = new FileReader();
        let imgFile = e.target.files ? e.target.files[0] : null;
        reader.onloadend = () => {
            this.setState({
                file: imgFile
            });
        };
        if (imgFile) {
            reader.readAsDataURL(imgFile);
        };
    }
    render() {
        return (
            <div className="input__wrapper">
                <input type="file" name="file" id="input__file" className="input input__file" onChange={this.handleFileChange} onClick={() => console.log('WOOOOW')} multiple/>
                <label htmlFor="input__file" className="input__file-button">
                    <span className="input__file-icon-wrapper"><img className="input__file-icon" alt="Choose the file" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0yNDAuOTE1LDQyMC40MThjMC4wMDQsMC4wMDQsMC4wMDgsMC4wMDcsMC4wMTIsMC4wMTFjMC40OTMsMC40OTIsMS4wMTIsMC45NTksMS41NTEsMS40MDIgICAgIGMwLjI0NywwLjIwMywwLjUwOCwwLjM3OSwwLjc2MiwwLjU3YzAuMzAzLDAuMjI3LDAuNiwwLjQ2MiwwLjkxNSwwLjY3M2MwLjMwNCwwLjIwMywwLjYxOSwwLjM3OSwwLjkzMSwwLjU2NSAgICAgYzAuMjg2LDAuMTcxLDAuNTY1LDAuMzUsMC44NTksMC41MDdjMC4zMTgsMC4xNywwLjY0NSwwLjMxNCwwLjk3LDAuNDY3YzAuMzA2LDAuMTQ1LDAuNjA4LDAuMjk4LDAuOTIyLDAuNDI4ICAgICBjMC4zMTUsMC4xMywwLjYzNywwLjIzNiwwLjk1NywwLjM1YzAuMzM3LDAuMTIxLDAuNjY5LDAuMjUsMS4wMTMsMC4zNTRjMC4zMiwwLjA5NywwLjY0NSwwLjE2OCwwLjk2OSwwLjI0OSAgICAgYzAuMzUxLDAuMDg5LDAuNjk4LDAuMTg3LDEuMDU2LDAuMjU4YzAuMzc1LDAuMDc0LDAuNzUzLDAuMTE4LDEuMTMsMC4xNzJjMC4zMTEsMC4wNDQsMC42MTgsMC4xMDQsMC45MzMsMC4xMzUgICAgIGMxLjQsMC4xMzgsMi44MTEsMC4xMzgsNC4yMTEsMGMwLjMxNS0wLjAzMSwwLjYyMi0wLjA5LDAuOTMzLTAuMTM1YzAuMzc3LTAuMDU0LDAuNzU1LTAuMDk4LDEuMTMtMC4xNzIgICAgIGMwLjM1OC0wLjA3MSwwLjcwNS0wLjE2OSwxLjA1Ni0wLjI1OGMwLjMyMy0wLjA4MSwwLjY0OS0wLjE1MiwwLjk2OS0wLjI0OWMwLjM0NC0wLjEwNCwwLjY3Ny0wLjIzMywxLjAxMy0wLjM1NCAgICAgYzAuMzItMC4xMTUsMC42NDItMC4yMiwwLjk1Ny0wLjM1YzAuMzE0LTAuMTMsMC42MTYtMC4yODMsMC45MjItMC40MjhjMC4zMjUtMC4xNTMsMC42NTItMC4yOTcsMC45Ny0wLjQ2NyAgICAgYzAuMjk0LTAuMTU3LDAuNTczLTAuMzM3LDAuODU5LTAuNTA3YzAuMzEyLTAuMTg2LDAuNjI3LTAuMzYyLDAuOTMxLTAuNTY1YzAuMzE1LTAuMjExLDAuNjEyLTAuNDQ2LDAuOTE1LTAuNjczICAgICBjMC4yNTQtMC4xOSwwLjUxNS0wLjM2NywwLjc2Mi0wLjU3YzAuNTM5LTAuNDQzLDEuMDU4LTAuOTA5LDEuNTUxLTEuNDAyYzAuMDA0LTAuMDA0LDAuMDA4LTAuMDA3LDAuMDEyLTAuMDExbDE0OS4zMzMtMTQ5LjMzMyAgICAgYzguMzMxLTguMzMxLDguMzMxLTIxLjgzOSwwLTMwLjE3cy0yMS44MzktOC4zMzEtMzAuMTcsMEwyNzcuMzMzLDM1My44M1YyMS4zMzNDMjc3LjMzMyw5LjU1MSwyNjcuNzgyLDAsMjU2LDAgICAgIHMtMjEuMzMzLDkuNTUxLTIxLjMzMywyMS4zMzNWMzUzLjgzTDEyMS43NTIsMjQwLjkxNWMtOC4zMzEtOC4zMzEtMjEuODM5LTguMzMxLTMwLjE3LDBzLTguMzMxLDIxLjgzOSwwLDMwLjE3TDI0MC45MTUsNDIwLjQxOHogICAgICIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNNDA1LjMzMyw0NjkuMzMzSDEwNi42NjdjLTExLjc4MiwwLTIxLjMzMyw5LjU1MS0yMS4zMzMsMjEuMzMzUzk0Ljg4NSw1MTIsMTA2LjY2Nyw1MTJoMjk4LjY2NyAgICAgYzExLjc4MiwwLDIxLjMzMy05LjU1MSwyMS4zMzMtMjEuMzMzUzQxNy4xMTUsNDY5LjMzMyw0MDUuMzMzLDQ2OS4zMzN6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" width="25"/></span>
                    <span className="input__file-button-text">Choose the file</span>
                </label>
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