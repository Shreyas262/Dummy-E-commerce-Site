import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../api/productsApi';
import { addToCart } from '../../features/cart/cartSlice'
import { addToWishlist, removeFromWishlist} from '../../features/wishlist/wishlistSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import "./productDetails.css";

// renders the details of a particular product depending on id passed to the URL
function ProductDetails() {
  // getting value of id from the URL 
  const { id } = useParams();

  // query to load products data
  const { data: productDetails, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    staleTime: 1000 * 60,
  })
  
  
  const dispatch = useDispatch();
  
  const cartItems = useSelector(state => state.cart.items);
  
  const wishlistItems = useSelector(state => state.wishlist.items);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  
  const [selectedImage, setSelectedImage] = useState(0);
  
  const [showZoom, setShowZoom] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setShowZoom(false);
        }
    };

    if (showZoom) {
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showZoom]);

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>{ error.message }</p>
  
  const isInCart = cartItems.some(item => item.id === productDetails?.id);

  const isWishlisted = wishlistItems.some(item => item.id === productDetails?.id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
        dispatch(removeFromWishlist(productDetails.id));
    } else {
        dispatch(addToWishlist(productDetails));
    }
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
        (prev + 1) % productDetails.images.length
    );
  };

  const handlePrevious = () => {
    setSelectedImage((prev) =>
        prev === 0
            ? productDetails.images.length - 1
            : prev - 1
    );
  };
  

  return (
    <div className='product-details-container'>
      <div className="product-gallery">

        <div className="main-image">
            <img
                src={productDetails.images[selectedImage]}
                alt={productDetails.title}
                onClick={() => setShowZoom(true)}
            />
        </div>

        <div className="thumbnail-list">
            {productDetails.images.map((image, index) => (
                <img
                    key={image}
                    src={image}
                    alt={`${productDetails.title} ${index + 1}`}
                    className={
                        selectedImage === index
                            ? "thumbnail active-thumbnail"
                            : "thumbnail"
                    }
                    onClick={() => setSelectedImage(index)}
                />
            ))}
        </div>

        {showZoom && (
          <div
            className="image-modal"
            onClick={() => setShowZoom(false)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setShowZoom(false)}
              >
                ✕
              </button>

              <button
                className="prev-btn"
                onClick={handlePrevious}
              >
                ❮
              </button>
              
              <img
                src={productDetails.images[selectedImage]}
                alt={productDetails.title}
              />

              <button
                className="next-btn"
                onClick={handleNext}
              >
                ❯
              </button>

              <p className="image-counter">
                {selectedImage + 1} / {productDetails.images.length}
              </p>

            </div>
          </div>
        )}

      </div>

      <div className="product-info">
        
          <div className="title-row">

            <h1 className="product-title">
                {productDetails.title}
            </h1>

            {isAuthenticated && <button
              className="details-wishlist-btn"
              onClick={handleWishlistToggle}
            >
              {isWishlisted ? "❤️" : "🤍"}
            </button>}

          </div>

          <p className="product-description">{productDetails.description}</p>
          
          <p className="product-price">
            ${productDetails.price}
          </p>

          <p className="product-rating">
              ⭐ {productDetails.rating}
          </p>
          
          <button
            disabled={isInCart}
            onClick={() => dispatch(addToCart(productDetails))}
            className='cart-btn'
          >
            {isInCart ? "Already in Cart" : "Add to Cart"}
          </button>
          
          <div className="product-specifications">

            <h3>Specifications</h3>

            <dl className="spec-list">

              {productDetails.brand && (
                <>
                  <dt>Brand</dt>
                  <dd>{productDetails.brand}</dd>
                </>
              )}

              <dt>Category</dt>
              <dd>{productDetails.category}</dd>

              <dt>Weight</dt>
              <dd>{productDetails.weight}</dd>

            </dl>

            <div className="product-tags">
              <h4>Tags</h4>

              <ul>
                {productDetails.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="product-dimensions">
              <h4>Dimensions</h4>

              <ul>
                <li>Width: {productDetails.dimensions.width}</li>
                <li>Height: {productDetails.dimensions.height}</li>
                <li>Depth: {productDetails.dimensions.depth}</li>
              </ul>
            </div>

          </div>
          
          <div className="shipping-info">

            <h3>Shipping & Returns</h3>

            <p>{productDetails.availabilityStatus} ({productDetails.stock} left)</p>

            <p>Shipping Information: {productDetails.shippingInformation}</p>

            <p>Warranty Information: {productDetails.warrantyInformation}</p>
          
            <p>Return Policy: {productDetails.returnPolicy}</p>  

          </div>

      </div>
    </div>
  )
}

export default ProductDetails
