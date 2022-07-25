import {CALC as calc} from "./calc_model";
import {CALC as calc2} from "./calc_view";
import {CALC as calc3} from "./calc_presenter";

export namespace CALC.mvp {
	
	export class CalcMain {
		
		constructor(calculatorDivId: string) {
			let calculator = document.getElementById(calculatorDivId);
			
			let canvas = document.createElement("canvas");
			let div = document.createElement("div");
			
			div.appendChild(canvas);
			
			calculator.appendChild(div);
		
			let calcView = new calc2.mvp.CalcView(canvas);
			
			let calcModel = new calc.mvp.CalcModel();

			/*
			calcView.setCalcModel(calcModel);
			*/
			
	        let calcPresenter = new calc3.mvp.CalcPresenter();
	        
	        calcPresenter.setCalcModel(calcModel);
	        calcPresenter.setCalcView(calcView);
	        
	        calcView.setCalcPresenter(calcPresenter);
			
			calcView.redraw();
		}
		
	}
	
}
