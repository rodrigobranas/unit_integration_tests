export default class Enrollment {

	constructor (readonly idEnrollment: number, readonly studentName: string, public average: number) {
		if (average < 0) throw new Error("Invalid average");
	}
}
