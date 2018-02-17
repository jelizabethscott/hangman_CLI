function letter(value) {  
	this.value = value;
	this.show = !/[a-z1-9]/i.test(value);
}
	
letter.prototype.construct = function() {
	if(this.show === true){
		return this.value;
	}
		return"*";
};

letter.prototype.results = function() {
	return this.value;
};

letter.prototype.printLetter = function (valuePrinted) {
	if (valuePrinted.toUpperCase() === this.value.toUpperCase()) {
		this.show = true;
		return true;
	}
	return false;
};

module.exports = letter;