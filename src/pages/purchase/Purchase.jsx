import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeSelectedProduct,
} from "../../redux/actions/purchase/purchaseSlice";
import {
  PurchaseContainer,
  PurchaseBoxWrapper,
  SelectedProductWrapper,
  SelectedProductTotalPriceWrapper,
  CartSummaryHeaderWrapper,
  CartSummaryHeader,
  CartSummaryTotalPriceWrapper,
  CartSummaryTotalPriceTextWrapper,
  CartSummaryTotalPriceText,
  CartSummaryTotalPriceNumberWrapper,
  CartSummaryTotalPriceNumber,
  PurchaseCompoContainer,
  PurchaseCompoWrapper,
  CompoIconWrapper,
  CompoIcon,
  CompoContentWrapper,
  CompoHeaderWrapper,
  CompoHeader,
  CompoBrand,
  CompoPriceWrapper,
  CompoPrice,
  CounterWrapper,
  CounterBtnWrapper,
  CounterBtn,
  CounterBtnIconWrapper,
  CounterBtnMinusIcon,
  CounterBtnPlusIcon,
  CounterInputWrapper,
  CounterInput,
  CloseBtn,
  CounterCloseIcon,
} from "./PurchaseElements";
import ScrollToTop from "../../core-ui/ScrollToTop";

const Purchase = () => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.purchase.selectedProducts
  );

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };
  const handleRemoveProduct = (id) => {
    dispatch(removeSelectedProduct(id));
  };
  //To count total price :
  const totalPrice = selectedProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  useEffect(() => {
    // Save to local storage whenever selectedProducts changes
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  return (
    <>
      <ScrollToTop />
      <PurchaseContainer>
        <PurchaseBoxWrapper>
          <SelectedProductWrapper>
            {selectedProducts.map((data, index) => (
              <PurchaseCompoContainer key={index}>
                <PurchaseCompoWrapper>
                  <CloseBtn onClick={() => handleRemoveProduct(data.id)}>
                    <CounterCloseIcon />
                  </CloseBtn>
                  <CompoIconWrapper>
                    <CompoIcon alt={data.name} src={data.img} />
                  </CompoIconWrapper>
                  <CompoContentWrapper>
                    <CompoHeaderWrapper>
                      <CompoHeader>{data.name}</CompoHeader>
                    </CompoHeaderWrapper>
                    <CompoHeaderWrapper>
                      <CompoBrand>Product : {data.product}</CompoBrand>
                    </CompoHeaderWrapper>
                    <CompoHeaderWrapper>
                      <CompoBrand>Brand : {data.brand}</CompoBrand>
                    </CompoHeaderWrapper>
                    <CompoHeaderWrapper>
                      <CompoBrand>Category : {data.category}</CompoBrand>
                    </CompoHeaderWrapper>
                    <CompoPriceWrapper>
                      <CompoPrice>Price : ${data.price} </CompoPrice>
                    </CompoPriceWrapper>

                    <CounterWrapper>
                      <CounterBtnWrapper>
                        <CounterBtn
                          onClick={() => handleDecreaseQuantity(data.id)}
                        >
                          <CounterBtnIconWrapper>
                            <CounterBtnMinusIcon />
                          </CounterBtnIconWrapper>
                        </CounterBtn>
                      </CounterBtnWrapper>
                      <CounterInputWrapper>
                        <CounterInput value={data.quantity} readOnly />
                      </CounterInputWrapper>
                      <CounterBtnWrapper>
                        <CounterBtn
                          onClick={() => handleIncreaseQuantity(data.id)}
                        >
                          <CounterBtnIconWrapper>
                            <CounterBtnPlusIcon />
                          </CounterBtnIconWrapper>
                        </CounterBtn>
                      </CounterBtnWrapper>
                    </CounterWrapper>
                  </CompoContentWrapper>
                </PurchaseCompoWrapper>
              </PurchaseCompoContainer>
            ))}
          </SelectedProductWrapper>
          <SelectedProductTotalPriceWrapper>
            <CartSummaryHeaderWrapper>
              <CartSummaryHeader>Cart Summary</CartSummaryHeader>
            </CartSummaryHeaderWrapper>
            <CartSummaryTotalPriceWrapper>
              <CartSummaryTotalPriceTextWrapper>
                <CartSummaryTotalPriceText>
                  Total Price :
                </CartSummaryTotalPriceText>
              </CartSummaryTotalPriceTextWrapper>
              <CartSummaryTotalPriceNumberWrapper>
                <CartSummaryTotalPriceNumber>
                  ${totalPrice.toFixed(2)}
                </CartSummaryTotalPriceNumber>
              </CartSummaryTotalPriceNumberWrapper>
            </CartSummaryTotalPriceWrapper>
          </SelectedProductTotalPriceWrapper>
        </PurchaseBoxWrapper>
      </PurchaseContainer>
    </>
  );
};

export default Purchase;
