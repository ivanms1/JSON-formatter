import React from 'react';

const Input = ({ onChange }) => (
	<div className="text-box">
		<h4>Input</h4>
		<textarea onChange={onChange}
					  name="input"
					  id="texarea"
					  cols="50"
					  rows="32">
		</textarea>
	</div>
	)

export default Input