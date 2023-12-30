import React from 'react'

const Test2 = () => {
  return (
    <div className='form-container'>
      	<div class="upload-files-container">
		<div class="drag-file-area">
			{/* <span class="material-icons-outlined upload-icon"> file_upload </span> */}
			<h3 class="dynamic-message"> Drag & drop any file here </h3>
			<label class="label"> or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span> </label>
		</div>
		<span class="cannot-upload-message"> <span class="material-icons-outlined">error</span> Please select a file first <span class="material-icons-outlined cancel-alert-button">cancel</span> </span>
		<div class="file-block">
			<div class="file-info"> <span class="material-icons-outlined file-icon">description</span> <span class="file-name"> </span> | <span class="file-size">  </span> </div>
			<span class="material-icons remove-file-icon">delete</span>
			<div class="progress-bar"> </div>
		</div>
		<button type="button" class="upload-button"> Upload </button>
	</div>
    </div>
  )
}

export default Test2
