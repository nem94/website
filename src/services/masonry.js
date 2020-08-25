const masonry = {
  masonryImages: [],
  generateNames: function(limit) {
    for (let i = 1; i <= limit; i++) {
      const img = {
        title: 'This is first img title',
        info: 'First description',
      };
      img.src = require(`@/assets/masonry/masonry_${i}.jpg`);
      img.id = i;
      this.masonryImages.push(img);
    }
  },
};

masonry.generateNames(5);
export default masonry;
