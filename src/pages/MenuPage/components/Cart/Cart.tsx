import { Button, CartIcon, CloseIcon } from "@/components";
import { useCart } from "./useCart";
import { CartItem } from "../CartItem";
import "./cart.css";
import { CartOverlayProps, CartWindowProps } from "./types";

export const Cart: React.FC = () => {
  const { cart, cartAction } = useCart();

  return (
    <div className="cart__container">
      <div className="cart">
        <div className="cart__header">
          <span className="cart__icon-container">
            <CartIcon />
          </span>
          <h3 className="cart__title">カート</h3>
        </div>
        <div className="cart__list">
          {cart.items.length !== 0 ? (
            cart.items.map((item) => (
              <CartItem
                key={item.id}
                imageUrl={item.image}
                description={item.description}
                title={item.title}
                price={item.price}
                count={item.quantity}
                onDecreaseButtonClick={() =>
                  cartAction({
                    type: "add_cart_item",
                    payload: { product: item, quantity: -1 },
                  })
                }
                onIncreaseButtonClick={() => {
                  cartAction({
                    type: "add_cart_item",
                    payload: { product: item, quantity: 1 },
                  });
                }}
                isIncreaseButtonDisabled={item.quantity >= item.rating.count}
              />
            ))
          ) : (
            <span className="cart__empty">カートは空です</span>
          )}
        </div>
        <div className="cart__total">
          <span className="cart__total-label">小計</span>
          <span className="cart__total-price">${cart.totalPrice}</span>
        </div>
      </div>
      <Button variant="primary">カートを確認する</Button>
    </div>
  );
};

export const CartOverlay: React.FC<CartOverlayProps> = (props) => {
  const { onClickCartButton } = props;
  const { cart } = useCart();

  return (
    cart.items.length > 0 && (
      <div className="cart-overlay">
        <div className="cart__total cart-overlay__total">
          <span className="cart__total-label cart-overlay__total-label">
            小計 (${cart.items.length} items)
          </span>
          <span className="cart__total-price cart-overlay__total-price">
            ${cart.totalPrice}
          </span>
        </div>
        <Button
          variant="primary"
          width="fit-content"
          height="fit-content"
          icon={<CartIcon width="24px" />}
          onClick={onClickCartButton}>
          カート
        </Button>
      </div>
    )
  );
};

export const CartWindow: React.FC<CartWindowProps> = (props) => {
  const { onClickCloseButton } = props;
  const { cart, cartAction } = useCart();

  return (
    <div className="cart-window__scroll-block">
      <div className="cart__container cart-window__container">
        <div className="cart cart-window">
          <div className="cart-window__header">
            <button
              className="cart-window__close-button"
              onClick={onClickCloseButton}>
              <CloseIcon size="24px" color="#0f172a" />
            </button>
            <div className="cart__header cart-window__title-container">
              <span className="cart__icon-container cart-window__icon-container">
                <CartIcon />
              </span>
              <h3 className="cart__title cart-window__title">カート</h3>
            </div>
            <div className="cart-window__space" />
          </div>
          <div className="cart__list cart-window__list">
            {cart.items.length !== 0 ? (
              cart.items.map((item) => (
                <CartItem
                  key={item.id}
                  imageUrl={item.image}
                  description={item.description}
                  title={item.title}
                  price={item.price}
                  count={item.quantity}
                  onDecreaseButtonClick={() =>
                    cartAction({
                      type: "add_cart_item",
                      payload: { product: item, quantity: -1 },
                    })
                  }
                  onIncreaseButtonClick={() => {
                    cartAction({
                      type: "add_cart_item",
                      payload: { product: item, quantity: 1 },
                    });
                  }}
                  isIncreaseButtonDisabled={item.quantity >= item.rating.count}
                />
              ))
            ) : (
              <span className="cart__empty cart-window__empty">
                カートは空です
              </span>
            )}
          </div>
        </div>
        <div className="cart-window__overlay">
          <div className="cart__total cart-window__total">
            <span className="cart__total-label cart-window__total-label">
              小計
            </span>
            <span className="cart__total-price cart-window__total-price">
              ${cart.totalPrice}
            </span>
          </div>
          <Button variant="primary" width="100%">
            カート
          </Button>
        </div>
      </div>
    </div>
  );
};
