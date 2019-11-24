import Aluno from '../aluno/aluno';
import Disciplina from '../disciplina/disciplina';
import Estagio from '../estagio/estagio';

// const max = 2688;

class Jogo {
  constructor(inicial) {
    this.tempo = inicial.jogo.tempo;
    this.periodo = inicial.jogo.periodo;
    this.disciplinas = inicial.disciplinas.map((disciplina) => new Disciplina(disciplina));
    this.estagios = inicial.estagios.map((estagio) => new Estagio(estagio));

    this.aluno = new Aluno(inicial.aluno);
  }

  iniciarSemestre() {
    this.tempo = 0;
    this.semestre += 1;
    this.aluno.escolherDisciplinas(this.disciplinas);
  }

  verificarFimSemesre() {
    if (this.tempo > 2688) {
      this.terminarSemestre();
    }
  }

  terminarSemestre() {
    this.aluno.processarDisciplinas();
  }
}

export default Jogo;
