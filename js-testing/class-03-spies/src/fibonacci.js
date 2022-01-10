class Fibonacci {
  *execute(input, current = 0, next = 1) {
    console.count('execute!')
    
    if(input === 0){
      return 0
    }
    // yield - generator eh como se fosse um return
    yield current
    
    // com o * ele delega uma funcao e nao retorna um valor
    yield* this.execute(input -1, next, current + next)

  }
}

module.exports = Fibonacci