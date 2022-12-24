export async function getLinksSave(key) {
  const myLink = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLink) || [];

  return linksSaves;
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  console.log(linksStored);

  const hastLink = linksStored.some((link) => link.id === newLink.id);

  console.log("hastLink", hastLink);

  if (hastLink) {
    console.log("exist");
    return;
  }

  linksStored.push(newLink);

  await localStorage.setItem(key, JSON.stringify(linksStored));
}
export function deleteLink(link, id) {
  console.log(link);
  let myLink = link.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@incurtaLink", JSON.stringify(myLink));

  return myLink;
}
