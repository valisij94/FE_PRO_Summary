import logo from './logo.svg';
import './App.css';
import SimpleParagraph from './components/SimpleParagraph';

function App() {

  const testArray = [
    'String 1',
    'Test string 2',
    'Another String 3'
  ];

  const testParagraphsArray = [
    {
      id: 1,
      text: 'Text from first test object',
      color: 'red',
      fontSize: '12px'
    },
    {
      id: 2,
      text: 'Text from second test object',
      color: 'blue',
      fontSize: '16px'
    },
    {
      id: 3,
      text: 'Text from third test object',
      color: 'green',
      fontSize: '14px'
    },
    {
      id: 4,
      text: 'Text from fourth test object',
      color: 'yellow',
      fontSize: '20px'
    }
  ];

  const currentDate = new Date().toLocaleString();

  const randomValue = Math.random();

  return (
      <div className="App">
        <p>Hello World from React! {currentDate}</p>
        {
          (randomValue > 0.5) ? <h1>Heading1</h1> : <h2>Heading2</h2>
        }
        {
          /** Пройтись по массиву testArray, и для каждого элемента отрендерить параграф с текстом из элемента этого массива */
          testParagraphsArray.map( item => {
            return (
            (item.color === 'green') && <SimpleParagraph
                key={item.id}
                text={item.text}
                textColor={item.color}
                fontSize={item.fontSize}
              />
            )
          })
        }
      </div>
  );
}

export default App;
