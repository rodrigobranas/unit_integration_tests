import Grade from "./Grade";

export default interface AverageCalculator {
	calculate (grades: Grade[]): number;
}
