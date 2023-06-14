import Grade from "../../src/domain/Grade"

test("Deve criar uma nota", function () {
	const grade = new Grade(1, "E1", 10, 0.3);
	expect(grade.calculateAverage()).toBe(3);
});
