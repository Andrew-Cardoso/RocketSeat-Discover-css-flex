const description = `
<article>
  <h2>Header Menu Navigation</h2>
  <p>Create a <span class="code">&lt;header&gt;</span> with a logo and a navigation menu.</p>
  <p>The elements must be siblings.</p>
  <p>The logo must be on the far left and the menu on the far right.</p>
  <p>Menu items must be side by side horizontally and have a distance of 0.8rem between them.</p>
  <p>The last menu item is a Contact button, you must use last-child selector to style it.</p>
</article>
`;
const layout = `
<header class="challenge-01">
  <figure>
    <img src="https://picsum.photos/180/120" alt="Logo" />
  </figure>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Testimonials</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
`;

export const challenge01 = {description, layout};
