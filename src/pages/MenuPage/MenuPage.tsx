import React from "react";
import ReactDOM from "react-dom";
import { Radio, RadioGroup } from "@/components";
import { CatalogView } from "./components/CatalogView";
import { Cart, CartOverlay, CartWindow } from "./components/Cart";
import { useMenuPage } from "./useMenuPage";
import "./menuPage.css";
import { FilterButton } from "./components/Filter";
import { useDevice } from "@/providers/DeviceProvider";

const MenuPageDesktop: React.FC = () => {
  const { category, setCategory, catalog, isLoading, error } = useMenuPage();

  return (
    <main className="menu-page menu-page--desktop">
      <div className="menu-page__header menu-page__header--desktop">
        <h1 className="menu-page__header--title menu-page__header--title--desktop">
          SAMPLE KIOSK
        </h1>
      </div>
      <div className="menu-page__container menu-page__container--desktop">
        <div className="menu-page__filter menu-page__filter--desktop">
          <h4 className="menu-page__filter--title menu-page__filter--title--desktop">
            フィルター
          </h4>
          <RadioGroup value={category} onChange={(v) => setCategory(v)}>
            <Radio value="all" defaultChecked>
              すべて
            </Radio>
            <Radio value="men's clothing">メンズ</Radio>
            <Radio value="women's clothing">レディース</Radio>
            <Radio value="jewelery">アクセサリー</Radio>
            <Radio value="electronics">周辺機器</Radio>
          </RadioGroup>
        </div>
        <div className="menu-page__content menu-page__content--desktop">
          <h2 className="menu-page__content--title menu-page__content--title--desktop">
            商品を選択してください
          </h2>
          <div className="menu-page__content--container menu-page__content--container--desktop">
            <CatalogView data={catalog} isLoading={isLoading} error={error} />
            <Cart />
          </div>
        </div>
      </div>
    </main>
  );
};

const MenuPageMobile: React.FC = () => {
  const {
    category,
    setCategory,
    catalog,
    isLoading,
    error,
    isOpenCart,
    handleToggleCart,
  } = useMenuPage();

  return (
    <main className="menu-page menu-page--mobile">
      <div className="menu-page__header menu-page__header--mobile">
        <h1 className="menu-page__header--title menu-page__header--title--mobile">
          SAMPLE KIOSK
        </h1>
      </div>
      <div className="menu-page__container menu-page__container--mobile">
        <div className="menu-page__content--title-container menu-page__content--title-container--mobile">
          <h2 className="menu-page__content--title menu-page__content--title--mobile">
            商品を選択して下さい
          </h2>
          <FilterButton value={category} onChange={setCategory} />
        </div>
        <div className="menu-page__content--container menu-page__content--container--mobile">
          <CatalogView data={catalog} isLoading={isLoading} error={error} />
        </div>
      </div>
      <CartOverlay onClickCartButton={handleToggleCart} />
      {isOpenCart &&
        ReactDOM.createPortal(
          <CartWindow onClickCloseButton={handleToggleCart} />,
          document.body,
        )}
    </main>
  );
};

export const MenuPage: React.FC = () => {
  const device = useDevice();

  return device === "desktop" ? <MenuPageDesktop /> : <MenuPageMobile />;
};
