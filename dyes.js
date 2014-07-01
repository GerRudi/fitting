var dyes = {
0: ['Alice Blue', 1, '#f0f8ff'],
1: ['Antique White', 1, '#faebd7'],
2: ['Aqua', 1, '#00ffff'],
3: ['Aquamarine', 1, '#7fffd4'],
4: ['Azure', 1, '#f0ffff'],
5: ['Beige', 1, '#f5f5dc'],
6: ['Bisque', 1, '#ffe4c4'],
7: ['Black', 1, '#000000'],
8: ['Blanched Almond', 1, '#ffebcd'],
9: ['Blue', 1, '#0000ff'],
10: ['Blue Violet', 1, '#8a2be2'],
11: ['Brown', 1, '#a52a2a'],
12: ['Burly Wood', 1, '#deb887'],
13: ['Cadet Blue', 1, '#5f9ea0'],
14: ['Chartreuse', 1, '#7fff00'],
15: ['Chocolate', 1, '#d2691e'],
16: ['Coral', 1, '#ff7f50'],
17: ['Cornflower Blue', 1, '#6495ed'],
18: ['Cornsilk', 1, '#fff8dc'],
19: ['Crimson', 1, '#dc143c'],
20: ['Cyan', 1, '#00ffff'],
21: ['Dark Blue', 1, '#00008b'],
22: ['Dark Cyan', 1, '#008b8b'],
23: ['Dark Golden Rod', 1, '#b8860b'],
24: ['Dark Gray', 1, '#a9a9a9'],
25: ['Dark Green', 1, '#006400'],
26: ['Dark Khaki', 1, '#bdb76b'],
27: ['Dark Magenta', 1, '#8b008b'],
28: ['Dark Olive Green', 1, '#556b2f'],
29: ['Dark Orange', 1, '#ff8c00'],
30: ['Dark Orchid', 1, '#9932cc'],
31: ['Dark Red', 1, '#8b0000'],
32: ['Dark Salmon', 1, '#e9967a'],
33: ['Dark Sea Green', 1, '#8fbc8f'],
34: ['Dark Slate Blue', 1, '#483d8b'],
35: ['Dark Slate Gray', 1, '#2f4f4f'],
36: ['Dark Turquoise', 1, '#00ced1'],
37: ['Dark Violet', 1, '#9400d3'],
38: ['Deep Pink', 1, '#ff1493'],
39: ['Deep Sky Blue', 1, '#00bfff'],
40: ['Dim Gray', 1, '#696969'],
41: ['Dodger Blue', 1, '#1e90ff'],
42: ['Fire Brick', 1, '#b22222'],
43: ['Floral White', 1, '#fffaf0'],
44: ['Forest Green', 1, '#228b22'],
45: ['Fuchsia', 1, '#ff00ff'],
46: ['Gainsboro', 1, '#dcdcdc'],
47: ['Ghost White', 1, '#f8f8ff'],
48: ['Gold', 1, '#ffd700'],
49: ['Golden Rod', 1, '#daa520'],
50: ['Gray', 1, '#808080'],
51: ['Green', 1, '#008000'],
52: ['Green Yellow', 1, '#adff2f'],
53: ['Honey Dew', 1, '#f0fff0'],
54: ['Hot Pink', 1, '#ff69b4'],
55: ['Indian Red', 1, '#cd5c5c'],
56: ['Indigo', 1, '#4b0082'],
57: ['Ivory', 1, '#fffff0'],
58: ['Khaki', 1, '#f0e68c'],
59: ['Lavender', 1, '#e6e6fa'],
60: ['Lavender Blush', 1, '#fff0f5'],
61: ['Lawn Green', 1, '#7cfc00'],
62: ['Lemon Chiffon', 1, '#fffacd'],
63: ['Light Blue', 1, '#add8e6'],
64: ['Light Coral', 1, '#f08080'],
65: ['Light Cyan', 1, '#e0ffff'],
66: ['Light Golden Rod Yellow', 1, '#fafad2'],
67: ['Light Grey', 1, '#d3d3d3'],
68: ['Light Green', 1, '#90ee90'],
69: ['Light Pink', 1, '#ffb6c1'],
70: ['Light Salmon', 1, '#ffa07a'],
71: ['Light Sea Green', 1, '#20b2aa'],
72: ['Light Sky Blue', 1, '#87cefa'],
73: ['Light Slate Gray', 1, '#778899'],
74: ['Light Steel Blue', 1, '#b0c4de'],
75: ['Light Yellow', 1, '#ffffe0'],
76: ['Lime', 1, '#00ff00'],
77: ['Lime Green', 1, '#32cd32'],
78: ['Linen', 1, '#faf0e6'],
79: ['Magenta', 1, '#ff00ff'],
80: ['Maroon', 1, '#800000'],
81: ['Medium Aqua Marine', 1, '#66cdaa'],
82: ['Medium Blue', 1, '#0000cd'],
83: ['Medium Orchid', 1, '#ba55d3'],
84: ['Medium Purple', 1, '#9370d8'],
85: ['Medium Sea Green', 1, '#3cb371'],
86: ['Medium Slate Blue', 1, '#7b68ee'],
87: ['Medium Spring Green', 1, '#00fa9a'],
88: ['Medium Turquoise', 1, '#48d1cc'],
89: ['Medium Violet Red', 1, '#c71585'],
90: ['Midnight Blue', 1, '#191970'],
91: ['Mint Cream', 1, '#f5fffa'],
92: ['Misty Rose', 1, '#ffe4e1'],
93: ['Moccasin', 1, '#ffe4b5'],
94: ['Navajo White', 1, '#ffdead'],
95: ['Navy', 1, '#000080'],
96: ['Old Lace', 1, '#fdf5e6'],
97: ['Olive', 1, '#808000'],
98: ['Olive Drab', 1, '#6b8e23'],
99: ['Orange', 1, '#ffa500'],
100: ['Orange Red', 1, '#ff4500'],
101: ['Orchid', 1, '#da70d6'],
102: ['Pale Golden Rod', 1, '#eee8aa'],
103: ['Pale Green', 1, '#98fb98'],
104: ['Pale Turquoise', 1, '#afeeee'],
105: ['Pale Violet Red', 1, '#d87093'],
106: ['Papaya Whip', 1, '#ffefd5'],
107: ['Peach Puff', 1, '#ffdab9'],
108: ['Peru', 1, '#cd853f'],
109: ['Pink', 1, '#ffc0cb'],
110: ['Plum', 1, '#dda0dd'],
111: ['Powder Blue', 1, '#b0e0e6'],
112: ['Purple', 1, '#800080'],
113: ['Red', 1, '#ff0000'],
114: ['Rosy Brown', 1, '#bc8f8f'],
115: ['Royal Blue', 1, '#4169e1'],
116: ['Saddle Brown', 1, '#8b4513'],
117: ['Salmon', 1, '#fa8072'],
118: ['Sandy Brown', 1, '#f4a460'],
119: ['Sea Green', 1, '#2e8b57'],
120: ['Sea Shell', 1, '#fff5ee'],
121: ['Sienna', 1, '#a0522d'],
122: ['Silver', 1, '#c0c0c0'],
123: ['Sky Blue', 1, '#87ceeb'],
124: ['Slate Blue', 1, '#6a5acd'],
125: ['Slate Gray', 1, '#708090'],
126: ['Snow', 1, '#fffafa'],
127: ['Spring Green', 1, '#00ff7f'],
128: ['Steel Blue', 1, '#4682b4'],
129: ['Tan', 1, '#d2b48c'],
130: ['Teal', 1, '#008080'],
131: ['Thistle', 1, '#d8bfd8'],
132: ['Tomato', 1, '#ff6347'],
133: ['Turquoise', 1, '#40e0d0'],
134: ['Violet', 1, '#ee82ee'],
135: ['Wheat', 1, '#f5deb3'],
136: ['White', 1, '#ffffff'],
137: ['White Smoke', 1, '#f5f5f5'],
138: ['Yellow', 1, '#ffff00'],
139: ['Yellow Green', 1, '#9acd32'],
140: ["St Patrick's Green", 1, '#00cf00'],
512: ['Purple Pinstripe', 4, 0],
513: ['Brown Lined', 4, 1],
514: ['Blue Striped', 5, 0],
515: ['Black Striped', 5, 1],
516: ['Rainbow', 9, 0],
517: ['Starry', 9, 1],
518: ['Brown Stitch', 10, 0],
519: ['Tan Diamond', 10, 1],
520: ['Green Weave', 10, 2],
521: ['Blue Wave', 10, 3],
522: ['Yellow Wire', 10, 4],
523: ['Futuristic', 10, 5],
524: ['Stony', 10, 6],
525: ['Heart', 10, 7],
526: ['Skull', 10, 8],
527: ['Red Diamond', 10, 9],
528: ['Jester', 10, 10],
529: ['Crossbox', 10, 11],
530: ['White Diamond', 10, 12],
531: ['Grey Scaly', 10, 13],
532: ['Red Spotted', 10, 14],
533: ['Smiley', 10, 15],
534: ['Bold Diamond', 10, 16],
535: ['Blue Lace', 9, 2],
536: ['Loud Spotted', 9, 3],
537: ['Red Weft', 9, 4],
538: ['Pink Sparkly', 9, 5],
539: ['Red Lace', 9, 6],
540: ['Pink Maze', 9, 7],
541: ['Yellow Dot', 4, 2],
542: ['Cloud', 9, 8],
543: ['Glowthread', 5, 2],
544: ['Sweater', 5, 3],
545: ['Bee Stripe', 5, 4],
546: ['Western Stripe', 4, 3],
547: ['Blue Point', 4, 4],
548: ['Robber', 4, 5],
549: ['Chainmail', 4, 6],
550: ['Dark Blue Stripe', 4, 7],
551: ['Vine', 10, 17],
552: ['Party', 10, 18],
553: ['Viva', 10, 19],
554: ['Nautical', 10, 20],
555: ['Cactus Zag', 10, 21],
556: ['Big-Stripe Blue', 10, 22],
557: ['Big-Stripe Red', 10, 23],
558: ['Starry Night', 10, 24],
559: ['Lemon-Lime', 10, 25],
560: ['Floral', 10, 26],
561: ['Pink Dot', 10, 27],
562: ['Dark Eyes', 10, 28],
563: ['Wind', 10, 29],
564: ['Shamrock', 9, 9],
565: ['Bright Stripes', 10, 30],
566: ['USA Flag', 10, 31],
567: ['Flannel', 10, 32],
568: ['Cow Print', 10, 33],
569: ['Lush Camo', 10, 34],
570: ['Dark Camo', 10, 35],
571: ['Teal Crystal', 10, 36],
572: ['Blue Fireworks', 10, 37],
573: ['Crisscross', 10, 38],
574: ['Diamond', 10, 39],
575: ['Egyptian', 10, 40],
576: ['Purple Bones', 10, 41],
577: ['Plaid', 10, 42],
578: ['Red USA Star', 9, 10],
579: ['Blue USA Star', 9, 11],
580: ['USA Star', 9, 12],
581: ['Purple Stripes', 5, 5],
582: ['Bright Floral', 5, 6],
583: ['Clanranald', 10, 43],
584: ['American Flag', 10, 44],
585: ['Relief', 9, 13],
586: ['Intense Clovers', 10, 45],
587: ['Celtic Knot', 10, 46],
588: ['Flame', 10, 47],
589: ['Heavy Chainmail', 10, 48],
590: ['Leopard Print', 10, 49],
591: ['Zebra Print', 10, 50],
592: ['Colored Egg', 10, 51],
593: ['Spring', 10, 52],
594: ['Hibiscus Beach Wrap', 10, 53],
595: ['Blue Camo', 10, 54],
596: ['Sunburst', 10, 55],
597: ['Ivory Dragon Scale', 5, 7],
598: ['Green Dragon Scale', 5, 8],
599: ['Midnight Dragon Scale', 5, 9],
600: ['Blue Dragon Scale', 5, 10],
601: ['Red Dragon Scale', 5, 11]
}
