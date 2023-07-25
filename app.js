async function waitUntilDomLoaded() {
  return new Promise((resolve) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => resolve());
    } else {
      resolve();
    }
  });
}
waitUntilDomLoaded().then(() => {
  main();
});
async function main() {
  const headingEL = document.querySelector('#heading');
  const str = 'Syuzanna Matevosyan';
  const ftz = window.innerWidth > 768 ? 46 : 30;
  const heading = new Blotter.Text(str, {
    family: 'Borel',
    size: ftz,
    fill: '#171717',
  });
  const material = new Blotter.ChannelSplitMaterial();
  material.uniforms.uOffset.value = 0.05;
  material.uniforms.uAnimateNoise.value = 0.9;
  const headingBlotter = new Blotter(material, {
    texts: heading,
  });

  const scope = headingBlotter.forText(heading);
  scope.appendTo(headingEL);
}
