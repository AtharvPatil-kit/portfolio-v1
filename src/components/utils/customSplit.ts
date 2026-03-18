export function customSplitText(element: HTMLElement) {
  const text = element.innerText;
  element.innerText = "";
  element.style.opacity = "1";
  
  const words = text.split(" ");
  const charsArr: HTMLElement[] = [];
  const wordsArr: HTMLElement[] = [];
  
  words.forEach((word) => {
    const wordSpan = document.createElement("span");
    wordSpan.style.display = "inline-block";
    wordSpan.style.whiteSpace = "pre";
    
    word.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.innerText = char;
      charSpan.style.display = "inline-block";
      wordSpan.appendChild(charSpan);
      charsArr.push(charSpan);
    });
    
    // add space
    const spaceSpan = document.createElement("span");
    spaceSpan.innerText = " ";
    spaceSpan.style.display = "inline-block";
    spaceSpan.style.whiteSpace = "pre";
    wordSpan.appendChild(spaceSpan);
    
    element.appendChild(wordSpan);
    wordsArr.push(wordSpan);
  });
  
  return { chars: charsArr, words: wordsArr, revert: () => { element.innerText = text; } };
}
