$(function() {
	'use strict';

	window.Validator = function(val, rule) {
		this.validate_max = function() {
			val = parseFloat(val);
			return val <= rule.max;
		}

    this.validate_min = function() {
      val = parseFloat(val);
      return val >= rule.min;
    }

    // this.validate_name = function() {
    //   val = parseFloat(val);
    //   return val <= rule.max;
    // }
	}
});
