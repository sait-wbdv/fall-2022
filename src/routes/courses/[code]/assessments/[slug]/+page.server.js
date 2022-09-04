import { error } from '@sveltejs/kit'
import { assessments } from '../../importAssessments';
import { dueDates } from '$lib/due-dates.js'

export const load = async ({ params }) => {
	try {	
		// Course code
		const code = params.code;
		const slug = params.slug;
		const assSchedule = dueDates.find((item) => item.code === params.code).dueDates;
		const { due, status } = assSchedule.find((item) => item.slug === params.slug);
		
		const assessment = assessments.find((item) => item.slug === params.slug && item.code === params.code);
		
		const content = await import(`../../../../../lib/content/assessments/${assessment.code}/${assessment.slug}.md`);
		return {
			content: content.default.render().html,
			meta: {...assessment, due, status}
		}
	} catch(err) {
		throw error(404, err)
	}
}
