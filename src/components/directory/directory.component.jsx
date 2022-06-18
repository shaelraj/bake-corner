import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "cake1",
          imageUrl:
            "https://img.freepik.com/free-photo/delicious-cake-with-fruits-cream_23-2148972058.jpg",
          id: 1,
        },
        {
          title: "cake2",
          imageUrl:
            "https://img.freepik.com/free-photo/delicious-cake-with-fruits-chocolate_23-2148972057.jpg",
          id: 2,
        },
        {
          title: "cake3",
          imageUrl:
            "https://img.freepik.com/free-photo/delicious-cake-with-fruits-cream_23-2148972058.jpg",
          id: 3,
        },
        {
          title: "cake4",
          imageUrl:
            "https://img.freepik.com/free-photo/delicious-cake-with-fruits-chocolate_23-2148972057.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "cake5",
          imageUrl:
            "https://img.freepik.com/free-photo/white-chocolate-cake-arranged-rustic-wooden-background_527904-1518.jpg",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem
            key={id}
            title={title.toUpperCase()}
            imageUrl={imageUrl}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
