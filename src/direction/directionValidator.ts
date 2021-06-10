const validateDegreeParameter = (paramValue: string | string[] | undefined, paramName: string) => {
	if (!paramValue) {
		throw Error(`Missing ${paramName} parameter`);
	}

	const degrees = +paramValue;

	if (Number.isNaN(degrees)) {
		throw Error(`Parameter ${paramName} is not a number`);
	}

	if (degrees < 0 || degrees > 359) {
		throw Error(`Parameter ${paramName} value is invalid, it should be between 0 and 359`);
	}
};

export const validateGetDirectionInput = (params: Record<string, string | string[]>): void => {
	validateDegreeParameter(params.heading, 'heading');
	validateDegreeParameter(params.target, 'target');
};
