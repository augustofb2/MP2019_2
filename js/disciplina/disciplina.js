class disciplina {
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
}

export default disciplina;
