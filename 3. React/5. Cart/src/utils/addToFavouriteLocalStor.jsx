export const addToFavouriteLocalStor = product => {
    localStorage.setItem('favouriteItem_' + product.article, JSON.stringify({ isFavourite: true }));

    const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
    favouriteItems.push(product);
    localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
};
