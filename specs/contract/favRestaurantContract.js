/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putResto({ id: 1 });
    favoriteRestaurant.putResto({ id: 2 });

    expect(await favoriteRestaurant.getResto(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getResto(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getResto(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putResto({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllResto())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putResto({ id: 1 });
    favoriteRestaurant.putResto({ id: 2 });

    expect(await favoriteRestaurant.getAllResto()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putResto({ id: 1 });
    favoriteRestaurant.putResto({ id: 2 });
    favoriteRestaurant.putResto({ id: 3 });

    await favoriteRestaurant.deleteResto(1);

    expect(await favoriteRestaurant.getAllResto()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putResto({ id: 1 });
    favoriteRestaurant.putResto({ id: 2 });
    favoriteRestaurant.putResto({ id: 3 });

    await favoriteRestaurant.deleteResto(4);

    expect(await favoriteRestaurant.getAllResto()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestaurantModel };
