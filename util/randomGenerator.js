export const setEnvironmentVariable = {
  getRandomId: function (idLength) {
    let id = 'inttest';
    let idPrefixLength = id.length;
    let charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < idLength - idPrefixLength; i++)
      id += charset.charAt(Math.floor(Math.random() * charset.length));
    return id;
  },
  getRandomNumericId: function (idLength) {
    let id = '707';
    let idPrefixLength = id.length;
    let charset = '123456789';
    for (let i = 0; i < idLength - idPrefixLength; i++)
      id += charset.charAt(Math.floor(Math.random() * charset.length));
    return id;
  },
  generateRandomIdAndNumericId: function (idLength) {
    let idGeneration = {
      randomId: this.getRandomId(idLength),
      randomNumericId: this.getRandomNumericId(idLength)
    };
    return idGeneration;
  }
};
