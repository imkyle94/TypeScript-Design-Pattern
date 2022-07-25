import {CALC as calc} from "../calc_view_model";

export namespace CALC.mvvm.command {

	import CalcViewModel = calc.mvvm.CalcViewModel;
	
	export class CalcCommandReceiver {

		private calcViewModel: CalcViewModel;
		
		constructor() {
	        
	    }

	    setCalcViewModel(calcViewModel: CalcViewModel) {
	        this.calcViewModel = calcViewModel;
	    }

	    increaseFirstNumber() {
	        this.calcViewModel.increaseFirstNumber();
	    }

	    decreaseFirstNumber() {
	        this.calcViewModel.decreaseFirstNumber();
	    }

	    increaseSecondNumber() {
	        this.calcViewModel.increaseSecondNumber();
	    }

	    decreaseSecondNumber() {
	        this.calcViewModel.decreaseSecondNumber();
	    }
		
	}

}   
