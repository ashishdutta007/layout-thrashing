const button = document.getElementById("double-sizes");
const boxes = Array.from(document.querySelectorAll(".box"));

// 1. Loop metrics DOM read-write
// const doubleWidth = (element) => {
//   // synchronously (blocking) calculate the style and layout
//   // repeated read-writes will force browser to reflow again and again
//   // this is because the styles(metrics) are changing repeatedly and the browser
//   // needs to calculate to give the updated metrics the next time
//   // this is Layout Thrashing
//   const width = element.offsetWidth;
//   element.style.width = `${width * 2}px`;
// };

// button.addEventListener("click", (event) => {
//   boxes.forEach(doubleWidth);
// });

// 2. Faster approach
button.addEventListener("click", (event) => {
  // getting all widths beforehand
  // no repeated read-write cycles, so no reflows again and again
  // as no change to the styles(metrics) take place
  // No Layout Thrashing
  const widths = boxes.map((element) => element.offsetWidth);
  boxes.forEach((element, index) => {
    // synchronously calculate the style and layout
    element.style.width = `${widths[index] * 2}px`;
  });
});

// 3. with fast DOM
// button.addEventListener("click", (event) => {
//   boxes.forEach((element, index) => {
//     fastdom.measure(() => {
//       const width = element.offsetWidth;
//       fastdom.mutate(() => {
//         element.style.width = `${width * 2}px`;
//       });
//     });
//   });
// });
