import { GOOGLE_EMAIL } from '$env/static/private'
import { redirect } from '@sveltejs/kit'

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

		throw redirect(303, '/exito')
	}
}