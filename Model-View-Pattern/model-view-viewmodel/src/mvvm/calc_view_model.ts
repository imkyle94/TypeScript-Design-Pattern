import {CALC as calc} from "./calc_model";
import {CALC as calc2} from "./data_binder";

export namespace CALC.mvvm {

	import CalcModel = calc.mvvm.CalcModel;
    import DataBinder = calc2.mvvm.DataBinder;
	
	export class CalcViewModel {

		private calcModel: CalcModel;
	    private dataBinder: DataBinder;
		
		constructor() {
	        
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
	        
	        this.dataBinder.dataChanged();
	    }

	    decreaseSecondNumber(): void {
	        this.calcModel.decreaseSecondNumber();
	        
	        this.dataBinder.dataChanged();
	    }

	    increaseFirstNumber(): void {
	        this.calcModel.increaseFirstNumber();
	        
	        this.dataBinder.dataChanged();
	    }

	    increaseSecondNumber(): void {
	        this.calcModel.increaseSecondNumber();
	        
	        this.dataBinder.dataChanged();
	    }

	    getFirstNumber(): number {
	        return this.calcModel.getFirstNumber();
	    }

	    getSecondNumber(): number {
	        return this.calcModel.getSecondNumber();
	    }

	    setCalcModel(calcModel: CalcModel): void {
	        this.calcModel = calcModel;
	    }

	    setDataBinder(dataBinder: DataBinder): void {
	        this.dataBinder = dataBinder;
	    }
		
	}
	
}
