import AverageCalculatorFactory from "../../domain/AverageCalculatorFactory";
import EnrollmentRepository from "../repository/EnrollmentRepository";
import GradeRepository from "../repository/GradeRepository";

export default class CalculateAverageByIdEnrollment {

	constructor (
		readonly enrollmentRepository: EnrollmentRepository, 
		readonly gradeRepository: GradeRepository
	) {
	}

	async execute (input: Input): Promise<void> {
		const enrollment = await this.enrollmentRepository.getEnrollment(input.idEnrollment);
		const grades = await this.gradeRepository.getGradesByIdEnrollment(input.idEnrollment);
		enrollment.average = AverageCalculatorFactory.create(input.type).calculate(grades);
		await this.enrollmentRepository.updateEnrollment(enrollment);
	}
}

type Input = {
	idEnrollment: number
	type: string
}
