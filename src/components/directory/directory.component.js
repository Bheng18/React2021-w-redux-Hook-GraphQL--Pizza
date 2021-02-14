import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => ( 
    <div className='directory-menu'>
        {
            sections.map(({id, name, image, size, linkUrl}) => (
                <MenuItem key={id} title={name} imageUrl={image} size={size} linkUrl={linkUrl} />
            ))
        }
    </div>
);
   
const mapStateToProps = createStructuredSelector ({
   sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);