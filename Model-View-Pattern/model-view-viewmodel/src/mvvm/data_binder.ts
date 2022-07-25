import {CALC as calc} from "./calc_view_model";
import {CALC as calc2} from "./calc_view";

export namespace CALC.mvvm {

	import CalcViewModel = calc.mvvm.CalcViewModel;
    import CalcView = calc2.mvvm.CalcView;
	
	export class DataBinder {

		private calcViewModel: CalcViewModel;
	    private calcView: CalcView;
		
		constructor() {
	        
	    }
	    
	    setCalcViewModel(calcViewModel: CalcViewModel): void {
	        this.calcViewModel = calcViewModel;
	    }
	        
	    setCalcView(calcView: CalcView): void {
	        this.calcView = calcView;
	    }
	    
	    dataBinding(): void {
	        let firstNumber = this.calcViewModel.getFirstNumber();
	        let secondNumber = this.calcViewModel.getSecondNumber();
	        
	        let addResult = this.calcViewModel.add();
	        let substractResult = this.calcViewModel.substract();
	        let multiplyResult = this.calcViewModel.multiply();
	        let divideResult = this.calcViewModel.divide();
	        
	        this.calcView.setFirstNumber(firstNumber);
	        this.calcView.setSecondNumber(secondNumber);
	        
	        this.calcView.setAddResult(addResult);
	        this.calcView.setSubstractResult(substractResult);
	        this.calcView.setMultiplyResult(multiplyResult);
	        this.calcView.setDivideResult(divideResult);
	    }
	    
	    dataChanged(): void {
	        this.dataBinding();
	        
	        this.calcView.redraw();
	    }
		
	}

}  
