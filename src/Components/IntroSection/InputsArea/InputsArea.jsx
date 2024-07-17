import React from 'react'
import style from './style.module.scss'

const InputsArea = () => {
	const [selectedValue, setSelectedValue] = React.useState('')

	return (
		<>
			<div className={style.container}>
				<h3 className={style.title}>
					Meet ***** number one workspace provider
				</h3>
				<form action='submit'>
					<input type='text' placeholder='Enter Your Name' />
					<input type='text' placeholder='Enter Your Mobile Number' />
					<input type='text' placeholder='Enter Your Email ID' />

					<select
						value={selectedValue}
						defaultValue={selectedValue}
						onChange={(e) => setSelectedValue(e.target.value)}>
						<option value='1'>Option 1</option>
						<option value='2'>Option 2</option>
						<option value='3'>Option 3</option>
						<option value='4'>Option 4</option>
						<option value='5'>Option 5</option>
					</select>

					<input type='button' value='Request For Call Back' />
				</form>
			</div>
		</>
	)
}

export default InputsArea
