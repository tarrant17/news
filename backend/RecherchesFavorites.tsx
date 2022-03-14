import { getData, storeData } from "./PersistentStorage"

const KEY_RECHERCHES_FAVORITES = "FAVOURITE_SEARCH"

export async function toutesLesRecherchesFavorites() {
    return await getData(KEY_RECHERCHES_FAVORITES)
}

export async function enregistrerNouvelleRechercheFavorite(label) {
    console.log("value", label)
    let recherches = await toutesLesRecherchesFavorites() || []
    recherches.push(label)
    await storeData(KEY_RECHERCHES_FAVORITES, recherches)
}