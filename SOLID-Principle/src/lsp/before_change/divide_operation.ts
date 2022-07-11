import { CALC as calc } from "./abstract_operation";

export namespace CALC.lsp.before {
  import AbstractOperation = calc.lsp.before.AbstractOperation;

  export class DivideOperation extends AbstractOperation {
    constructor() {
      super();
    }

    operate(firstNumber: number, secondNumber: number): number {
      return firstNumber / secondNumber;
    }

    toString() {
      return "DivideOperation";
    }
  }
}
