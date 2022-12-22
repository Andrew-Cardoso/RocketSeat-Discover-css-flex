import {fullPageLayout} from './challenges-layout.js';
import {flexExampleClass, flexExampleHtml} from './flex-examples.js';
import {challenge01} from './challenge-01.js';
import {challenge02} from './challenge-02.js';
import {challenge03} from './challenge-03.js';
import {challenge04} from './challenge-04.js';
import {challenge05} from './challenge-05.js';

const backButton = document.getElementById`back-button`;

const hideBackButton = () =>
	backButton.classList.contains('show') && backButton.classList.remove('show');
const showBackButton = () =>
	!backButton.classList.contains('show') && backButton.classList.add('show');

const changeLayout = (className, layout) => {
	const main = document.querySelector`main`;
	main.className = className;
	typeof layout === 'string' ? (main.innerHTML = layout) : main.replaceChildren(...layout);
};

const applyChallengeLayout = (challengeHtml, challengeDescription, col) => {
	changeLayout(
		'challenge' + (col ? ' column' : ''),
		fullPageLayout(challengeHtml, challengeDescription),
	);
	showBackButton();
};

const generateMainNav = () => {
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');
	const liFLexExamples = document.createElement('li');
	const btnFlexExamples = document.createElement('a');

	btnFlexExamples.textContent = 'Flex Examples';
	btnFlexExamples.role = 'button';
	liFLexExamples.appendChild(btnFlexExamples);
	ul.appendChild(liFLexExamples);
	nav.appendChild(ul);

	btnFlexExamples.addEventListener('click', () => {
		changeLayout(flexExampleClass, flexExampleHtml);
		showBackButton();
	});

	const challenges = [challenge01, challenge02, challenge03, challenge04, challenge05];

	challenges.forEach(({layout, description, col}, i) => {
		const liChallenge = document.createElement('li');
		const btnChallenge = document.createElement('a');

		btnChallenge.textContent = `Challenge ${i + 1}`;
		btnChallenge.role = 'button';

		liChallenge.appendChild(btnChallenge);
		ul.appendChild(liChallenge);

		btnChallenge.addEventListener('click', () =>
			applyChallengeLayout(layout, description, col),
		);
	});

	return [nav];
};

const navigationPage = () => {
	changeLayout('nav', generateMainNav());
	hideBackButton();
};

export const startApplication = () => {
	navigationPage();
	backButton.addEventListener('click', () => {
		navigationPage();
	});
};
