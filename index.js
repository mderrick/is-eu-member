exports.getEuMembers = function(useExceptions)
{
	// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	var europeanCommissionExceptions = ["UK", "EL"];
	var nonEuropeanCommissionExceptions = ["GB", "GR"];
	return ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE"]
		.concat(useExceptions ? europeanCommissionExceptions : nonEuropeanCommissionExceptions);
};
exports.isEuMember = function(code, useExceptions)
{
	return exports.getEuMembers(useExceptions).indexOf(code.toUpperCase()) != -1;
};
