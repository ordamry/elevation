var firstPiece = { id: 101, name: 'Ofri' }
var seoncdPiece = { country: 'Israel' }

const fullPassport = { ...firstPiece, ...seoncdPiece }

console.log(fullPassport)

