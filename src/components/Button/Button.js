import React, {memo} from 'react';
import {Button as MuiButton} from 'react-native-paper';

import Crashes from 'appcenter-crashes';

const Button = memo(props => {
	return (
		<MuiButton
			mode="contained"
			onPress={() => Crashes.generateTestCrash()}
			{...props}>
			Press me
		</MuiButton>
	);
});

export {Button};
