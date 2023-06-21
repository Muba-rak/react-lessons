import React, { useState } from "react";
//conditional rendering

const Usestateboolean = () => {
  const [show, setShow] = useState(false);
  const change = () => {
    setShow(!show);
  };
  const para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        animi odio veniam, veritatis enim placeat obcaecati rem dolorem totam
        porro et asperiores. Pariatur sequi in, cumque neque exercitationem ea
        sit, optio itaque nam ut laboriosam officia, accusantium unde
        consectetur et.`;

  return (
    <div>
      <h1>Use State Boolean</h1>
      <p> {show ? para : para.substring(0, 100)} </p>

      <button onClick={change}>{show ? "show less" : "Show more"}</button>
    </div>
  );
};

export default Usestateboolean;
