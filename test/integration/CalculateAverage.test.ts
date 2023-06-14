import EnrollmentRepository from "../../src/application/repository/EnrollmentRepository";
import GradeRepository from "../../src/application/repository/GradeRepository";
import CalculateAverage from "../../src/application/usecase/CalculateAverageByIdEnrollment";
import GetEnrollment from "../../src/application/usecase/GetEnrollment";
import Enrollment from "../../src/domain/Enrollment";
import Grade from "../../src/domain/Grade";
import SimpleAverageCalculator from "../../src/domain/SimpleAverageCalculator";
import WeightedAverageCalculator from "../../src/domain/WeightedAverageCalculator";
import EnrollmentDatabaseRepository from "../../src/infra/repository/EnrollmentDatabaseRepository";
import GradeDatabaseRepository from "../../src/infra/repository/GradeDatabaseRepository";

test("Deve calcular a média simples de um aluno", async function () {
	const enrollmentRepository = new EnrollmentDatabaseRepository();
	const gradeRepository = new GradeDatabaseRepository();
	// const enrollment = new Enrollment(1, "Rodrigo Branas", 0);
	// const enrollmentRepository: EnrollmentRepository = {
	// 	async getEnrollment (idEnrollment: number): Promise<Enrollment> {
	// 		return enrollment;
	// 	},
	// 	async updateEnrollment (updatedEnrollment: Enrollment): Promise<void> {
	// 		enrollment.average = updatedEnrollment.average;
	// 	}
	// }
	// const gradeRepository: GradeRepository = {
	// 	async getGradesByIdEnrollment (idEnrollment: number): Promise<Grade[]> {
	// 		return [
	// 			new Grade(1, "E1", 10, 0.3),
	// 			new Grade(1, "E1", 9, 0.3),
	// 			new Grade(1, "E1", 8, 0.4)
	// 		]
	// 	}
	// }
	const input = {
		idEnrollment: 1,
		type: "simple"
	}
	const calculateAverage = new CalculateAverage(enrollmentRepository, gradeRepository);
	await calculateAverage.execute(input);
	const getEnrollment = new GetEnrollment(enrollmentRepository, gradeRepository);
	const output = await getEnrollment.execute(input);
	expect(output.average).toBe(9);
});

test("Deve calcular a média ponderada de um aluno", async function () {
	const enrollmentRepository = new EnrollmentDatabaseRepository();
	const gradeRepository = new GradeDatabaseRepository();
	const input = {
		idEnrollment: 1,
		type: "weighted"
	}
	const calculateAverage = new CalculateAverage(enrollmentRepository, gradeRepository);
	await calculateAverage.execute(input);
	const getEnrollment = new GetEnrollment(enrollmentRepository, gradeRepository);
	const output = await getEnrollment.execute(input);
	expect(output.average).toBe(8.9);
});
