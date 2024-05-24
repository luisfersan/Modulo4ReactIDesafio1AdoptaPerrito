import React from "react";
import { Badge } from "react-bootstrap";

const Tags = ({ tag }) => {
  return (
    <div>
      {tag.map((tag) => (
        <Badge
          bg={tag.color}
          className="me-1"
        >
          {tag.text}
        </Badge>
      ))}
    </div>
  );
};

export default Tags;
