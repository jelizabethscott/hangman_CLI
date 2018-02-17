function letter(value) {  
	this.value = value;
	this.show = false;
	if(this.value === ''){
		this.show = true;
	}
}

letter.prototype.printLetter = function {
	if(this.show){
		return this.value;
	}
		return"*";

}


module.exports = letter;