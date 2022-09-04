import { error } from '@sveltejs/kit'
import { assessments } from '../importAssessments.js';
import { dueDates } from '$lib/due-dates.js'

export const load = async ({ params }) => {
	try {	
		const assSchedule = dueDates.find((item) => item.code === params.code)?.dueDates || [];
		const assList = assSchedule.map((assessment) => {
			const {title, type, points, code} = assessments.find((item) => 
			item.code === params.code && 
			item.slug === assessment.slug)
			return {...assessment, title, type, points, code }
		}) || null;
		return {
			assessments: assList,
			code: params.code
		}
	} catch(err) {
		throw error(404, err)
	}
}
