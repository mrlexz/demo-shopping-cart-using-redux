import React from 'react';
const GroupProfile = (props) => {
    let styleBtn = {
        width: '200px',
        height: '200px',
        margin: '50px'
    }
   
    return (
        <div className="row">
            <div className="col-sm-3">
           <div className="groupfile">
            <img src="abc.jpg" alt="Image" width="350" height="300"/>
               <p className="group">Thành viên 1</p>
           </div>
           </div>
           <div className="col-sm-3">
           <div className="groupfile">
            <img src="abc.jpg" alt="Image" width="350" height="300"/>
               <p className="group">Thành viên 2</p>
           </div>
           </div>
           <div className="col-sm-3">
           <div className="groupfile">
            <img src="abc.jpg" alt="Image" width="350" height="300"/>
               <p className="group">Thành viên 3</p>
           </div>
           </div>
           <div className="col-sm-3">
           <div className="groupfile">
            <img src="abc.jpg" alt="Image" width="350" height="300"/>
               <p className="group">Thành viên 4</p>
           </div>
           </div>
           <div className="col-sm-3">
           <div className="groupfile">
            <img src="abc.jpg" alt="Image" width="350" height="300"/>
               <p className="group">Thành viên 5</p>
           </div>
           </div>
           <div className="col-sm-3">
           <div className="groupfile">
            <img src="abc.jpg" alt="Image" width="350" height="300"/>
               <p className="group">Thành viên 6</p>
           </div>
           </div>
        </div>
    
    );
}

export default GroupProfile;