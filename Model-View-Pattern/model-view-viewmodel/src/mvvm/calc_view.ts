import {CALC as calc} from "./command/calc_command_receiver";
import {CALC as calc2} from "../struct/rectangle";
import {CALC as calc3} from "./command/increase_first_number_calc_command";
import {CALC as calc4} from "./command/decrease_first_number_calc_command";
import {CALC as calc5} from "./command/increase_second_number_calc_command";
import {CALC as calc6} from "./command/decrease_second_number_calc_command";

export namespace CALC.mvvm {
	
    let PADDING = 30;
    let COLUMN_WIDTH = 60;
    let ROW_HEIGHT = 24;
    let BUTTON_SIZE = 24;

    import CalcCommandReceiver = calc.mvvm.command.CalcCommandReceiver;
    import Rectangle = calc2.struct.Rectangle;
    
    export class CalcView {

        private canvas: any; 
        private ctx: any;
            
        private calcCommandReceiver: CalcCommandReceiver;
        
        private firstNumber = 0;
        private secondNumber = 0;
        
        private addResult = 0;
        private substractResult = 0;
        private multiplyResult = 0;
        private divideResult = 0;

        private firstIncreaseButtonArea: Rectangle;
        private firstDecreaseButtonArea: Rectangle;

        private secondIncreaseButtonArea: Rectangle;
        private secondDecreaseButtonArea: Rectangle;
    	
    	constructor(canvas: any) {
        	this.canvas = canvas;
    		
    		this.canvas.width = 300;
    		this.canvas.height = 150;
    		
    		this.canvas.style.border = "1px solid gray";
    		this.canvas.style.cursor = "pointer";
    		
    		this.ctx = this.canvas.getContext("2d");
            
            this.firstIncreaseButtonArea = new Rectangle(PADDING, PADDING - ROW_HEIGHT, BUTTON_SIZE, BUTTON_SIZE);
            this.firstDecreaseButtonArea = new Rectangle(PADDING + BUTTON_SIZE + 2, PADDING - ROW_HEIGHT, BUTTON_SIZE, BUTTON_SIZE);
            
            this.secondIncreaseButtonArea = new Rectangle(PADDING + COLUMN_WIDTH * 2, PADDING - ROW_HEIGHT, BUTTON_SIZE, BUTTON_SIZE);
            this.secondDecreaseButtonArea = new Rectangle(PADDING + COLUMN_WIDTH * 2 + BUTTON_SIZE + 2, PADDING - ROW_HEIGHT, BUTTON_SIZE, BUTTON_SIZE);  

    		this.canvas.addEventListener("mousedown", this.press.bind(this), false);
        }

        redraw(): void {
        	this.ctx.fillStyle = "white";
    		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.drawPlusButton(this.firstIncreaseButtonArea);
            this.drawMinusButton(this.firstDecreaseButtonArea);
            
            this.drawPlusButton(this.secondIncreaseButtonArea);
            this.drawMinusButton(this.secondDecreaseButtonArea);
            
            let offsetX = PADDING;
            let offsetY = PADDING;
            
            offsetY += ROW_HEIGHT;
            let operator = "+";
            
            this.drawResult(operator, Math.floor(this.addResult), offsetX, offsetY);
            
            offsetY += ROW_HEIGHT;
            operator = "-";
            
            this.drawResult(operator, Math.floor(this.substractResult), offsetX, offsetY);
            
            offsetY += ROW_HEIGHT;
            operator = "*";
            
            this.drawResult(operator, Math.floor(this.multiplyResult), offsetX, offsetY);
            
            offsetY += ROW_HEIGHT;
            operator = "/";
            
            this.drawResult(operator, Math.floor(this.divideResult), offsetX, offsetY);
        }
              
        drawResult(operator: string, result: number, startX: number, startY: number): void {
            let offsetX = startX;
            let offsetY = startY;
            this.drawText(String(this.firstNumber), offsetX, offsetY);
            
            offsetX += COLUMN_WIDTH;
            this.drawText(operator, offsetX, offsetY);
            
            offsetX += COLUMN_WIDTH;
            this.drawText(String(this.secondNumber), offsetX, offsetY);
            
            offsetX += COLUMN_WIDTH;
            this.drawText("=", offsetX, offsetY);
            
            offsetX += COLUMN_WIDTH;
            this.drawText(String(result), offsetX, offsetY);
        }
            
