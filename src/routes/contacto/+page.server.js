import { GOOGLE_EMAIL } from '$env/static/private'
import { redirect } from '@sveltejs/kit'
import transporter from '$lib/emailSetup.server.js'

export const actions = {
	default: async({request}) => {
		const formData = await request.formData()
		
		const nombre = formData.get('nombre')
		const from = formData.get('correo')
		const telefono = formData.get('telefono')
		const body = formData.get('razon')

		let html = `<h2>De: ${nombre} - ${from}</h2><h3>Tel: ${telefono}</h3><pre>${body}</pre>`

		const message = {
			from: GOOGLE_EMAIL,
			to: 'dentavitalisclinica@gmail.com',
			bcc: 'alanmonroyb@gmail.com',
			subject: `Sitio Web - Consulta - ${nombre}`,
			text: body,
			html: html
		}

		const sendEmail = async (message) => {
			await new Promise((resolve, reject) => {
				transporter.sendMail(message, (err, info) => {
					if (err) {
						console.error(err)
						reject(err)
					} else {
						resolve(info)
					}
				})
			})
		}

		await sendEmail(message)

		throw redirect(303, '/exito')
	}
}