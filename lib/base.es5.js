function Base() {}
Base.extend = function() {

	var Super = function() {};
	var args = [].slice.call(arguments);
	var obj = Object.create(this.prototype);
	obj.eventObj = {};

	args.forEach(function(itemObj) {
		for (var k in itemObj) {
			if (itemObj.hasOwnProperty(k)) {
				obj[k] = itemObj[k];
				Super[k] = itemObj[k];
			}
		}
	})

	obj.on = function(name, fn) {
		if (name && typeof fn === 'function') {
			obj.eventObj[name] = fn;
		}
	}

	obj.trigger = function(name, value) {
		if (name && typeof obj.eventObj[name] === 'function') {
			obj.eventObj[name].call(this, value);
		}
	}

	Super.extend = this.extend;
	Super.prototype = obj;

	return Super;

}

module.exports = Base

