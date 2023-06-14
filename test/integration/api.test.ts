import axios from "axios";

test("Deve calcular a média de um aluno", async function () {
	const idEnrollment = 1;
	const input = {
		type: "simple"
	};
	await axios.post(`http://localhost:3000/enrollments/${idEnrollment}/calculate_average`, input);
	const response = await axios.get(`http://localhost:3000/enrollments/${idEnrollment}`);
	const output = response.data;
	expect(output.average).toBe(9);
});
