import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collection : SHOP_DATA
        }
    }

    render(){
        return (
            <div className="shop-page">
            {
                this.state.collection.map( ({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                ))
            }
            </div>
        )
    }
}

export default ShopPage;