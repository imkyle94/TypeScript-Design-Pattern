import { CALC as calc } from "./add_operation";
import { CALC as calc2 } from "./substract_operation";
import { CALC as calc3 } from "./multiply_operation";
import { CALC as calc4 } from "./divide_operation";

export namespace CALC.ocp.before {
  import AddOperation = calc.ocp.before.AddOperation;
  import SubstractOperation = calc2.ocp.before.SubstractOperation;
  import MultiplyOperation = calc3.ocp.before.MultiplyOperation;
  import DivideOperation = calc4.ocp.before.DivideOperation;

  export class Calculator {
    private addOperation: AddOperation;
    private substractOperation: SubstractOperation;
    private multiplyOperation: MultiplyOperation;

    private divideOperation: DivideOperation;

    constructor() {}

    add(firstNumber: number, secondNumber: number): number {
      let answer = this.addOperation.operate(firstNumber, secondNumber);

      return answer;
    }

    substract(firstNumber: number, secondNumber: number): number {
      let answer = this.substractOperation.operate(firstNumber, secondNumber);

      return answer;
    }

    multiply(firstNumber: number, secondNumber: number): number {
      let answer = this.multiplyOperation.operate(firstNumber, secondNumber);

      return answer;
    }

    divide(firstNumber: number, secondNumber: number): number {
      let answer = this.divideOperation.operate(firstNumber, secondNumber);

      return answer;
    }

    setAddOperation(addOperation: AddOperation): void {
      this.addOperation = addOperation;
    }

    setSubstractOperation(substractOperation: SubstractOperation): void {
      this.substractOperation = substractOperation;
    }

    setMultiplyOperation(multiplyOperation: MultiplyOperation): void {
      this.multiplyOperation = multiplyOperation;
    }

    setDivideOperation(divideOperation: DivideOperation): void {
      this.divideOperation = divideOperation;
    }

    toString() {
      return "Calculator";
    }
  }
}
