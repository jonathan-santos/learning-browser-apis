const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.fillText('Filled Text 1', 10, 10)
ctx.fillText('Filled Text 2, limited to 70px', 10, 25, 70)

ctx.font = '32px serif';
ctx.fillText('Filled Text 3 with font 32px serif', 10, 50)
ctx.fillText('Filled Text 4 with font 32px serif limited to 300px', 10, 80, 300)

ctx.strokeText('Stroked Text 1', 10, 120);

const somethingTextMeasured = ctx.measureText('Something')
console.log('Text "Something" if drawn with font ' + ctx.font + ' would measure ' + somethingTextMeasured.width + 'px')
