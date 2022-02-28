import React from "react";
import "./Directory.styles.scss";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { directorySectionsSelector } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, size, id, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: directorySectionsSelector(state),
});

export default connect(mapStateToProps)(Directory);
