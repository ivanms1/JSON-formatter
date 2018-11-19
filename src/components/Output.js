import React from 'react';

const Output = ({ output }) => (
	<div className="text-box">
		<h4>Output</h4>
		<textarea readOnly value={output} name="output" id="" cols="50" rows="30">
		</textarea>
	</div>
	)

export default Output