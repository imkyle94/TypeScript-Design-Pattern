import {CALC as calc} from "./calc_model";
import {CALC as calc2} from "../struct/rectangle";

export namespace CALC.mv {
	
	let PADDING = 30;
	let COLUMN_WIDTH = 60;
	let ROW_HEIGHT = 24;
	let BUTTON_SIZE = 24;
	
	import CalcModel = calc.mv.CalcModel;
	import Rectangle = calc2.struct.Rectangle;
	
	export class CalcView {

		

		private canvas: any;
		private ctx: any;

		private calcModel: CalcModel;

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
	        
	        let firstNumber = this.calcModel.getFirstNumber();
	        let secondNumber = this.calcModel.getSecondNumber();
	        
	        let offsetX = PADDING;
	        let offsetY = PADDING;
	        
	        offsetY += ROW_HEIGHT;
	        let operator = "+";
	        let result = this.add(firstNumber, secondNumber);
	        
	        this.drawResult(operator, Math.floor(result), offsetX, offsetY);
	        
	        offsetY += ROW_HEIGHT;
	        operator = "-";
	        result = this.substract(firstNumber, secondNumber);
	         
	        this.drawResult(operator, Math.floor(result), offsetX, offsetY);
	        
	        offsetY += ROW_HEIGHT;
	        operator = "*";
	        result = this.multiply(firstNumber, secondNumber);
	         
	        this.drawResult(operator, Math.floor(result), offsetX, offsetY);
	        
	        offsetY += ROW_HEIGHT;
	        operator = "/";
	        result = this.divide(firstNumber, secondNumber);
	         
	        this.drawResult(operator, Math.floor(result), offsetX, offsetY);
	    }
	        
	    add(firstNumber: number, secondNumber: number): number {
	        return firstNumber + secondNumber;
	    }
	    
	    substract(firstNumber: number, secondNumber: number): number {
	        return firstNumber - secondNumber;
	    }
	    
	    multiply(firstNumber: number, secondNumber: number): number {
	        return firstNumber * secondNumber;
	    }
	    
	    divide(firstNumber: number, secondNumber: number): number {
	        return firstNumber / secondNumber;
	    }
	            
	    drawResult(operator: string, result: number, startX: number, startY: number): void {
	    	let firstNumber = this.calcModel.getFirstNumber();
	    	let secondNumber = this.calcModel.getSecondNumber();
	        
	    	let offsetX = startX;
	    	let offsetY = startY;
	        this.drawText(String(firstNumber), offsetX, offsetY);
	        
	        offsetX += COLUMN_WIDTH;
	        this.drawText(operator, offsetX, offsetY);
	        
	        offsetX += COLUMN_WIDTH;
	        this.drawText(String(secondNumber), offsetX, offsetY);
	        
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
	    
	    setCalcModel(calcModel: CalcModel): void {
	        this.calcModel = calcModel;
	    }
	    
	    press(e: any): void {
	    	console.log("press");
	    	
			let canvas = this.canvas;
			
			let pressPoint = this.relativePosition(e, canvas);
			
			let mouseX = pressPoint.x;
	        let mouseY = pressPoint.y;
	        
	        if (this.firstIncreaseButtonArea.contains(mouseX, mouseY)) {
	            this.calcModel.increaseFirstNumber();
	            this.redraw();
	        }
	        else if (this.firstDecreaseButtonArea.contains(mouseX, mouseY)) {
	            this.calcModel.decreaseFirstNumber();
	            this.redraw();
	        }
	        else if (this.secondIncreaseButtonArea.contains(mouseX, mouseY)) {
	            this.calcModel.increaseSecondNumber();
	            this.redraw();
	        }
	        else if (this.secondDecreaseButtonArea.contains(mouseX, mouseY)) {
	            this.calcModel.decreaseSecondNumber();
	            this.redraw();
	        }
			
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
