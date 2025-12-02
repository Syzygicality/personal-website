async function include(id, file) {
    const html = await fetch(file).then(r => r.text());
    document.getElementById(id).innerHTML = html;
}
include("header", "components/_header.html");
include("footer", "components/_footer.html");