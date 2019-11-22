class Aluno {
  constructor(inicial) {
    this.nome = inicial.nome;
    this.semestre = inicial.semestre;
    this.disciplinas = inicial.disciplinas;
    this.dinheiro = inicial.dinheiro;
    this.sono = inicial.sono;
    this.lazer = inicial.lazer;
    this.estresse = inicial.estresse;
    this.cansaço = inicial.cansaço;
    this.estagiando = inicial.estagiando;
    this.experiencia = inicial.experiencia;
    this.aprovadas = inicial.aprovadas;
  }

  setNome(nome) {
    this.nome = nome;
  }

  escolherDisciplinas(disciplinas) {
    const aprovadas = this.aprovadas.map((a) => a.nome);

    disciplinas.forEach((disciplina) => {
      if (this.semestre >= disciplina.semestre && !aprovadas.includes(disciplina.nome)) {
        this.adicionarDisciplina(disciplina);
      }
    });
  }

  adicionarDisciplina(disciplina) {
    this.disciplinas.push(disciplina);
  }

  processarDisciplinas() {
    const reprovadas = [];
    const aprovadas = [];

    this.disciplinas.forEach((item) => {
      if (item.reprovado) {
        reprovadas.push(item);
      } else {
        aprovadas.push(item);
      }
    });
    this.disciplinas = reprovadas;
    this.aprovadas = aprovadas;
  }
}


export default Aluno;
