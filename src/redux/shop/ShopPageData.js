const SHOP_DATA = [
  {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
        description:
          "Whether it’s festival season, camping season, or cozy season, this recycled wool hat is an every season kind of thing. Great material, great quality, fast delivery, and most of all, great cause!",
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
        description: "Suitable for Season - Spring/Fall/Winter. These soft, ribbed knit winter hats are long enough to keep your head and ears covered without being bulky, perfect for all outdoor activities, such as skiing, snowboarding, ice skating, running, cycling, hiking, walking the dog, or just looking stylish. You will feel amazing with this knit beanie."
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
        description: "Chocolate brown 2X wool felt cowboy hat, brown leatherette hat band with multicolor braided leatherette overlay, finished with classic cattleman hat styling and handcrafted in the USA."
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
        description: "Made in the USA the Run Away Grey Brim is constructed of 100% wool it has a 4 shovel brim and a sloped cattleman crease crown. Features include a leather sweatband and full satin lining."
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
        description: "This is a double-layered, cuffed beanie with darts at the crown for shaping. It's rib-knit with a soft yarn. The green colour will look good for any occasion."
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
        description: "Seek your adventures wearing our Palm Tree hats. Wear them facing front or back, either way our high quality hats keep you looking cool and stylish."
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
        description: "From cold-weather commutes to days on the mountain, this wool-blend beanie keeps you warm when temps are low. The ribbed cuff adds extra style."
      },
      {
        id: 8,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
        description: "One size fits most heads, has a plastic adjustable snapback closure. Flat Bill, sexy blue colour, and this hat is suitable for custom Embroidery and Printing. You can look cool while sporting your own custom prints."
      },
      {
        id: 9,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
        description: "This Ball Cap Is Made Of 100% Cotton and is imported. Adjustable, One Size Fits Everyone. An Excellent Choice For Outdoor Activities, Such As Jungle Trekking, Fishing, And Running."
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
        description: "Pack your bag, lace up and get going. City adventures beckon in these NMD shoes. An update to an acclaimed '80s runner from the adidas archive, these modern sneakers have a soft, stretchy knit upper and energy-returning Boost cushioning for all-day comfort."
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
        description: "The adidas Yeezy 350 V2 features familiar style cues that made the silhouette popular today. The upper consists of Primeknit material for breathability. A ribbed midsole encases an entire BOOST cushioning system for added comfort. Lastly, signature “SPLY-350” is knitted along the lateral side of each pair."
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
        description: "Spring into the season in style with Converse! These high-top shoes feature sturdy canvas uppers with high-quality materials, ready-to-personalize tongue labels to track your own growth goals, cushioned footbeds for all-day comfort, and durable rubber outsoles for flexible traction."
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
        description: "With an iconic design, the Nike Air Force 1 Boot bridges indoor hoops style with the rugged outdoors. The large lugs on the rubber outsole add durable traction while the removable silicone ankle strap lets you personalise your style. The padded, high-cut collar adds heritage court comfort and features a tough webbing pull strap for a finishing touch."
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
        description: "Crisp overlays, bold accents and Air-Sole cushioning have been celebrating its hoops-inspired heritage for decades. Make the legacy your own by putting premium leather and suede where you want it, selecting the type of rubber traction and finishing it with a one-of-a-kind mark."
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
        description: "This shoe brings back the iconic design of the '82 original with suede leather that's soft and fuzzy. An Air-Sole unit cushions your feet for all-day comfort. Adjust the ankle strap for a perfect fit."
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
        description: "These Air Jordan Limited shoes are a must have, from their overall comfort and feel to their sexy look. You will not regret having these either just to wear or to add to your collection."
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
        description: "This all-season style boot gives you tireless waterproof performance and instantly recognizable work-boot styling. Other essential features include 400 grams of warm, down-free insulation, a padded collar for a comfortable fit around the ankle, a rubber lug outsole for traction, and materials sourced with respect for the planet."
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
        description: "Applying rock ‘n’ roll codes to the classic denim jacket, we present this version with a jet-black state of mind. The dyed denim silhouette addresses Paris’ no-nonsense approach to fashion with a tonal outlook; delivering its luxe shearling in the same, slick black, while brass tone hardware brings an authentic, aged appearance."
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
        description: "A Must-Have Jacket Made for Transitional Weather. Long sleeve non-stretch denim jacket in blue. Great for those cool Spring/Fall days."
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
        description: "Woven knit-like faded grey denim for ultra-stretch and casual comfort. Features pointed collar and full-length metallic buttons. Made of 80% cotton and 20% polyester, this jacket is machine washable."
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
        description: "Rugged good looks match yours in this western-inspired sherpa-lined jacket. The soft corduroy outer shell sports spacious side pockets. Comfort and style details include snap closure cuffs, quilted sleeves, and sherpa lining to insulate you from the cold when temps drop."
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
        description: "Fashion meets function with this water repellant trench coat. It's time to get some lighter trendy outerwear as spring is around the corner! Fully-lined 100% Polyester Nylon for maximum comfort."
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
        description: "Designed to keep you looking sexy and cool. Our ultra-light material and slim fit tanktop is perfect for those warm summer days with your friends!"
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20,
        description: "Go with the flow. A breezy top that gives off 'you' vibes with an original painterly floral pattern created by our inhouse designer. Designed with roomy sleeves and a fluid fabric for a feminine feel."
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80,
        description: "Calf-length dress in a softly draping crêpe weave. V-neck front and back with decorative flounces for added volume and width to the bodice. Narrow shoulder straps that become horizontal ties at the back. Concealed zip at the back. Lined."
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80,
        description: "Slay the day with this outfit. Featuring pull sleeves, sexy polkadot print on red imported fabric and ultra-light material. Impress your friends with this must-have dress."
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
        description: "Love to layer in this cold weather-ready pullover! Knit from cotton in a relaxed silhouette for ultimate comfort. The stripe pattern adds a little sporty touch to your ensemble."
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
        description: "Departing from its previous girlish aesthetic, our tracksuit is super sporty and casual. Perfect for hanging out with your friends. We love how the hazard yellow looks and we know you will too!"
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
        description: "Lacy cutouts charm this cropped blouse. Designed for style to show who's boss when you're out and about. You know you want this blouse."
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
        description: "Thick faux shearling fleece provides warmth without excessive weight in this full-zip mock-neck vest. Mesh lining on the interior boosts breathability. Secure zip chest pocket and hand pockets to carry your belongings."
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
        description: "Surf on the floral trend with this lightweight short-sleeved shirt, asserting an exclusive pattern. Crafted in premium cotton poplin, it features a trendy slim cut and an elegant tropical flower print. Wear this infinitely soft shirt against the skin, or sport it open over a white or heathered grey T-shirt."
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
        description: "Perfect for your everyday wardrobe, this black and white baseball tee features long sleeves which will form the perfect over or under layer. Made from 100% cotton, this shirt is very soft and comfortable."
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
        description: "A super soft, lightweight, cozy tee that fits true to size. We love the short sleeved look. Our products are Planet Earth friendly. Water used during the dyeing process is subsequently recycled, sewing and cutting facilities are solar powered and virtually all waste is redeployed."
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
        description: "The softest, most comfortable denim shirt yet, with built-in stretch that lets you move easily. Designed to look great untucked. Relaxed through the chest, sleeve and waist, with a slightly shorter hem you can wear untucked."
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
        description: "Time to take control of your day. A slim fit shirt featuring a polka dot print. Basic collar. Full button placket. Short sleeves. Woven. Unlined. Lightweight. Sports a professional but also relaxed look."
      },
    ],
  },
];

export default SHOP_DATA;
