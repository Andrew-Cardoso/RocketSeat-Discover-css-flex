const generateHtml = () => {
  const sections = [];
	const innerContent = `
    <div>a</div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
    <div>e</div>
  `;

  for (let i = 0; i < 12; i++) {
    const section = document.createElement('section');
    section.className = `flex-${i}`;
    section.innerHTML = innerContent;
    sections.push(section);
  }

  return sections;
};

export const flexExampleHtml = generateHtml();
export const flexExampleClass = 'flex-example';
