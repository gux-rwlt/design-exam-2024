import React from "react";
import ReactDOM from "react-dom";
import { FilterProps, FilterButtonProps } from "./types";
import { useFilter } from "./useFilter";
import "./filter.css";
import {
  CaretDownIcon,
  CaretUpIcon,
  CloseIcon,
  Radio,
  RadioGroup,
} from "@/components";

const Filter: React.FC<FilterProps> = (props) => {
  const { value, onChange, onClose } = props;

  return (
    <div className="filter">
      <div className="filter__overlay" onClick={onClose} />
      <div className="filter__container">
        <div className="filter__header">
          <h4 className="filter__header--title">フィルター</h4>
          <button className="filter__close-button" onClick={onClose}>
            <CloseIcon size="24px" color="#0f172a" />
          </button>
        </div>
        <RadioGroup value={value} onChange={onChange}>
          <Radio value="all" defaultChecked>
            すべて
          </Radio>
          <Radio value="men's clothing">メンズ</Radio>
          <Radio value="women's clothing">レディース</Radio>
          <Radio value="jewelery">アクセサリー</Radio>
          <Radio value="electronics">周辺機器</Radio>
        </RadioGroup>
      </div>
    </div>
  );
};

export const FilterButton: React.FC<FilterButtonProps> = (props) => {
  const { isOpen, value, handleToggleFilter, onChange } = useFilter(props);

  return (
    <>
      <button className="filter-button" onClick={handleToggleFilter}>
        <span>フィルター</span>
        {isOpen ? <CaretUpIcon size="24px" /> : <CaretDownIcon size="24px" />}
      </button>
      {isOpen &&
        ReactDOM.createPortal(
          <Filter
            value={value}
            onChange={onChange}
            onClose={handleToggleFilter}
          />,
          document.body,
        )}
    </>
  );
};
