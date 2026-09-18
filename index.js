//hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
  });
});

//start button
const startBtn = document.querySelector("#start button");
const list = document.querySelector(".ramdom_contents");
const result = document.querySelector("#result");

const onigiriList = [
  { src: "img/onigiri_contents_egg.png", alt: "たまご" },
  { src: "img/onigiri_contents_jako.png", alt: "じゃこ" },
  { src: "img/onigiri_contents_katuobushi.png", alt: "おかか" },
  { src: "img/onigiri_contents_konbu.png", alt: "こんぶ" },
  { src: "img/onigiri_contents_mentaiko.png", alt: "めんたいこ" },
  { src: "img/onigiri_contents_plum.png", alt: "梅" },
  { src: "img/onigiri_contents_salmon.png", alt: "サーモン" },
  { src: "img/onigiri_contents_tarako.png", alt: "たらこ" },
  { src: "img/onigiri_contents_tuna.png", alt: "ツナ" }
];

let intervalId;

startBtn.addEventListener("click", () => {

  clearInterval(intervalId);

  // スロット中
  intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * onigiriList.length);
    const item = onigiriList[randomIndex];

    // 画像更新
    list.innerHTML = `
      <li><img src="${item.src}" alt="${item.alt}"></li>
    `;

    // テキスト更新（←追加ポイント）
    result.textContent = item.alt;

  }, 160);

  // 2秒後に確定
  setTimeout(() => {
    clearInterval(intervalId);

    const finalIndex = Math.floor(Math.random() * onigiriList.length);
    const finalItem = onigiriList[finalIndex];

    list.innerHTML = `
      <li><img src="${finalItem.src}" alt="${finalItem.alt}"></li>
    `;

    // 最終結果も表示
    result.textContent = finalItem.alt;

  }, 2000);

});