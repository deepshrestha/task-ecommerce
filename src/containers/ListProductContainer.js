import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onFetchProductData } from "../actions/productAction";
import ProductList from "./../components/product/ProductList";
import { useHttp } from "../hooks/useHTTP";

const ListProductContainer = () => {

  const { data } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onFetchProductData(data))
  }, [data]);

  const onHandleIncrement = (e) => {
    e.preventDefault();
    // perform increment
    console.log("increment");
  }

  const onHandleDecrement = (e) => {
    e.preventDefault();
    // perform decrement
    console.log("decrement");
  }

  return (
    <ProductList
      data={data}
      onHandleIncrement={onHandleIncrement}
      onHandleDecrement={onHandleDecrement}
    />
  );
};

export default ListProductContainer;
