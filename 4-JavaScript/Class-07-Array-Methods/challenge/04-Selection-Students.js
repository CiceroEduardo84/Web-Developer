// ⚠Desafio 19

// Uma escola precisa selecionar os melhores alunos para estágio
// Use os métodos de Array para percorer lista de alunos e calcular médias
// O critério será por média >= 7 e as faltas menores que 5 para filtrar alunos

const students = [
  { name: "Aluno A", grades: [7, 7, 6], absences: 3 },
  { name: "Aluno B", grades: [6, 8, 7, 8.534353], absences: 4 },
  { name: "Aluno C", grades: [9, 8, 10], absences: 6 },
  { name: "Aluno D", grades: [9, 7, 8], absences: 2 },
  { name: "Aluno E", grades: [8, 7, 5], absences: 7 },
];

const selectStudents = students.map((student) => {
  const avarage =
    student.grades.reduce((a, b) => a + b) / student.grades.length;

  return {
    name: student.name,
    avarage: avarage,
    absences: student.absences,
  };
});

const selectedStudents = selectStudents.filter(
  (student) => student.avarage >= 7 && student.absences < 5
);

console.table(selectedStudents);
