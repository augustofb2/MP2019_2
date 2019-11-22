import Aluno from '../aluno/aluno';
import Disciplina from '../disciplina/disciplina';

// const max = 2688;

class Jogo {
  constructor(inicial) {
    this.tempo = inicial.jogo.tempo;
    this.periodo = inicial.jogo.periodo;
    this.disciplinas = inicial.disciplinas.map((disciplina) => new Disciplina(disciplina));

    this.aluno = new Aluno(inicial.aluno);
  }

  iniciarSemestre() {
    this.tempo = 0;
    this.semestre += 1;
    this.aluno.escolherDisciplinas(this.disciplinas);
  }
}

export default Jogo;
