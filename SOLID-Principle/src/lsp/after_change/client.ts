import { CALC as calc } from "./calculator";
import { CALC as calc2 } from "./add_operation";
import { CALC as calc3 } from "./substract_operation";
import { CALC as calc4 } from "./multiply_operation";
import { CALC as calc5 } from "./divide_operation";

export namespace CALC.lsp.after {
  import Calculator = calc.lsp.after.Calculator;
  import AddOperation = calc2.lsp.after.AddOperation;
  import SubstractOperation = calc3.lsp.after.SubstractOperation;
  import MultiplyOperation = calc4.lsp.after.MultiplyOperation;
  import DivideOperation = calc5.lsp.after.DivideOperation;

  export class Client {
    constructor() {}

    main() {
      let calculator = new Calculator();

      let firstNumber = 100;
      let secondNumber = 20;

      let operation = new AddOperation();

      let answer = calculator.calculate(operation, firstNumber, secondNumber);

      console.log(firstNumber + "+" + secondNumber + " = " + answer);

      operation = new SubstractOperation();

      answer = calculator.calculate(operation, firstNumber, secondNumber);

      console.log(firstNumber + "-" + secondNumber + " = " + answer);

      operation = new MultiplyOperation();

      answer = calculator.calculate(operation, firstNumber, secondNumber);

      console.log(firstNumber + "*" + secondNumber + " = " + answer);

      secondNumber = 0;
      operation = new DivideOperation();

      answer = calculator.calculate(operation, firstNumber, secondNumber);

      console.log(firstNumber + "/" + secondNumber + " = " + answer);
    }

    toString() {
      return "Client";
    }
  }
}
