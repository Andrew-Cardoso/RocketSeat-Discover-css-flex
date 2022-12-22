const description = `
<article>
  <h2>9 Photos 3 Rows</h2>
  <p>Create a photo gallery with a 3x3 flex layout.</p>
  <p>Elements must be 0.8rem from each other.</p>
</article>
`;
const layout = `
<section class="challenge-03">
  ${[...Array(9)].map(() => `
    <figure>
      <img src="https://picsum.photos/1080/720" />
    </figure>
  `).join('')}
</section>
`;

export const challenge03 = {description, layout, col: true};
