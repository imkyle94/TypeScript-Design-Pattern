import {CALC as calc} from "./calc_model";
import {CALC as calc2} from "./calc_view";
import {CALC as calc3} from "./calc_controller";

export namespace CALC.mvc {
	
	export class CalcMain {
		
		constructor(calculatorDivId: string) {
			let calculator = document.getElementById(calculatorDivId);
			
			let canvas = document.createElement("canvas");
			let div = document.createElement("div");
			
			div.appendChild(canvas);
			
			calculator.appendChild(div);
		
			let calcView = new calc2.mvc.CalcView(canvas);
			
			let calcModel = new calc.mvc.CalcModel();

			calcView.setCalcModel(calcModel);
			
	        let calcController = new calc3.mvc.CalcController();
	        
	        calcController.setCalcModel(calcModel);
	        calcController.setCalcView(calcView);
	        
	        calcView.setCalcController(calcController);
			
			calcView.redraw();
		}
		
	}
	
}
