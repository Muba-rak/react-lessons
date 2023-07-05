import React, { useRef, useEffect } from "react";
// useRef -
// does trigger re-render
// target dom nodes
// preserves values
//uncontrolled
// perform some actions on initial render

const Ref = () => {
  const refContainer = useRef('');
  const btnContainer = useRef(null);
  // console.log(refContainer); object
//   console.log(btnContainer.current);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    refContainer.current.focus();
  }, []);

  return (
    <div>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="my-3 d-block">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" ref={refContainer} className="form-control" />
          <button ref={btnContainer} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ref;
