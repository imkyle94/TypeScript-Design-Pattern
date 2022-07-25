export namespace CALC.mvc {
	
	export class CalcModel {
		
		private firstNumber = 100;
		private secondNumber = 10;

		constructor() {
	        
	    }

	    getFirstNumber() {
	        return this.firstNumber;
	    }

	    getSecondNumber() {
	        return this.secondNumber;
	    }

	    setFirstNumber(firstNumber: number): void {
	        this.firstNumber = firstNumber;
	    }

	    setSecondNumber(secondNumber: number): void {
	        this.secondNumber = secondNumber;
	    }

	    decreaseFirstNumber() {
	        this.firstNumber = this.firstNumber - 1;
	    }

	    decreaseSecondNumber() {
	        this.secondNumber = this.secondNumber - 1;
	    }

	    increaseFirstNumber() {
	        this.firstNumber = this.firstNumber + 1;
	    }

	    increaseSecondNumber() {
	        this.secondNumber = this.secondNumber + 1;
	    }
		
	}
	
}   
