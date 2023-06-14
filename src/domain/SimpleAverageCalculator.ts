import AverageCalculator from "./AverageCalculator";
import Grade from "./Grade";

export default class SimpleAverageCalculator implements AverageCalculator {

	calculate (grades: Grade[]) {
		let total = 0;
		for (const grade of grades) {
			total += grade.value;
		}
		const average = total/grades.length;
		return average;
	}
}
