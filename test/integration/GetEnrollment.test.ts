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

test("Deve calcular a média ponderada de um aluno e verificar as notas", async function () {
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
	expect(output.grades).toHaveLength(3);
	expect(output.grades.at(0)?.value).toBe(10);
	expect(output.grades.at(1)?.value).toBe(9);
	expect(output.grades.at(2)?.value).toBe(8);
});
