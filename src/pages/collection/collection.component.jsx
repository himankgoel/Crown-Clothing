import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({collection}) =>{
    return (
    <div className="collection-page">
        <h2>COLLECtION</h2>
    </div>
)}
const mapStateToProps = (state,ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);