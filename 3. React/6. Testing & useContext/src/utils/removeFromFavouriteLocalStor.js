export const removeFromFavouriteLocalStor = product => {
    localStorage.removeItem('favouriteItem_' + product.article);

    const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
    const updatedItems = favouriteItems.filter(item => item.article !== product.article);
    localStorage.setItem('favouriteItems', JSON.stringify(updatedItems));
};
