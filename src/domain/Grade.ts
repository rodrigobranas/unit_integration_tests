export default class Grade {

	constructor (readonly idGrade: number, readonly examName: string, readonly value: number, readonly weight: number) {
		if (value < 0) throw new Error("Invalid value");
		if (weight < 0 || weight > 1) throw new Error("Invalid weight");
	}

	calculateAverage () {
		return this.value * this.weight;
	}
}
