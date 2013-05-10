/* ===================================================================
:: css-zone v. alpha
:: (c) Giona Ferrandu | GPL | gionaf.com/playground/css-zone/
=================================================================== */
;(function(Modernizr,window,document,undefined){
  // nomi delle zone
	var zone = [ 'rossa' , 'gialla' , 'verde' ],
	// altre variabili
		boxSizingUnprefix = Modernizr.testProp("boxSizing"),
		boxShadowUnprefix = Modernizr.testProp("boxShadow"),
		boxShadowPrefix = Modernizr.testAllProps("boxShadow"),
		borderRadiusUnprefix = Modernizr.testProp("borderRadius"),
		borderRadiusPrefix = Modernizr.testAllProps("borderRadius"),
		borderRadiusPrefixed = ""+Modernizr.prefixed('borderRadius').toLowerCase(),
		zona;
	function aggiungiClasse(classe){ document.getElementsByTagName("html")[0].className+=' '+classe; }
	// test standard
	Modernizr.addTest('mediaqueries',Modernizr.mq('only all'));
	Modernizr.addTest('matchmedia',function(){return window.matchMedia});
	Modernizr.addTest('standalone',function(){return !!window.navigator.standalone});
	Modernizr.addTest('boxsizing',function(){return Modernizr.testAllProps("boxSizing")&&(document.documentMode===undefined||document.documentMode>7)});
	// deprefix
	Modernizr.addTest('deprefix',function(){ return (borderRadiusUnprefix&&boxShadowUnprefix)&&(boxShadowPrefix||borderRadiusPrefix); });
	// deprefix + vendor-prefix
	if(borderRadiusPrefix&&borderRadiusPrefixed=='mozborderradius') aggiungiClasse('no-deprefix-moz');
	if(borderRadiusPrefix&&borderRadiusPrefixed=='webkitborderradius') aggiungiClasse('no-deprefix-webkit');
	// identifico zona
	if(!boxSizingUnprefix&&!Modernizr.mediaqueries) zona = zone[0]; // Zona rossa: IE1-7, FF1-3, Safari1-3.2, Opera1-9
	else if(boxShadowUnprefix&&Modernizr.mediaqueries) zona = zone[2]; // Zona verde: IE9, FF4+, Safari5.1+, Opera10.5+, Chrome10+
	else zona = zone[1]; // Zona gialla: IE8, FF3.5>3.6, Safari4>5, Opera9.5>10.1, Chrome1-9
	// imposto zona
	Modernizr.zona = zona;
	aggiungiClasse('zona'+zona);
})(Modernizr,window,document);
