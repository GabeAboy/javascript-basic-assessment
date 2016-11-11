function doubleTheFun(param) {
  var str = param;
  var isNum = parseInt(param);

  var isString = typeof param === 'string';
  var isAnum = typeof param === 'number';
	if(typeof isNum === 'number'&& !isString) {
		return isNum*=2;
	}
	if(isString && !isAnum){
   return str+=str;
	}
}
 console.log(doubleTheFun('sdf'));
