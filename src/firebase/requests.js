const { firestore } = require("../firebase/fire");

const uuid = require("uuid");
export async function save_search (user_id, place, coordinates){
  let content_ref = firestore
    .collection("users")
    .doc(user_id)
    .collection("searches")
    .doc(place);
  await content_ref.set({
    place: place,
    coordinates: coordinates,
  });
};


export async function get_saved(user_id){
  let content_ref = firestore
  .collection("users")
  .doc(user_id)
  .collection("searches");
  let snapshot = await content_ref.get();
  let searches = [];
  snapshot.forEach((sn) => {
    let data = sn.data();
    data.id = sn.id;
    searches.push(data);
  });
  return searches;
}