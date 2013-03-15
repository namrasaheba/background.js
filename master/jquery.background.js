/**
* Author:- Namra A. Saheba
* Plugin:- To change background of the Element.
*/

jQuery.fn.background = function(color){

	var bg_color = color || 'brown';

	return this.css('background', bg_color);		
};