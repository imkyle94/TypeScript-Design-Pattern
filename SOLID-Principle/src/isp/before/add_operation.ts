import { CALC as calc } from "./abstract_operation";

export namespace CALC.isp.before {
  import AbstractOperation = calc.isp.before.AbstractOperation;

  export class AddOperation extends AbstractOperation {
    constructor() {
      super();
    }

    operate(firstNumber: number, secondNumber: number): number {
      return firstNumber + secondNumber;
    }

    getOperator() {
      return "+";
    }

    toString() {
      return "AddOperation";
    }
  }
}
