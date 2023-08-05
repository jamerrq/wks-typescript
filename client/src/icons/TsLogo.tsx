function TsLogo({
    width = "28 pt", height = "28 pt", fill = '#3178c6',
}): JSX.Element {

    return (
        <svg fill={fill} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={width} height={height} viewBox="0 0 32.000000 32.000000"
            preserveAspectRatio="xMidYMid meet">

            <g
                transform="translate(0.000000, 32.000000) scale(0.100000,-0.100000)"
                fill={fill} stroke="none"
            >
                <path
                    d="M12 308 c-17 -17 -17 -279 0 -296 17 -17 279 -17 296 0 17 17 17 279
0 296 -17 17 -279 17 -296 0z m269 -138 c5 0 9 -7 9 -15 0 -9 -9 -15 -25 -15
-30 0 -33 -16 -4 -25 11 -4 25 -18 32 -32 10 -22 8 -28 -12 -44 -37 -30 -101
-20 -88 13 3 10 15 13 36 10 39 -5 40 3 2 22 -32 17 -43 38 -34 62 7 18 42 35
61 28 8 -2 18 -4 23 -4z m-91 -15 c0 -8 -9 -15 -20 -15 -18 0 -20 -7 -20 -60
0 -53 -2 -60 -20 -60 -18 0 -20 7 -20 60 0 53 -2 60 -20 60 -11 0 -20 7 -20
15 0 12 13 15 60 15 47 0 60 -3 60 -15z"
                />
            </g>
        </svg>
    );

}

export default TsLogo;
