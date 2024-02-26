export default function hello() {
	// Define the styles for the message
	const messageStyles = [
		'background: #ffffff',
		'color: black',
		'padding: 10px 20px',
		'font-size: 12px',
		'font-weight: bold',
		'font-family: Helvetica, Arial, sans-serif',
	]

	const message = 'Site by: Bamo.J® => https://bamo-j.webflow.io/'

	// Output the styled message to the console
	console.log(`%c${message}`, messageStyles.join(';'))
}
