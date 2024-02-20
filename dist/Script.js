const alunos = [];
alunos.push({
  nome: 'Lucas',
  nota1: 5,
  nota2: 8,
  situacao: ''
});
alunos.push({
  nome: 'Anne',
  nota1: 9,
  nota2: 7,
  situacao: ''
});
alunos.push({
  nome: 'Igor',
  nota1: 2,
  nota2: 4,
  situacao: ''
});
alunos.push({
  nome: 'Charles',
  nota1: 1,
  nota2: 2,
  situacao: ''
});
function pegarTodasNotas() {
  const todasAsNotas = [];
  for (let i = 0; i < alunos.length; i++) {
    const Nota1 = alunos[i].nota1;
    const Nota2 = alunos[i].nota2;
    const nomeAlunos = alunos[i].nome;
    let NotaAlunos = [];
    NotaAlunos.push(nomeAlunos);
    NotaAlunos.push(Nota1);
    NotaAlunos.push(Nota2);
    todasAsNotas.push(NotaAlunos);
  }
  return todasAsNotas;
}
function Media(Nota1, Nota2) {
  return (Nota1 + Nota2) / 2;
}
function MediaAlunos() {
  let todasAsNotas = pegarTodasNotas();
  for (let i = 0; i < todasAsNotas.length; i++) {
    const nomeAlunos = todasAsNotas[i][0];
    const nota1 = todasAsNotas[i][1];
    const nota2 = todasAsNotas[i][2];
    const media = Media(nota1, nota2);
    console.log(`${nomeAlunos} Tirou uma nota de\n${nota1} e a outra de ${nota2}\nA media do aluno foi ${media}\n\n`);
  }
}
for (let aluno of alunos) {
  let media = (aluno.nota1 + aluno.nota2) / 2;
  aluno.situacao = media >= 6 ? 'Aprovado' : 'Reprovado';
}
MediaAlunos();
console.log(alunos);