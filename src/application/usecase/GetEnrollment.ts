import pgp from "pg-promise";
import EnrollmentRepository from "../repository/EnrollmentRepository";
import GradeRepository from "../repository/GradeRepository";

export default class GetEnrollment {

	constructor (
		readonly enrollmentRepository: EnrollmentRepository, 
		readonly gradeRepository: GradeRepository
	) {
	}

	async execute (input: Input): Promise<Output> {
		const enrollment = await this.enrollmentRepository.getEnrollment(input.idEnrollment);
		const grades = await this.gradeRepository.getGradesByIdEnrollment(input.idEnrollment);
		const output: Output = {
			average: enrollment.average,
			grades: []
		}
		for (const grade of grades) {
			output.grades.push({ examName: grade.examName, value: grade.value, weight: grade.weight });
		}
		return output;
	}
}

type Input = {
	idEnrollment: number
}

type Output = {
	average: number,
	grades: { examName: string, value: number, weight: number }[]
}