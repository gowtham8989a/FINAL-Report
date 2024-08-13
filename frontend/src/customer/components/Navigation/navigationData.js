export const navigation = {
  categories: [
    {
      id: 'category',
      name: 'SHOP BY CATEGORY',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://ik.imagekit.io/vite/pexels-polina-kovaleva-7163414.jpg?updatedAt=1723523511342',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Plushies',
          href: '/',
          imageSrc: 'https://ik.imagekit.io/vite/pexels-roman-odintsov-4551971.jpg?updatedAt=1723523619472',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'toys',
          name: 'HEALTHY PRODUCTS ',
          items: [
            { name: 'FRUITS', id:"Action"},
            { name: 'VEGETABLES', id:"Games"},
            { name: 'FOODGRAINS, OIL ,MASALA', id: 'Soft' },
            { name: 'EGGS , MEAT, FISH', id: 'Infant' },
            { name: 'FRESH JUICE', id: 'Dolls' },
            { name: 'SNACK AND BRANDED FOODS', id: 'Construction' },
            { name: 'DAIRY PRODUCTS', id: 'Activity' },
          ],
        },
        {
          id: '',
          name: 'EXOTIC FRUITS',
          items: [
            { name: 'DURIAN', id: 'Outdoor' },
            { name: 'DRAGON FRUIT', id: 'Indoor' },
            { name: 'RAMBUTAN', id: 'Leisure' },
            { name: 'STAR FRUIT', id: 'Play' },
          ],
        },
        {
          id: 'Ride-Ons & Cycles',
          name: 'EXOTIC VEGETABLES',
          items: [
            { name: 'ROMANESCO', id: 'Ride' },
            { name: 'KOHLRABI', id: 'Scooters' },
            { name: 'OCA', id: 'Cycles' },
          ],
        },
      ],
    },
    {
      id: 'Characters',
      name: 'KIDS AND ADULT',
      featured: [
        {
          name: 'LEGO',
          id: '#',
          imageSrc: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494423887/665/494423887-1_5154.webp',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        // {
        //   name: 'Barbie',
        //   id: '#',
        //   imageSrc: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494423744/300/494423744-1_3686.webp',
        //   imageAlt:
        //     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        // },
      ],
      sections: [
        {
          id: 'Cartoon',
          name: 'CARTOON GAMES',
          items: [
            { name: 'SPIDER MAN', id: 'Spiderman' },
            { name: 'IRON MAN', id: 'Ironman' },
            { name: 'DORAEMON', id: 'Doraemon' },
            { name: 'SHINCHAN', id: 'Shinchan' },
            { name: 'BATMAN', id: 'Batman' },
            { name: 'OGGY', id: 'Oggy' },
            { name: 'TOM AND JERRY', id: 'Tom' },
            
          ],
        },
        {
          id: 'Anime',
          name: 'ANIME BOOKS',
          items: [
            { name: 'NARUTO', id: 'Naruto' },
            { name: 'ONE PIECE', id: 'piece' },
            { name: 'JUJUSTU KAISEN', id: 'jujutsu' },
            { name: 'DEMON SLAYER', id: 'demon' },
            { name: 'SOLO LEVELING', id: 'solo' },
            { name: 'SILENT VOICE', id: 'silent' },
          ],
        },
        {
          id: 'Fantasy',
          name: 'FANTASY BOOKS',
          items: [
            { name: 'HARRY POTTER', id: 'harry' },
            { name: 'TOY STORY', id: 'Story' },
            { name: 'THE CABBAGE FAIRY', id: 'Cabbage' },
            { name: 'DRAGON FRUIT', id: 'warrior' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: '', id: '/' },
    { name: '', id: '/' },
  ],
}