import EnrollmentRepository from "../../application/repository/EnrollmentRepository";
import Enrollment from "../../domain/Enrollment";
import pgp from "pg-promise";

export default class EnrollmentDatabaseRepository implements EnrollmentRepository {

	async getEnrollment(idEnrollment: number): Promise<Enrollment> {
		const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
		const [enrollmentData] = await connection.query("select * from tests.enrollment where id_enrollment = $1", [idEnrollment]);
		const enrollment = new Enrollment(enrollmentData.id_enrollment, enrollmentData.student_name, parseFloat(enrollmentData.average));
		await connection.$pool.end();
		return enrollment;
	}

	async updateEnrollment(enrollment: Enrollment): Promise<void> {
		const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
		await connection.query("update tests.enrollment set average = $1 where id_enrollment = $2", [enrollment.average, enrollment.idEnrollment]);
		await connection.$pool.end();
	}

}
