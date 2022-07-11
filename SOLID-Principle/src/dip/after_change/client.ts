import { CALC as calc } from "./calculator";
import { CALC as calc2 } from "./add_operation";
import { CALC as calc3 } from "./substract_operation";
import { CALC as calc4 } from "./multiply_operation";
import { CALC as calc5 } from "./divide_operation";

export namespace CALC.dip.after {
  import Calculator = calc.dip.after.Calculator;
  import AddOperation = calc2.dip.after.AddOperation;
  import SubstractOperation = calc3.dip.after.SubstractOperation;
  import MultiplyOperation = calc4.dip.after.MultiplyOperation;
  import DivideOperation = calc5.dip.after.DivideOperation;

  export class Client {
    constructor() {}

    main(): void {
      let after = CALC.dip.after;

      let calculator = new Calculator();

      let firstNumber = 100;
      let secondNumber = 20;

      let operation = new AddOperation();
      calculator.setOperation(operation);

      let answer = calculator.calculate(firstNumber, secondNumber);

      console.log(firstNumber + "+" + secondNumber + " = " + answer);

      operation = new SubstractOperation();
      calculator.setOperation(operation);

      answer = calculator.calculate(firstNumber, secondNumber);

      console.log(firstNumber + "-" + secondNumber + " = " + answer);

      operation = new MultiplyOperation();
      calculator.setOperation(operation);

      answer = calculator.calculate(firstNumber, secondNumber);

      console.log(firstNumber + "*" + secondNumber + " = " + answer);

      operation = new DivideOperation();
      calculator.setOperation(operation);

      answer = calculator.calculate(firstNumber, secondNumber);

      console.log(firstNumber + "/" + secondNumber + " = " + answer);
    }

    toString(): string {
      return "Client";
    }
  }
}
