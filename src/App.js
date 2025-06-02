
import './App.css';

import Card from './Components/Card';

function App() {
 const biografia= "Aluno de Tecnologia..."
  return (
    <div>
      <header>
 <Card 
 fotoPerfil="unnamed.jpg"
 nome = "Vinicius M. Nogueira"
 biograia = {biografia}
 />
    </header>
    <main>
      <section>
        <h1>Projetos</h1>
      </section>
    </main>
    <footer>
      <p>Desenvolvido por:Vinicius Marcerlo - 2025</p>
    </footer>
    </div>
    

  );
}

export default App;
