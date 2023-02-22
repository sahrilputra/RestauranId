/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('Should return the movie that has been added', async () => {
    favoriteResto.putResto({
      id: 1,
    });
    favoriteResto.putResto({
      id: 2,
    });

    expect(await favoriteResto.getResto(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getResto(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getResto(3))
      .toEqual({ undefined });
  });

  it('Should refuse a movie from being added if it does not have the correct property', async () => {
    favoriteResto.putResto({ aProperty: 'property' });

    expect(await favoriteResto.getAllResto()).toEqual([]);
  });

  it('can return all of the movies that have been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getAllResto()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it('should remove favorite resto', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(1);

    expect(await favoriteResto.getAllResto());
  });

  it('should handle request to remove a Restaurant event though the restauran has not been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(4);

    expect(await favoriteResto.getAllResto()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestoModel };
