const { firestore } = require("../firebase/fire");

const uuid = require("uuid");
exports.save_search = async (user_id, place, coordinates) => {
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


exports.get_saved= async(user_id)=>{
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