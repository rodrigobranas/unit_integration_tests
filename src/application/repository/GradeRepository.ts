import Grade from "../../domain/Grade";

export default interface GradeRepository {
	getGradesByIdEnrollment (idEnrollment: number): Promise<Grade[]>;
}
