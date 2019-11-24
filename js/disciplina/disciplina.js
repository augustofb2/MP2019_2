class Disciplina {
  constructor(inicial) {
    this.nome = inicial.nome;
    this.creditos = inicial.creditos;
    this.provas = inicial.provas;
    this.trabalhos = inicial.trabalhos;
    this.estudo = inicial.estudo;
    this.nota = inicial.nota;
    this.desempenho = inicial.desempenho;
    this.reprovado = inicial.reprovado;
    this.semestre = inicial.semestre;
  }

  isReprovado() {
    if (this.nota < 50) { this.reprovado = true; }
  }

  gerarNota() {
    this.nota = this.desempenho;
  }
}

export default Disciplina;
