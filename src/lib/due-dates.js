import { cpnt201DueDates } from '$lib/content/assessments/cpnt-201/due-dates.js'
import { dsgn270DueDates } from '$lib/content/assessments/dsgn-270/due-dates.js'
import { cpnt260DueDates } from '$lib/content/assessments/cpnt-260/due-dates.js'

export const dueDates = [
  {
    code: 'cpnt-201',
    dueDates: cpnt201DueDates
  },
  {
    code: 'dsgn-270',
    dueDates: dsgn270DueDates
  },
  {
    code: 'cpnt-260',
    dueDates: cpnt260DueDates
  },
]