import RestoDBSource from '../data/restodb-source';

const PostReview = (url, name, review) => {
  const dataReview = {
    id: url.id,
    name,
    review,
  };

  RestoDBSource.PostReview(dataReview);

  const reviewContainer = document.querySelector('.detail-review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);

  const newReview = `
    <div class="reviews-item">        
        <h5 class="customer-name">${name}</h5>
        <p class="date">${date}</p>
        <p>${review}</p>
    </div>
  `;

  reviewContainer.innerHTML += newReview;
};

export default PostReview;
