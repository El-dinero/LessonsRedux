// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getItems } from "../../redux/actions/ActionsHome/ActionsHome";

// function Home() {
//   const items = useSelector((state) => state.items.items);
//   console.log(items);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getItems());
//     // eslint-disable-next-line
//   }, []);
//   return <div>home</div>;
// }

// export default Home;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/actions/ActionsHome/ActionsHome";

export const Home = (props) => {
  const { items, getItems } = props;
  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);
  console.log(items);
  return <div></div>;
};

const mapStateToProps = (state) => ({
  items: state.items.items.data,
});

const mapDispatchToProps = {
  getItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
