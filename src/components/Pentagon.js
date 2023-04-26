
import { React, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const Pentagon = () => {
  const colors = ["#f7f7f7", "#e5e5e5", "#d4d4d4"];
  const pentagon = useStoreState((state) => state.pentagonObject);
  const featureObject = useStoreState((state) => state.featureObject);
  const impactArray = useStoreState((state) => state.impactArray);
  const setImpactArray = useStoreActions((actions) => actions.setImpactArray);
  const maintainFeature = useStoreActions((actions) => actions.maintainFeature);
  const repopulateArray = (svgDiv) => {
    const impactArr = [
      {
        env_p:
          "It affects environment i.e. produces waste, has a large carbon footprint, utilizes excessive amount of resources.",
      },
      {
        env_n:
          "It has a positive impact on the environment e.g. reduces the use of any resources, makes any process efficient.",
      },
      {
        social_p:
          "It impacts society by improving the living conditions of humans.",
      },
      {
        social_n:
          "It could have a negative impact on society e.g harms social interaction.",
      },
      {
        economic_p:
          " It positively impacts economy e.g. creates monetary value, promotes innovation, increases GDP of the region, improves governance.",
      },
      {
        economic_n:
          "It negatively impacts economy e.g. job loss, financial loss, relies heavily on financial resources.",
      },
      {
        ind_p:
          "It positively impacts individual health, improves mental health, promotes lifelong learning, ensures privacy.",
      },
      {
        ind_n:
          "It negatively impacts the individual health e.g. causes emotional distress, impacts physical or mental health, compromises safety or privacy.",
      },
    ];

    setImpactArray(impactArr);
    const div = svgDiv;
    const canvas = document.createElement("canvas");
    canvas.width = div.clientWidth;
    canvas.height = div.clientHeight;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imgData = canvas.toDataURL();
      const imgElement = document.createElement("img");
      imgElement.src = imgData;
      document.body.appendChild(imgElement); // append the image to the document
    };
    img.src = "data:image/svg+xml," + encodeURIComponent(div.innerHTML);
    const img2 = img.src;
    maintainFeature({ featureObject, img2 }); //not working. adds null object
  };

  const lines = [];
  for (let i = 0; i < 5; i++) {
    const angle = i * ((Math.PI * 2) / 5);
    const x = Math.sin(angle) * 50;
    const y = -Math.cos(angle) * 50;
    lines.push(
      <line
        x1={0}
        y1={0}
        x2={x}
        y2={y}
        strokeDasharray="2,2"
        stroke="#333"
        strokeWidth="0.15"
        key={i}
      />
    );
  }
  const labels = [
    "Technology",
    "Economic",
    "Individual",
    "Social",
    "Environmental",
  ];
  const labelPositions = [
    [30, -30],
    [40.2, 18],
    [-50, 18],
    [-35.2, -30],
    [-10, 48],
  ];
  const labelElements = labels.map((label, index) => {
    const [x, y] = labelPositions[index];
    return (
      <text x={x} y={y} fontSize="2" fill="#333" key={index}>
        {label}
      </text>
    );
  });
  const orders = ["immediate", "enabling", "structural"];
  const orderAngles = [
    [13, -5],
    [27, -10],
    [45, -15],
  ];
  const newTexts = orders.map((val, ind) => {
    const [x, y] = orderAngles[ind];
    return (
      <text x={x} y={y} fontSize={1} fill="#333" key={ind}>
        {val}
      </text>
    );
  });
  /**
   * Placing the impact cards on the pentagon.
   */
  const impactCards = [];
  const paths = [];
  pentagon.map((value, ind) => {
    if (value.impact === "technology") {
      impactCards.push(
        <text key={ind} filter="url(#technology)" x="20" y="-20" fontSize="2">
          {value.effect}
        </text>
      );
      paths.push([20, -20]);
    } else if (value.impact === "social") {
      if (value.category == "enabling") {
        impactCards.push(
          <text key={ind} filter="url(#social)" x="-31" y="-15" fontSize="2">
            {value.effect}
          </text>
        );
        paths.push([-31, -15]);
      } else if (value.category == "immediate") {
        impactCards.push(
          <text key={ind} filter="url(#social)" x="-30" y="-10" fontSize="2">
            {value.effect}
          </text>
        );
        paths.push([-30, -10]);
      } else {
        impactCards.push(
          <text key={ind} filter="url(#social)" x="-35" y="-20" fontSize="2">
            {value.effect}
          </text>
        );
        paths.push([-35, -20]);
      }
    } else if (value.impact === "individual") {
      if (value.category == "enabling") {
        impactCards.push(
          <text key={ind} filter="url(#individual)" x="-25" y="5" fontSize="2">
            {value.effect}
          </text>
        );
        paths.push([-25, 5]);
      } else if (value.category == "immediate") {
        impactCards.push(
          <text key={ind} filter="url(#individual)" x="-15" y="5" fontSize="2">
            {value.effect}
          </text>
        );
        paths.push([-15, 5]);
      } else {
        impactCards.push(
          <text key={ind} filter="url(#individual)" x="-35" y="5" fontSize="2">
            {value.effect}
          </text>
        );
        paths.push([-35, 5]);
      }
    } else if (value.impact === "economic") {
      if (value.category == "enabling") {
        impactCards.push(
          <text key={ind} filter="url(#economic)" x="15" y="5" fontSize="2">
            {value.effect}
          </text>
        );
        paths.push([15, 5]);
      } else if (value.category == "immediate") {
        impactCards.push(
          <text key={ind} filter="url(#economic)" x="10" y="5" fontSize="2">
            {value.effect}
          </text>
        );
        paths.push([10, 5]);
      } else {
        impactCards.push(
          <text key={ind} filter="url(#economic)" x="20" y="5" fontSize="2">
            {value.effect}
          </text>
        );
        paths.push([20, 5]);
      }
    } else if (value.impact === "environmental") {
      if (value.category == "enabling") {
        impactCards.push(
          <text
            key={ind}
            filter="url(#environmental)"
            x="-5"
            y="25"
            fontSize="2"
          >
            {value.effect}
          </text>
        );
        paths.push([-5, 25]);
      } else if (value.category == "immediate") {
        impactCards.push(
          <text
            key={ind}
            filter="url(#environmental)"
            x="-5"
            y="10"
            fontSize="2"
          >
            {value.effect}
          </text>
        );
        paths.push([-5, 10]);
      } else {
        impactCards.push(
          <text
            key={ind}
            filter="url(#environmental)"
            x="-5"
            y="40"
            fontSize="2"
          >
            {value.effect}
          </text>
        );
        paths.push([-5, 40]);
      }
    }
  });
  const pathDiags = [];
  for (let i = 0; i < paths.length - 1; i++) {
    const [x1, y1] = paths[i];
    const [x2, y2] = paths[i + 1];
    console.log(x1, x2, y1, y2);
    const arrowLength = 3; // Length of arrowhead
    const arrowWidth = 1; // Width of arrowhead
    const curveOffset = 20;
    const pathInd = `M ${x1} ${y1} Q ${(x1 + x2) / 2 + curveOffset} ${
      (y1 + y2) / 2
    } ${x2} ${y2} M ${x2 - arrowLength} ${y2 - arrowWidth} L ${x2} ${y2} L ${
      x2 - arrowLength
    } ${y2 + arrowWidth}`;

    pathDiags.push(
      <path
        key={i}
        d={pathInd}
        stroke="black"
        strokeWidth="0.25"
        fill="none"
        strokeLinecap="round"
      />
    );
  }


  return (
    <div
      id="pentagonsvg"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <svg viewBox="-70 -70 140 140" width="100%" height="100%">
        <defs>
          <filter x="0" y="0" height="1" width="1" id="technology">
            <feFlood flood-color="#6699CC" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter x="0" y="0" height="1" width="1" id="social">
            <feFlood flood-color="yellow" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter x="0" y="0" height="1" width="1" id="economic">
            <feFlood flood-color="orange" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter x="0" y="0" height="1" width="1" id="individual">
            <feFlood flood-color="pink" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter x="0" y="0" height="1" width="1" id="environmental">
            <feFlood flood-color="green" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g>
          <polygon
            points="0,-50 47.55,-15.45 29.39,40.45 -29.39,40.45 -47.55,-15.45"
            fill={colors[0]}
            stroke="#333"
            strokeWidth="0.15"
          />
          <polygon
            points="0,-32.5 33.75,-10.3 21.04,27.33 -21.04,27.33 -33.75,-10.3"
            fill={colors[1]}
            stroke="#333"
            strokeWidth="0.15"
          />
          <polygon
            points="0,-20 18.77,-5.45 11.69,18.91 -11.69,18.91 -18.77,-5.45"
            fill={colors[2]}
            stroke="#333"
            strokeWidth="0.15"
          />
          <circle cx="0" cy="0" r="0.15" fill="#333" />
          {lines}
          {labelElements}
          {newTexts}
          {pathDiags}
          {impactCards}
        </g>
      </svg>
                    {impactCards}
                </g>
            </svg>
            <Row>

                <button className='btn btn-secondary'><Link to="/impact-assessment">See Impact Assessment</Link></button>

                <button className='btn btn-primary'><Link to="/stepper">Add another feature</Link></button>
            </Row>
        </div>

  );
};

export default Pentagon;
