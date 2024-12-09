import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedProduct } from "../../redux/actions/purchase/purchaseSlice";
import {
  DetailContainer,
  DetailWrapper,
  DetailImgContentWrapper,
  DetailImgWrapper,
  DetailImg,
  DetailContentWrapper,
  DetailTextWrapper,
  DetailTextWrapper2,
  DetailText,
  DetailPrice,
  DetailbtnWrapper,
} from "./DetailsElements";
import ScrollToTop from "../../core-ui/ScrollToTop";
//-------------------------------------------------------------------------------------------------

const Details = () => {
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------------------------------
  //Selectors : 
  const selectedDetailProduct = useSelector((state) => state.purchase.selectedDetailProduct);
  const selectedProducts = useSelector((state) => state.purchase.selectedProducts);
  //-------------------------------------------------------------------------------------------------
  //Message to show before rendering the product details :
  if (!selectedDetailProduct) {
    return <p>Loading product details...</p>;
  }
  //-------------------------------------------------------------------------------------------------
  //Function to add selected product from details page into purchase cart :
  const isAlreadySelected = selectedProducts.some(
    (product) => product.id === selectedDetailProduct.id
  );

  const handleAddToCart = () => {
    // Check if the product already exists in the selectedProducts array
    if (!isAlreadySelected) {
      dispatch(addSelectedProduct(selectedDetailProduct));
    } else {
      alert("This product is already in the cart.");
    }
  };
  //-------------------------------------------------------------------------------------------------
  return (
    <>
      <ScrollToTop />
      <DetailContainer>
        <DetailWrapper>
          <DetailImgContentWrapper>
            <DetailImgWrapper>
              <DetailImg
                alt={selectedDetailProduct.name}
                src={selectedDetailProduct.img}
              />
            </DetailImgWrapper>
            <DetailContentWrapper>
              <DetailTextWrapper>
                <DetailTextWrapper2>
                  <DetailText>Name : {selectedDetailProduct.name}</DetailText>
                </DetailTextWrapper2>
                <DetailTextWrapper2>
                  <DetailText>
                    Category : {selectedDetailProduct.category}
                  </DetailText>
                </DetailTextWrapper2>
                <DetailTextWrapper2>
                  <DetailText>
                    Product : {selectedDetailProduct.product}
                  </DetailText>
                </DetailTextWrapper2>
                <DetailTextWrapper2>
                  <DetailText>Brand : {selectedDetailProduct.brand}</DetailText>
                </DetailTextWrapper2>
                <DetailTextWrapper2>
                  <DetailPrice>
                    Price : ${selectedDetailProduct.price}
                  </DetailPrice>
                </DetailTextWrapper2>
              </DetailTextWrapper>
              <DetailbtnWrapper
                style={{
                  backgroundColor: isAlreadySelected ? "#0067FF" : "#bdbdbd",
                  color: isAlreadySelected ? "#fdfdfd" : "#000000",
                }}
                onClick={handleAddToCart}
              >
                Add To Cart
              </DetailbtnWrapper>
            </DetailContentWrapper>
          </DetailImgContentWrapper>
        </DetailWrapper>
      </DetailContainer>
    </>
  );
};

export default Details;
