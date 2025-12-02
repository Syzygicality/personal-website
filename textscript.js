

async function getRandomColors() {
  const res = await fetch("http://colormind.io/api/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "default" })
  });

  if (!res.ok) throw new Error("Failed to fetch palette");

  const data = await res.json();
  return data.result; // array of 5 [r,g,b]
}

getRandomColors().then(colors => {
  console.log(colors);
});
