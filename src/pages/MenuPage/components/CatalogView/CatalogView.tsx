import { useCatalogView } from "./useCatalogView";
import { ProductButton } from "../ProductButton";
import { CatalogViewProps } from "./types";
import "./catalogView.css";

export const CatalogView: React.FC<CatalogViewProps> = (props) => {
  const { data, isLoading, error } = props;
  const { cart, cartAction } = useCatalogView();

  if (isLoading) {
    return (
      <div className="catalog-view__container catalog-view__container--loading">
        <div className="catalog-view__loading" />
        <span className="catalog-view__loading--description">
          商品情報を取得中...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="catalog-view__container catalog-view__container--error">
        <span className="catalog-view__error">💦</span>
        <span className="catalog-view__error--description">
          商品を表示できません
        </span>
      </div>
    );
  }

  return (
    <div className="catalog-view__container">
      <div className="catalog-view__products">
        {data &&
          data.map((product) => (
            <ProductButton
              key={product.id}
              onClick={() =>
                cartAction({
                  type: "add_cart_item",
                  payload: { product, quantity: 1 },
                })
              }
              imageUrl={product.image}
              price={product.price}
              title={product.title}
              description={product.description}
              isDisabled={
                cart &&
                cart.items &&
                (cart.items.find((item) => item.id === product.id)?.quantity ??
                  0) > product.rating.count
              }
            />
          ))}
      </div>
    </div>
  );
};
