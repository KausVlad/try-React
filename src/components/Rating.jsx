import { useState } from 'react';

export default function Rating() {
  //Counter
  const [rating, setRating] = useState(5);

  const addRating = () => {
    if (rating < 10) {
      setRating((prevRating) => prevRating + 1);
    }
  };

  const decreaseRating = () => {
    if (rating > 1) {
      setRating((prevRating) => prevRating - 1);
    }
  };
  return (
    <>
      <div className="rating margin-top-58px">
        <p>
          Set Rating!
          <div className="rating-value">{rating}/10</div>
          <div className="button-rating">
            <button onClick={addRating}>up</button>
            <button onClick={decreaseRating}>down</button>
          </div>
        </p>
      </div>
    </>
  );
}
