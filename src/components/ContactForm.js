import React from 'react';

const ContactForm = () => {
	return (
		<>
			<div className='form-block'>
				<h2 className='h2 txt-white txt-center'>Looking for help with your next project?</h2>
				<form
					className='contact-form-block'
					name='website_contact_form'
					method='POST'
					action='/success'
					data-netlify='true'
					netlify-honeypot='bot-field'>
					<input type='hidden' name='bot-field' />
					<fieldset className='two-col'>
						<input type='text' name='first_name' placeholder='First Name' required />
						<input type='text' name='last_name' placeholder='Last Name' required />
						<input type='email' name='email' placeholder='Email' required />
						<input type='phone' name='phone' placeholder='Phone Number' required />
					</fieldset>
					<fieldset className='one-col'>
						<input type='text' name='address' placeholder='Street Address' required />
					</fieldset>
					<fieldset className='two-col'>
						<input type='text' name='city' placeholder='City' required />
						<input type='text' name='postal_code' placeholder='Postal Code' required />
					</fieldset>
					<fieldset className='one-col'>
						<textarea name='message' placeholder='How can we help?' required></textarea>
					</fieldset>
					<input type='submit' value='Get Free Quote' />
				</form>
			</div>
		</>
	);
};

export default ContactForm;
