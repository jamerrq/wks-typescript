function GitLogo({
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
                <path d="M92 303 c-66 -32 -101 -105 -88 -178 11 -58 116 -150 116 -101 0 8
-11 17 -24 20 -13 3 -31 17 -40 31 -20 30 -13 32 21 5 20 -16 29 -18 40 -8 12
9 9 13 -16 24 -36 15 -45 41 -36 102 l6 47 89 0 89 0 7 -51 c7 -59 -5 -91 -39
-99 -19 -5 -22 -11 -19 -46 3 -25 9 -39 18 -39 26 0 93 77 100 115 24 131
-108 236 -224 178z"/>
            </g>
        </svg>
    );

}

export default GitLogo;
