class Display{
    constructor(DisplayValuePrevious, DisplayValueActual) {
        this.dValuePrevious = DisplayValuePrevious;
        this.dValueActual = DisplayValueActual;
        this.valueActual = "";
        this.valuePrevious= "";
        this.Calculator = new Calculator();
        this.operator = undefined;
        this.value = undefined;
    }   

    printDisplay(){
        this.dValueActual.textContent = this.valueActual;
        this.dValuePrevious.textContent = `${this.valuePrevious} ${this.operator || ''}`;
    }

    addNumber(n){
        if(n == '.' && this.valueActual.includes('.')) {
            return
        } else {
            this.valueActual += String(n);
            this.printDisplay();
        }
        
    }

    resetAll(){
        this.valueActual = "";
        this.valuePrevious="";
        this.operator = '';

        this.printDisplay();
    }

    eraseActual() {
        this.valueActual = this.valueActual.slice(0,-1);
        this.printDisplay();
    }

    calculate(operator, value) {
        if(this.operator != '=' && this.valueActual != '') {
            this.result();
            this.valuePrevious = this.valueActual;
        }
        this.value = value;
        this.operator = operator;
        this.valueActual = '';
        this.printDisplay();
    }

    result() {
        const a = parseFloat(this.valuePrevious);
        const b = parseFloat(this.valueActual);
        if(isNaN(a) || isNaN(b)) {
            return
        } else {
            console.log('trabajó')
           this.valueActual = this.Calculator[this.value](a,b);
        }
    }

    
}