let currentPalette, nextPalette

async function getPalette() {
    try {
        const res = await fetch('http://colormind.io/api/', {
            method: "POST",
            body: JSON.stringify({model: 'ui'})
        })
        const data = await res.json()
        return data.result
    } catch(err) {
        console.error(err)
    }
}

async function applyPalette(palette) {
    const paletteMap = {
        lightShade: palette[0],
        lightAccent: palette[1],
        main: palette[2],
        darkAccent: palette[3],
        darkShade: palette[4]
    };
    for (const [cls, rgb] of Object.entries(paletteMap)) {
        const color = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
        const elements = document.getElementsByClassName(cls);
        for (let element of elements) {
            element.style.backgroundColor = color;
        }
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    currentPalette = await getPalette()
    await applyPalette(currentPalette)
    nextPalette = await getPalette()
})

document.getElementById("btn").addEventListener("click", async () => {
    btn.disabled = true
    currentPalette = nextPalette
    await applyPalette(currentPalette)
    nextPalette = await getPalette()
    btn.disabled = false
})