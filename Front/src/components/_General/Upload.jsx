import React from 'react';

const Upload = ({ fileName, label, change, error }) =>
  <div className="upload-block">
    { error && <span className="upload-error-text"> {error} </span> }
    <label  className="upload">
      <input disabled={!!fileName} type="file" name="file" className="upload-input" onChange={change}/>
      <span className="btn upload-btn"><i className="fas fa-file-upload upload-icon"></i>{label}</span>
    </label>
    {!!fileName && <span className="file-name">{fileName}</span>}
  </div>

export default Upload;