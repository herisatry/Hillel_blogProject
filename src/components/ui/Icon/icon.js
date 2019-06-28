import React from 'react';

import Edit from './icons/edit.svg';
import Close from './icons/close.svg';
import Upload from './icons/upload.svg';

const Icon = ({ name }) => {
	switch (name) {
		case 'edit':
			return <Edit />;
		case 'close':
			return <Close />;
		case 'upload':
			return <Upload />;
		default:
			return <div />;
	}
};

export default Icon;
