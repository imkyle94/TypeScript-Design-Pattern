import {CALC as calc} from "./calc_model";
import {CALC as calc2} from "./calc_view";
import {CALC as calc3} from "./calc_view_model";
import {CALC as calc4} from "./data_binder";
import {CALC as calc5} from "./command/calc_command_receiver";

export namespace CALC.mvvm {
	
	export class CalcMain {
		
		constructor(calculatorDivId: string) {
			let calculator = document.getElementById(calculatorDivId);
			
			let canvas = document.createElement("canvas");
			let div = document.createElement("div");
			
			div.appendChild(canvas);
			
			calculator.appendChild(div);
		
			let calcView = new calc2.mvvm.CalcView(canvas);
	        
	        let calcModel = new calc.mvvm.CalcModel();
	        
	        let calcViewModel = new calc3.mvvm.CalcViewModel();
	        
	        let dataBinder = new calc4.mvvm.DataBinder();
	        
	        dataBinder.setCalcViewModel(calcViewModel);
	        dataBinder.setCalcView(calcView);
	        
	        calcViewModel.setCalcModel(calcModel);
	        calcViewModel.setDataBinder(dataBinder);
	        
	        let calcCommandReceiver = new calc5.mvvm.command.CalcCommandReceiver();
	        calcCommandReceiver.setCalcViewModel(calcViewModel);
	        
	        calcView.setCalcCommandReceiver(calcCommandReceiver);
	        
	        dataBinder.dataBinding();
	        
	        calcView.redraw();
		}
		
	}
	
}
