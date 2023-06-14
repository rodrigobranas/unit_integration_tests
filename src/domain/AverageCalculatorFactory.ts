import AverageCalculator from "./AverageCalculator";
import SimpleAverageCalculator from "./SimpleAverageCalculator";
import WeightedAverageCalculator from "./WeightedAverageCalculator";

export default class AverageCalculatorFactory {
	static create (type: string): AverageCalculator {
		if (type === "simple") return new SimpleAverageCalculator();
		if (type === "weighted") return new WeightedAverageCalculator();
		throw new Error("Invalid type");
	}
}
