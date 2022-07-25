import {CALC as calc} from "./calc_model";
import {CALC as calc2} from "./calc_view";

export namespace CALC.mvp {

	import CalcModel = calc.mvp.CalcModel;
    import CalcView = calc2.mvp.CalcView;
	
	export class CalcPresenter {

		private calcModel: CalcModel;
	    private calcView: CalcView;
		
		constructor() {
	        
	    }

	    setCalcModel(calcModel: CalcModel): void {
	        this.calcModel = calcModel;
	    }

	    setCalcView(calcView: CalcView): void {
	        this.calcView = calcView;
	    }

	    add(): number {
	        let firstNumber = this.calcModel.getFirstNumber();
	        let secondNumber = this.calcModel.getSecondNumber();
	        
	        return firstNumber + secondNumber;
	    }

	    divide(): number {
	        let firstNumber = this.calcModel.getFirstNumber();
	        let secondNumber = this.calcModel.getSecondNumber();
	        
	        return firstNumber / secondNumber;
	    }

	    multiply(): number {
	        let firstNumber = this.calcModel.getFirstNumber();
	        let secondNumber = this.calcModel.getSecondNumber();
	        
	        return firstNumber * secondNumber;
	    }

	    substract(): number {
	        let firstNumber = this.calcModel.getFirstNumber();
	        let secondNumber = this.calcModel.getSecondNumber();
	        
	        return firstNumber - secondNumber;
	    }

	    decreaseFirstNumber(): void {
	        this.calcModel.decreaseFirstNumber();
	        
	        this.calcView.redraw();
	    }

	    decreaseSecondNumber(): void {
	        this.calcModel.decreaseSecondNumber();
	        
	        this.calcView.redraw();
	    }

	    increaseFirstNumber(): void {
	        this.calcModel.increaseFirstNumber();
	        
	        this.calcView.redraw();
	    }

	    increaseSecondNumber(): void {
	        this.calcModel.increaseSecondNumber();
	        
	        this.calcView.redraw();
	    }

	    getFirstNumber(): number {
	        return this.calcModel.getFirstNumber();
	    }

	    getSecondNumber(): number {
	        return this.calcModel.getSecondNumber();
	    }
		
	}
	
}  
