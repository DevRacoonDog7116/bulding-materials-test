import React from "react";
import CollectionBreadcrumbs from "@/components/collection/CollectionBreadcrumbs";
import CollectionBrand from "@/components/collection/CollectionBrands";
import CollectionSummary from "@/components/collection/CollectionSummary";
import CollectionList from "@/components/collection/CollectionList";
import CollectionSort from "@/components/collection/CollectionSort";
import CollectionCate from "@/components/collection/RelatedCate";

const BuildingMaterials : React.FC = () =>{
    return(
        <div>
            <CollectionBreadcrumbs/>
            <CollectionBrand/>
            <CollectionSummary/>
            <CollectionList/>
            <CollectionSort/>
            <CollectionCate/>
        </div>
    )
}

export default BuildingMaterials;