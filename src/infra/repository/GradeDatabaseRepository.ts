import GradeRepository from "../../application/repository/GradeRepository";
import pgp from "pg-promise";
import Grade from "../../domain/Grade";

export default class GradeDatabaseRepository implements GradeRepository {
	
	async getGradesByIdEnrollment(idEnrollment: number): Promise<Grade[]> {
		const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
		const gradesData = await connection.query("select * from tests.grade where id_enrollment = $1", [idEnrollment]);
		const grades: Grade[] = [];
		for (const gradeData of gradesData) {
			grades.push(new Grade(gradeData.id_grade, gradeData.examCode, parseFloat(gradeData.value), parseFloat(gradeData.weight)));
		}
		await connection.$pool.end();
		return grades;
	}

}