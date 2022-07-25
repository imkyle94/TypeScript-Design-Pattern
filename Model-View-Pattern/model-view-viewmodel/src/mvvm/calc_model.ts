export namespace CALC.mvvm {
	
	export class CalcModel {

		private firstNumber = 100;
	    private secondNumber = 10;
		
		constructor() {
	        
	    }

	    getFirstNumber(): number {
	        return this.firstNumber;
	    }

	    getSecondNumber(): number {
	        return this.secondNumber;
	    }

	    setFirstNumber(firstNumber: number): void {
	        this.firstNumber = firstNumber;
	    }

	    setSecondNumber(secondNumber: number): void {
	        this.secondNumber = secondNumber;
	    }

	    decreaseFirstNumber(): void {
	        this.firstNumber = this.firstNumber - 1;
	    }

	    decreaseSecondNumber(): void {
	        this.secondNumber = this.secondNumber - 1;
	    }

	    increaseFirstNumber(): void {
	        this.firstNumber = this.firstNumber + 1;
	    }

	    increaseSecondNumber(): void {
	        this.secondNumber = this.secondNumber + 1;
	    }
		
	}

}
