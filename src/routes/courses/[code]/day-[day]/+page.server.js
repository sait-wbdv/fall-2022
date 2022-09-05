import { error } from '@sveltejs/kit'
import { lessons } from '$lib/helpers/importLessons.js';
import { schedule } from '$lib/schedule'


export const load = async ({ params }) => {
	try {	
		// Course code
		const code = params.code;

		// Add leading zero to day if less than 10
		let day;
		if ( params.day < 10) {
			day = `0${params.day}`;
		} else {
			day = `${params.day}`;
		}
		const date = schedule.flat().find((item) => item.day === parseInt(params.day) && item.code === code).date;
		
		const lesson = lessons.find((item) => item.day === day && item.code === code)
		const lessonContent = await import(`../../../../lib/content/courses/${code}/${lesson.fileName}.md`);
		
		return {
			lessonContent: lessonContent.default.render().html,
			meta: {...lesson, date}
		}
	} catch(err) {
		throw error(404, err)
	}
}
