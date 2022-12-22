const description = `
<article>
  <h2>Image inside button</h2>
  <p>Create a button with text and a icon image.</p>
  <p>The text and the icon must be 0.4rem away from each other.</p>
</article>
`;
const layout = `
<section class="challenge-04">
  <button>
    A Button 
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M17.24,18.15L19.04,19.95L20.45,18.53L18.66,16.74M20,12.5H23V10.5H20M15,6.31V1.5H9V6.31C7.21,7.35 6,9.28 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,9.28 16.79,7.35 15,6.31M4,10.5H1V12.5H4M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M3.55,18.53L4.96,19.95L6.76,18.15L5.34,16.74L3.55,18.53Z" />
  </svg>
  </button>
</section>
`;

export const challenge04 = {description, layout};
