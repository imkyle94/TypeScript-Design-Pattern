import {CALC as calc} from "./calc_command_receiver";

export namespace CALC.mvvm.command {

	import CalcCommandReceiver = calc.mvvm.command.CalcCommandReceiver;

	export abstract class AbstractCalcCommand {

		protected receiver: CalcCommandReceiver;
		
		constructor(receiver: CalcCommandReceiver) {
	        this.receiver = receiver;
	    }
	    
	    abstract execute(): void;
		
	}

}
