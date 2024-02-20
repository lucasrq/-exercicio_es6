const alunos = [
  { nome: 'Lucas', nota1: 5, nota2: 8 },
  { nome: 'Anne', nota1: 9, nota2: 7 },
  { nome: 'Igor', nota1: 2, nota2: 4 },
  { nome: 'Charles', nota1: 1, nota2: 2 }
];

const alunosAprovados = alunos.filter(aluno => (aluno.nota1 + aluno.nota2) / 2 >= 6);

console.log(alunosAprovados);
