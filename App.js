import "./App.css";

const wordFrequency = (phrase) => {
  console.log(phrase);
  let result = {};
  let words = phrase.split(" ");

  for (const word of words) {
    console.log(word);
    if (word in result) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  console.log(words);
  return { result };
};

console.log(wordFrequency("hi, my name is gautam is my name"));
function App() {
  return <></>;
}

export default App;
