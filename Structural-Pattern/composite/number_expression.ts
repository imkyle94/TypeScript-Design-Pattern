import { CALC as calc } from "./abstract_expression";

export namespace CALC.composite {
  import AbstractExpression = calc.composite.AbstractExpression;

  export class NumberExpression extends AbstractExpression {
    private value: number;

    constructor(value: number) {
      super();

      this.value = value;
    }

    operate(): number {
      return this.value;
    }
  }
}
