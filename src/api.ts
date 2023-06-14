import express, { Request, Response } from "express";
import CalculateAverage from "./application/usecase/CalculateAverageByIdEnrollment";
import GetEnrollment from "./application/usecase/GetEnrollment";
import EnrollmentDatabaseRepository from "./infra/repository/EnrollmentDatabaseRepository";
import GradeDatabaseRepository from "./infra/repository/GradeDatabaseRepository";
import SimpleAverageCalculator from "./domain/SimpleAverageCalculator";
const app = express();
app.use(express.json());

const enrollmentRepository = new EnrollmentDatabaseRepository();
const gradeRepository = new GradeDatabaseRepository();

app.post("/enrollments/:idEnrollment/calculate_average", async function (request: Request, response: Response) {
	const input = {
		idEnrollment: parseInt(request.params.idEnrollment),
		type: request.body.type
	};
	const calculateAverage = new CalculateAverage(enrollmentRepository, gradeRepository);
	await calculateAverage.execute(input);
	response.json();
});

app.get("/enrollments/:idEnrollment", async function (request: Request, response: Response) {
	const input = {
		idEnrollment: parseInt(request.params.idEnrollment)
	};
	const getEnrollment = new GetEnrollment(enrollmentRepository, gradeRepository);
	const output = await getEnrollment.execute(input);
	response.json({
		average: output.average
	});
});

app.listen(3000);
