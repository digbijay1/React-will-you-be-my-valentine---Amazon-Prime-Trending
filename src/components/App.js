import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";
var i = 0;
var count = 0;
const App = (props) => {
  // console.log(props);
  const [nextbutton, setNextButton] = useState(false); //previous button
  const [slide, setSlide] = useState(props.slides[0].title);
  const [nextslide, setNextSlide] = useState(props.slides[0].text);
  const [activebutton, setActiveButton] = useState(true); //next button
  const [againstart, setAgainStart] = useState(false); //restart button
  /* ------------------------------------------*/
  //next button functionalities start here
  function slideFunction(slide) {
    //setNextButton(true)
    // console.log(slide);
    // i++;
    // if (i == 4) {
    //   setActiveButton(false);
    //   setNextButton(true);
    // }
    // if (i < 5) {
    //   setSlide(props.slides[i].title);
    //   setNextSlide(props.slides[i].text);
    //   setNextButton(true);
    // }
    var found1 = props.slides;
    var index1 = found1.findIndex((fruit1) => fruit1.title === slide);
    // console.log(index1)
    if (index1 == 3) {
      setActiveButton(false);
    }
    if (index1 < 4) {
      setSlide(found1[index1 + 1].title);
      setNextSlide(found1[index1 + 1].text);
      setNextButton(true);
      setAgainStart(true);
    }
  }

  //next button functionalities end here
  /* ------------------------------------------*/

  //previous  button functionalities start here
  function prevSlide(slide) {
    //console.log(slide);
    var found = props.slides;
    // console.log(found)

    var index = found.findIndex((fruit) => fruit.title === slide);
    // console.log(index);
    if (index == 1) {
      setNextButton(false);
      setActiveButton(true);
      setAgainStart(false);
    }
    if (index > 0) {
      setSlide(found[index - 1].title);
      setNextSlide(found[index - 1].text);
      setActiveButton(true);
    }
  }
  //previous  button functionalities end here
  /* ------------------------------------------*/

  //restart button functionalities starts here

  //restart functionalities
  function restart(slide) {
    var found3 = props.slides;
    var index3 = found3.findIndex((fruit3) => fruit3.title === slide);

    // setSlide(found3[0].title)
    //  setNextSlide(found3[0].text);

    //    setAgainStart(false)

    //  setNextButton(false)

    if (index3 < found3.length) {
      setSlide(found3[0].title);
      setNextSlide(found3[0].text);
      setAgainStart(false);
      setActiveButton(true);
      setNextButton(false);
    }
  }
  //restart button functionalities ends here

  return (
    <>
      <h1 data-testid="title">{slide}</h1>
      <p data-testid="text"> {nextslide}</p>
      {/* {console.log(slide)} */}
      {/* -------------------------------------- */}

      {/* previous button below */}
      <button
        data-testid="button-prev"
        disabled={!nextbutton}
        onClick={() => prevSlide(slide)}
        type="button"
      >
        Prev
      </button>
      {/* previous button end */}

      {/* -------------------------------------- */}

      {/* next button below */}
      <button
        data-testid="button-next"
        disabled={!activebutton}
        type="button"
        onClick={() => slideFunction(slide)}
      >
        Next
      </button>

      {/* next button end*/}

      {/* -------------------------------------- */}

      {/* restart button below */}
      <button
        data-testid="button-restart"
        disabled={!againstart}
        type="button"
        onClick={() => restart(slide)}
      >
        Restart
      </button>
      {/* restart button end */}
    </>
  );
};

export default App;
