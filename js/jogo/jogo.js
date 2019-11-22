import Aluno from '../aluno/aluno';

class Jogo {
  constructor(inicial) {
    this.tempo = inicial.jogo.tempo;
    this.periodo = inicial.jogo.periodo;

    this.aluno = new Aluno(inicial.aluno);
  }
}

export default Jogo;
