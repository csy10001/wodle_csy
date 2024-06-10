const 정답 = "APPLE";

let attempts = 0;
let index = 0;

function appStart() {
  const nextLine = () => {
    if (attempts === 6) return;
    attempts += 1;
    index = 0;
  };

  const gameover = () => {
    window.removeEventListener("keydown", handleKeydown);
  };

  const handleEnterKey = () => {
    let 맞은_갯수 = 0;
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-column[data-index='${attempts}${i}']`
      );
      console.log(block.innerText);
      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];
      if (입력한_글자 === 정답_글자) {
        맞은_갯수 += 1;
        block.style.background = "#6aaa64";
      } else if (정답.includes(입력한_글자)) block.style.background = "#c9b458";
      else block.style.background = "#787c7e";
      block.style.color = "white";
    }

    if (맞은_갯수 === 5) gameover();
    else nextLine();
  };
  const handleKeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );
    if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index = index + 1;
    }
  };

  window.addEventListener("keydown", handleKeydown);
}

appStart();
