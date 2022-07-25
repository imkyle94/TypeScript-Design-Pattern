import {CALC as calc} from "./calc_command_receiver";
import {CALC as calc2} from "./abstract_calc_command";

export namespace CALC.mvvm.command {
	
	import AbstractCalcCommand = calc2.mvvm.command.AbstractCalcCommand;
	import CalcCommandReceiver = calc.mvvm.command.CalcCommandReceiver;
	
	export class IncreaseFirstNumberCalcCommand extends AbstractCalcCommand {
		
		constructor(receiver: CalcCommandReceiver) {
			super(receiver);
	    }
		
		execute() {
	        this.receiver.increaseFirstNumber();
	    }
	}

}
