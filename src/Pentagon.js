import React from 'react';
import ImpactAssessment from './ImpactAssessment';
const Pentagon = () => {
    const colors = ['#f7f7f7', '#e5e5e5', '#d4d4d4'];
    const lines = [];
    for (let i = 0; i < 5; i++) {
        const angle = i * (Math.PI * 2 / 5);
        const x = Math.sin(angle) * 50;
        const y = -Math.cos(angle) * 50;
        lines.push(<line x1={0} y1={0} x2={x} y2={y} strokeDasharray="2,2" stroke="#333" strokeWidth="0.15" key={i} />);
    }
    const labels = ['Technology', 'Economic', 'Individual', 'Social', 'Environmental'];
    const labelPositions = [[30, -30], [40.2, 18], [-50, 18], [-35.2, -30], [-10, 48]]
    const labelElements = labels.map((label, index) => {
        const [x, y] = labelPositions[index];
        return <text x={x} y={y} fontSize="2" fill="#333" key={index}>{label}</text>;
    });
    const orders = ["immediate", "enabling", "structural"];
    const orderAngles = [[13, -5], [27, -10], [45, -15]];
    const newTexts = orders.map((val, ind) => {
        const [x, y] = orderAngles[ind]
        return <text x={x} y={y} fontSize={1} fill="#333" key={ind}>{val}</text>
    })
    /**
     * Placing the impact cards on the pentagon. 
    */
    const impactCards = [];
    const paths = []
    someArr.map((value, ind) => {
        if (value.impact === "technology") {
            impactCards.push(<text key={ind} filter="url(#technology)" x="20" y="-20" fontSize="2">{value.effect}</text>
            )
            paths.push([20, -20]);
        }
        else if (value.impact === "social") {
            if (value.category == "enabling") {
                impactCards.push(<text key={ind} filter="url(#social)" x="-31" y="-15" fontSize="2">{value.effect}</text>
                )
                paths.push([-31, -15])
            }
            else if (value.category == "immediate") {
                impactCards.push(

                    <text key={ind} filter="url(#social)" x="-30" y="-10" fontSize="2">{value.effect}</text>
                )
                paths.push([-30, -10])

            }
            else {
                impactCards.push(<text key={ind} filter="url(#social)" x="-35" y="-20" fontSize="2">{value.effect}</text>
                )
                paths.push([-35, -20])
            }
        }
        else if (value.impact === "individual") {
            if (value.category == "enabling") {
                impactCards.push(<text key={ind} filter="url(#individual)" x="-25" y="5" fontSize="2">{value.effect}</text>
                )
                paths.push([-25, 5])
            }
            else if (value.category == "immediate") {
                impactCards.push(

                    <text key={ind} filter="url(#individual)" x="-15" y="5" fontSize="2">{value.effect}</text>
                )
                paths.push([-15, 5])
            }
            else {
                impactCards.push(<text key={ind} filter="url(#individual)" x="-35" y="5" fontSize="2">{value.effect}</text>
                )
                paths.push([-35, 5])
            }
        }
        else if (value.impact === "economic") {
            if (value.category == "enabling") {
                impactCards.push(<text key={ind} filter="url(#economic)" x="15" y="5" fontSize="2">{value.effect}</text>
                )
                paths.push([15, 5]);
            }
            else if (value.category == "immediate") {
                impactCards.push(

                    <text key={ind} filter="url(#economic)" x="10" y="5" fontSize="2">{value.effect}</text>
                )
                paths.push([10, 5])
            }
            else {
                impactCards.push(<text key={ind} filter="url(#economic)" x="20" y="5" fontSize="2">{value.effect}</text>
                )
                paths.push([20, 5])
            }
        }
        else if (value.impact === "environmental") {
            if (value.category == "enabling") {
                impactCards.push(<text key={ind} filter="url(#environmental)" x="-5" y="25" fontSize="2">{value.effect}</text>
                )
                paths.push([-5, 25]);
            }
            else if (value.category == "immediate") {
                impactCards.push(

                    <text key={ind} filter="url(#environmental)" x="-5" y="10" fontSize="2">{value.effect}</text>
                )
                paths.push([-5, 10])
            }
            else {
                impactCards.push(<text key={ind} filter="url(#environmental)" x="-5" y="40" fontSize="2">{value.effect}</text>
                )
                paths.push([-5, 40])
            }
        }
    })
    const pathDiags = []
    for (let i = 0; i < paths.length - 1; i++) {
        const [x1, y1] = paths[i]
        const [x2, y2] = paths[i + 1]
        console.log(x1, x2, y1, y2)
        const arrowLength = 3; // Length of arrowhead
        const arrowWidth = 1; // Width of arrowhead
        const curveOffset = 20
        const pathInd = `M ${x1} ${y1} Q ${(x1 + x2) / 2 + curveOffset} ${(y1 + y2) / 2} ${x2} ${y2} M ${x2 - arrowLength} ${y2 - arrowWidth} L ${x2} ${y2} L ${x2 - arrowLength} ${y2 + arrowWidth}`;

        pathDiags.push(<path key={i} d={pathInd} stroke="black" strokeWidth="0.5" fill="none" strokeLinecap='round' />
        )
    }

    return (
        <div className="justify-content-center align-items-center">
            <svg viewBox="-70 -70 140 140" width="100%" height="100%">
                <defs>
                    <filter x="0" y="0" height="1" width="1" id="technology">
                        <feFlood flood-color="#ADD8E6" result="bg" />
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
                    <polygon points="0,-50 47.55,-15.45 29.39,40.45 -29.39,40.45 -47.55,-15.45" fill={colors[0]} stroke="#333" strokeWidth="0.15" />
                    <polygon points="0,-32.5 33.75,-10.3 21.04,27.33 -21.04,27.33 -33.75,-10.3" fill={colors[1]} stroke="#333" strokeWidth="0.15" />
                    <polygon points="0,-20 18.77,-5.45 11.69,18.91 -11.69,18.91 -18.77,-5.45" fill={colors[2]} stroke="#333" strokeWidth="0.15" />
                    <circle cx="0" cy="0" r="0.15" fill="#333" />
                    {lines}
                    {labelElements}
                    {newTexts}
                    {pathDiags}

                    {impactCards}
                </g>
            </svg>
        </div>
    );
};

export default Pentagon;
