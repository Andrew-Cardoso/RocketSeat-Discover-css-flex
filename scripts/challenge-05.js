const description = `
<article>
  <h2>Footer</h2>
  <p>Create a <span class="code">&lt;footer&gt;</span>.</p>
  <p>Inside the footer should be the date of creation of the site.</p>
  <p>Align horizontally the element in the middle of the screen (using flex, obviously).</p>
  <p>The footer must have height of 8rem.</p>
  <p>The footer must be vertically at the end of the screen.</p>
</article>
`;
const layout = `
<section class="challenge-05">
  <footer>${new Date().toLocaleString()}</footer>
</section>
`;

export const challenge05 = {description, layout};
