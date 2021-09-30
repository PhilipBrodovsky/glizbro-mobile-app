import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
	},
};

const Main = () => {
	return (
		<PaperProvider theme={theme}>
			<App />
		</PaperProvider>
	);
};

AppRegistry.registerComponent(appName, () => Main);
