const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

// render all the bar
const chart = document.getElementById("chart");

for (let i = 0; i < data.length; i++) {
  const day = data[i].day;
  const amount = data[i].amount;

  chart.innerHTML += `
  <div class="chart__graph-block">
    <div class="bar"  id="${day}" style="height: ${amount}%">
      <div class="bar-details">$${amount}</div>
    </div>
    <div class="day">${day}</div>
  </div>
  `;
}

// hover effect on bar
const list = document.querySelectorAll(".bar");

list.forEach((item) =>
  item.addEventListener("mouseover", () => {
    list.forEach((item) => item.classList.remove("bar-details--active"));
    item.classList.add("bar-details--active");
  })
);

list.forEach((item) =>
  item.addEventListener("mouseleave", () => {
    list.forEach((item) => item.classList.remove("bar-details--active"));
  })
);

// for the largest bar
const max = data.reduce(function (prev, current) {
  return prev.amount > current.amount ? prev : current;
});

const change = document.getElementById(max.day);

change.style.background = "hsl(186, 34%, 60%)";

change.addEventListener("mouseover", () => {
  change.style.background = "hsl(186, 34%, 60%, .75";
});

change.addEventListener("mouseleave", () => {
  change.style.background = "hsl(186, 34%, 60%)";
});
