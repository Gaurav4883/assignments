
// question nai bujna garoo cha sir tei ne i think arrray bata kati wata 3 cha kati wata 5 cha vanne console garne jasto laayo 

let cardChecker = (hamroArray, katiWataChaOeKancha) => {
    let yetiWataPoRaixa = 0;

    hamroArray.forEach(juwaKhelnuHudaina => {
        if (juwaKhelnuHudaina === katiWataChaOeKancha) {
            yetiWataPoRaixa++
        }
    })
    return yetiWataPoRaixa
}

console.log(cardChecker([1, 2, 2, 3, 2, 2, 2, 22, 2, 2, 2, 2, 2, 2, 4,], 2))
