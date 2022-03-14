import { getData, storeData } from "./PersistentStorage"

const KEY_RECHERCHES_FAVORITES = "FAVOURITE_SEARCH"

export async function toutesLesRecherchesFavorites() {
    let recherches = await getData(KEY_RECHERCHES_FAVORITES)
    console.log("recherches", recherches)
    return recherches
}

export async function enregistrerNouvelleRechercheFavorite(label) {
    let recherches = await toutesLesRecherchesFavorites() || []
    if (!recherches.includes(label)) recherches.push(label)
    await storeData(KEY_RECHERCHES_FAVORITES, recherches)
    return recherches
}

export async function supprimerRechercheFavorite(label) {
    console.log("value", label)
    let recherches = await toutesLesRecherchesFavorites() || []
    recherches = recherches.filter(item=>item!=label)
    await storeData(KEY_RECHERCHES_FAVORITES, recherches)
    return recherches
}