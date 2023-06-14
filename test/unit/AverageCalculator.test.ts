import Grade from "../../src/domain/Grade";
import SimpleAverageCalculator from "../../src/domain/SimpleAverageCalculator";
import WeightedAverageCalculator from "../../src/domain/WeightedAverageCalculator";

test("Deve calcular a média simples das notas", function () {
	const grades = [
		new Grade(1, "E1", 10, 0.3),
		new Grade(1, "E1", 9, 0.3),
		new Grade(1, "E1", 8, 0.4)
	];
	const averageCalculator = new SimpleAverageCalculator();
	const average = averageCalculator.calculate(grades);
	expect(average).toBe(9);
});

test("Deve calcular a média ponderada das notas", function () {
	const grades = [
		new Grade(1, "E1", 10, 0.3),
		new Grade(1, "E1", 9, 0.3),
		new Grade(1, "E1", 8, 0.4)
	];
	const averageCalculator = new WeightedAverageCalculator();
	const average = averageCalculator.calculate(grades);
	expect(average).toBe(8.9);
});
