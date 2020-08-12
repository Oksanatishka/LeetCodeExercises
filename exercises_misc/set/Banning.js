// https://dou.ua/lenta/articles/what-you-should-know-about-algorithms/?from=fp_top1m_also

const shows = [
    {
        id: 1,
        name: 'Rick and Morty',
        categories: ['Comedy', 'Animated', 'Science'],
        data: 1001010101001011
    }
    // {/.../},
    // {/.../},
    // {/.../},
    // {/.../},
];

const bannedShows = [
    {
        id: 1,
        categories: ['Comedy', 'Animated', 'Science']
    }
    // {/.../},
    // {/.../},
    // {/.../},
];

function effectiveBanning(shows) {
    const bannedShowsIDs = new Set();

    // наполнили Set забаненными ID
    bannedShows.forEach(({ id }) => bannedShowsIDs.add(id));

    shows.forEach(({ id }) => {
        // если ID текущего шоу присутствует в сете забаненных - помечаем его
        if (bannedShowsIDs.has(id)) show.isBanned = true;
    });
    console.log(shows);
}

function ineffectiveBanning(shows) {
    // начинается обход всех шоу
    shows.forEach(show => {
        // берется ID каждого
        const { id: showID } = show;

        // запускается обход забаненных шоу
        bannedShows.forEach(bannedShow => {
            // теперь берем ID каждого забаненного
            const { id: bannedShowID } = bannedShow;

            // сравниваем ID и если совпадение - помечаем шоу как забаненное
            if (showID === bannedShowID) {
                show.isBanned = true;
            }
        });
    });
}

console.log(effectiveBanning(shows));
