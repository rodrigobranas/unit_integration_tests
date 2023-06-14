import AverageCalculator from "./AverageCalculator";
import Grade from "./Grade";

export default class WeightedAverageCalculator implements AverageCalculator {

	calculate (grades: Grade[]) {
		let average = 0;
		for (const grade of grades) {
			average += grade.calculateAverage();
		}
		return Math.round(average*100)/100;
	}
}
