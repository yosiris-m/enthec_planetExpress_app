const url = "https://futuramaapi.herokuapp.com/api/v2/characters";

function getMembers() {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data.map((member) => {
        return {
          name: member.Name,
          img: member.PicUrl,
        };
      });
    });
}

export default getMembers;
