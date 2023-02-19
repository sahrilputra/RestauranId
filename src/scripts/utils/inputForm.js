const newReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContent = document.querySelector('.');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
  <div class="detail-review-item">
  <div class="review-header">
  <p class="review-name">${name}</p>

  <p class="review-date">${date}</p>
  </div>

  <div class="review-body">
  ${review}
  </div>
  </div>
  `;

  const responseInput = await Res(dataInput);

  reviewContent.innerHTML += newReview;
};

export default newReview;