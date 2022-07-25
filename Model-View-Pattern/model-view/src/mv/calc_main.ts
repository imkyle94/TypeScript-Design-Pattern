import {CALC as calc} from "./calc_model";
import {CALC as calc2} from "./calc_view";

export namespace CALC.mv {
	
	export class CalcMain {
		
		constructor(calculatorDivId: string) {
			let calculator = document.getElementById(calculatorDivId);
			
			let canvas = document.createElement("canvas");
			let div = document.createElement("div");
			
			div.appendChild(canvas);
			
			calculator.appendChild(div);
		
			let calcView = new calc2.mv.CalcView(canvas);
			
			let calcModel = new calc.mv.CalcModel();

			calcView.setCalcModel(calcModel);
			
			calcView.redraw();
		}
		
	}
	
}