        drawPlusButton(buttonArea: Rectangle): void {
            let sx = buttonArea.x;
            let ex = buttonArea.x + buttonArea.width;
            
            let sy = buttonArea.y;
            let ey = buttonArea.y + buttonArea.height;
        
            let cx = buttonArea.x + buttonArea.width / 2;
            let cy = buttonArea.y + buttonArea.height / 2;
            
            this.drawRectangle(sx, sy, ex, ey);
            
            this.drawLine(sx + 5, cy, ex - 5, cy);
            this.drawLine(cx, sy + 5, cx, ey - 5);
        }
            
        drawMinusButton(buttonArea: Rectangle): void {
            let sx = buttonArea.x;
            let ex = buttonArea.x + buttonArea.width;
            
            let sy = buttonArea.y;
            let ey = buttonArea.y + buttonArea.height;
            
            let cy = buttonArea.y + buttonArea.height / 2;
            
            this.drawRectangle(sx, sy, ex, ey);
            this.drawLine(sx + 5, cy, ex - 5, cy);
        }

        press(e: any): void {
        	console.log("press");
        	
    		let canvas = this.canvas;
    		
    		let pressPoint = this.relativePosition(e, canvas);
    		
    		let mouseX = pressPoint.x;
            let mouseY = pressPoint.y;
            
            let IncreaseFirstNumberCalcCommand = calc3.mvvm.command.IncreaseFirstNumberCalcCommand;
            let DecreaseFirstNumberCalcCommand = calc4.mvvm.command.DecreaseFirstNumberCalcCommand;
            let IncreaseSecondNumberCalcCommand = calc5.mvvm.command.IncreaseSecondNumberCalcCommand;
            let DecreaseSecondNumberCalcCommand = calc6.mvvm.command.DecreaseSecondNumberCalcCommand;
            
            if (this.firstIncreaseButtonArea.contains(mouseX, mouseY)) {
                let command = new IncreaseFirstNumberCalcCommand(this.calcCommandReceiver);
                command.execute();
            }
            else if (this.firstDecreaseButtonArea.contains(mouseX, mouseY)) {
                let command = new DecreaseFirstNumberCalcCommand(this.calcCommandReceiver);
                command.execute();
            }
            else if (this.secondIncreaseButtonArea.contains(mouseX, mouseY)) {
                let command = new IncreaseSecondNumberCalcCommand(this.calcCommandReceiver);
                command.execute();
            }
            else if (this.secondDecreaseButtonArea.contains(mouseX, mouseY)) {
                let command = new DecreaseSecondNumberCalcCommand(this.calcCommandReceiver);
                command.execute();
            }
        }
         
        setCalcCommandReceiver(calcCommandReceiver: CalcCommandReceiver): void {
            this.calcCommandReceiver = calcCommandReceiver;
        }

        setFirstNumber(firstNumber: number): void {
            this.firstNumber = firstNumber;
        }

        setSecondNumber(secondNumber: number): void {
            this.secondNumber = secondNumber;
        }

        setAddResult(addResult: number): void {
            this.addResult = addResult;
        }

        setSubstractResult(substractResult: number): void {
            this.substractResult = substractResult;
        }

        setMultiplyResult(multiplyResult: number): void {
            this.multiplyResult = multiplyResult;
        }

        setDivideResult(divideResult: number) {
            this.divideResult = divideResult;
        }
        
    	relativePosition(event: any, element: any) {
    		let rect = element.getBoundingClientRect();
    		return { x: Math.floor(event.clientX - rect.left),
    				 y: Math.floor(event.clientY - rect.top ) }
    	}
        
        drawLine(sx: number, sy: number, ex: number, ey: number): void {
        	this.ctx.beginPath();
            this.ctx.moveTo(sx, sy);
            this.ctx.lineTo(ex, ey);
            this.ctx.stroke();
        }
        
        drawRectangle(sx: number, sy: number, ex: number, ey: number): void {
        	let width = ex - sx;
        	let height = ey - sy;
        	
        	this.ctx.strokeRect(sx, sy, width, height);
        }
            
        drawText(text: string, x: number, y: number): void {
        	this.ctx.fillStyle = "black";
        	this.ctx.font = "12px Arial";
    		
    		this.ctx.fillText(text, x, y);
        }  
    	
    }
    
}
