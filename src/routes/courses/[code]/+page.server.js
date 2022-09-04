import { error } from '@sveltejs/kit'
import { courses } from '$lib/courses'


export const load = async ({ params }) => {
	try {	
		const course = courses.find((item) => item.code === params.code)
		console.log(course);
		return {
			course
		}
	} catch(err) {
		throw error(404, err)
	}
}
