import './App.css';
import { Card } from './components/Card';

function App() {
  const text = {
    image: 'https://i.imgur.com/gtfe7oc.png',
    title: 'Card title',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }

  const textWithoutImage = {
    title: 'Another card',
    description: "Card without image",
  }

  return (
    <>
    <Card text={text}></Card>
    <Card text={textWithoutImage}></Card>
    </>
  );
}

export default App;
