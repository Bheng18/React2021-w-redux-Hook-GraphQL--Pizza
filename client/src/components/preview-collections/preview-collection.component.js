import React from "react";
import CollectionItem from "../collection-item/collectionItem.component";
// import './preview-collection-styles.scss';
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './preview-collection.styles';

const PreviewCollection = ({ title, items }) => (
  <CollectionPreviewContainer className='collection-preview'>
    <TitleContainer className='title'>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer className='preview'>
        {
            items.filter((item, idx) => idx < 4).map(item => (
                <CollectionItem key={item.id} item={item} />
            ))
        }
    </PreviewContainer>  
  </CollectionPreviewContainer>
);

export default PreviewCollection;