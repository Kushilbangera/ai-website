 const container = document.getElementById("tools-contianer");
 aiTools.forEach(tool =>{
    const card = document.createElement("div");
    card.classname ="tool-card";
    card.innerHTML =
    <><h2>${tool.name}</h2><p>${tool.description}</p><a href="${tool.link}" target="_blank">visit tool</a></>;
   container.appendChild(card);
 });