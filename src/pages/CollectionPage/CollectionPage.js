import React from 'react';
import './CollectionPage.styles.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

const CollectionPage = ({ collection }) => {
  const { items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='collection-title'>{collection.title}</h2>
      <div className='collection-items'>
        {items.map(item => <CollectionItem className='collection-item' key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default CollectionPage;