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
function Media(N1, N2) {
  return (N1 + N2) / 2;
}
function MediaAlunos() {
  for (let aluno of alunos) {
    const media = Media(aluno.nota1, aluno.nota2);
    console.log(`${aluno.nome} tirou uma nota de ${aluno.nota1} e a outra de ${aluno.nota2}. A média do aluno foi ${media}.`);
  }
}
for (let aluno of alunos) {
  let media = (aluno.nota1 + aluno.nota2) / 2;
  aluno.situacao = media >= 6 ? "aprovado" : "Reprovado";
}
MediaAlunos();
console.log(alunos);