"use strict";

const getJSON = async function () {
  const response = await fetch("./data.json");
  const data = await response.json();

  for (const subject of data) {
    const subjectName = subject.category.toLowerCase();

    document
      .querySelector(`.${subjectName}`)
      .insertAdjacentHTML("afterbegin", `<img src=${subject.icon} />`);

    document.querySelector(`.point-${subjectName}`).innerText = subject.score;

    document.querySelector(`.category-${subjectName}`).innerText =
      subject.category;
  }
};

getJSON();
