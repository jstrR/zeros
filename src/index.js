module.exports = function getZerosCount(number) {
  // your implementation
	let counter = 0;
	for(let i = 5; i <= number; i*=5){
    	counter += Math.floor(number / i);
  	}
  	return counter;
}
