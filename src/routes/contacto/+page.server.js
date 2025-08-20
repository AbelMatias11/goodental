import { redirect } from '@sveltejs/kit'

export const actions = {
	default: async({request}) => {
		const formData = await request.formData()
		
		const nombre = formData.get('nombre')
		const from = formData.get('correo')
		const telefono = formData.get('telefono')
		const body = formData.get('razon')

		let html = `<h2>De: ${nombre} - ${from}</h2><h3>Tel: ${telefono}</h3><pre>${body}</pre>`
		
		throw redirect(303, '/exito')
	}
}