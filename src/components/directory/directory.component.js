import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
          sections: [
          {"id":"259",
          "name":"Raspberry Mineral Water",
          "description":"An 8-ounce serving of our refreshing H+ Sport raspberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
          "image_title":"mineral-water-raspberry_600px",
          "linkUrl": "shop",
          "image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-raspberry_600px.png"},
          {"id":"429",
          "name":"Strawberry Mineral Water",
          "description":"An 8-ounce serving of our refreshing H+ Sport strawberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
          "image_title":"mineral-water-strawberry_600px",
          "image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-strawberry_600px.png"},
          {"id":"436",
          "name":"Blueberry Mineral Water",
          "description":"An 8-ounce serving of our refreshing H+ Sport blueberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
          "image_title":"minearl-water-blueberry_600px",
          "image":"https://hplussport.com/wp-content/uploads/2015/12/minearl-water-blueberry_600px.png"},
          {"id":"437",
          "name":"Lemon-Lime Mineral Water",
          "description":"An 8-ounce serving of our refreshing H+ Sport lemon-lime\u00c2\u00a0mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals",
          "image_title":"mineral-water-lemon-lime_600px",
          "image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-lemon-lime_600px.png"},
          {"id":"438",
          "name":"Peach Mineral Water",
          "description":"An 8-ounce serving of our refreshing H+ Sport peach mineral water \u00c2\u00a0fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
          "image_title":"mineral-water-peach_600px",
          "image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-peach_600px.png"},
          {"id":"439",
          "name":"Orange Mineral Water",
          "description":"An 8-ounce serving of refreshing H+ Sport orange mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
          "image_title":"mineral-water-orange_600px",
          "image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-orange_600px.png"},
          {"id":"440",
          "name":"Multi-Vitamin (90 capsules)",
          "description":"A daily dose of our Multi-Vitamins fulfills a day's nutritional needs for over 12 vitamins and minerals.",
          "image_title":"multi-vitamin_600px",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/multi-vitamin_600px.png",
          "size": "large"},
          {"id":"471",
          "name":"Flaxseed Oil 1000 mg (90 capsules)",
          "description":"Our Flaxseed Oil contains Omegas 3, 6, and 9 for a heart-healthy option without the use of fish oil.",
          "image_title":"flaxseed-oil_600px",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/flaxseed-oil_600px.png",
          "size": "large"},
          {"id":"472",
          "name":"Magnesium 250 mg (100 tablets)",
          "description":"Magnesium is critical to many bodily processes, and supports nerve, muscle, and heart function.",
          "image_title":"magnesium_600px",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/magnesium_600px.png",
          "size": "large"},
          {"id":"473",
          "name":"Iron 65 mg (150 caplets)",
          "description":"Iron is essential for transporting oxygen in the body and for the formation of red blood cells.",
          "image_title":"iron_600px",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/iron_600px.png",
          "size": "large"},
          {"id":"474",
          "name":"Calcium 400 IU (150 tablets)",
          "description":"Our Calcium supports strong bones and teeth and may help prevent osteoporosis.<strong>\u00c2\u00a0</strong>",
          "image_title":"calcium_600px",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/calcium_600px.png",
          "size": "large"},
          {"id":"475",
          "name":"Vitamin D3 1000 IU (100 tablets)",
          "description":"Vitamin D<sub>3</sub> is the body's preferred form of Vitamin D, and helps support bone, teeth, and immune health.",
          "image_title":"vitamin-d_600px",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/vitamin-D_600px.png",
          "size": "large"},
          {"id":"476",
          "name":"Vitamin A 10,000 IU (125 caplets)",
          "description":"Vitamin A is essential for normal and night vision, and helps maintain healthy skin and mucous membranes.",
          "image_title":"vitamin-a_600px",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/vitamin-A_600px.png",
          "size": "large"},
          {"id":"477",
          "name":"Vitamin C 1000 mg (100 tablets)",
          "description":"Protects against free radicals and supports the immune system.",
          "image_title":"vitamin-c_600px",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/vitamin-C_600px.png",
          "size": "large"},
          {"id":"478",
          "name":"Vitamin B-Complex (100 caplets)",
          "description":"Contains a combination of essential B vitamins that help convert food to energy.",
          "image_title":"b-complex_600px",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/B-complex_600px.png",
          "size": "large"},
          {"id":"479",
          "name":"In the Kitchen with H+ Sport",
          "description":"Henry Twill, founder and CEO of H+ Sport, teams up with celebrity nutritionist Jill Bayner, CNS, to bring you recipes and tips designed to maximize your athletic performance, while\u00c2\u00a0minimizing your time in the kitchen.",
          "image_title":"in-the-kitchen-with-h-book-cover",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/In-the-Kitchen-with-H-book-cover.png"},
          {"id":"483",
          "name":"Stretchy Dance Pants",
          "description":"Whether dancing the samba, mastering a yoga pose, or scaling the climbing wall, our stretchy dance pants, made from 80% organic cotton and 20% Lycra, are the most versatile and comfortable workout pants you'll ever have the pleasure of wearing.",
          "image_title":"stretch-dance-pants_lynda_29942",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/stretch-dance-pants_LYNDA_29942.jpg"},
          {"id":"500",
          "name":"Thermal Fleece Jacket",
          "description":"Our thermal organic fleece jacket, is brushed on both sides for ultra softness and warmth. This medium-weight jacket is versatile all year around, and can be worn with layers for the winter season.","image_title":"thermal-jacket_lynda_29943",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/thermal-jacket_LYNDA_29943.jpg"},
          {"id":"510",
          "name":"UItra-Soft Tank Top",
          "description":"This versatile tank can be worn in the gym, under a blazer, or for a day out in the sun. Made from our patented organic bamboo and cotton mix, our ultra-soft tank never stops feeling soft, even when you forget the fabric softener.",
          "image_title":"ultra-soft-tank-top-for-women_lynda_29945",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/ultra-soft-tank-top-for-women_LYNDA_29945.jpg"},
          {"id":"514","name":"Grunge Skater Jeans",
          "description":"Our boy-cut jeans are for men and women who appreciate that skate park fashions aren't just for skaters. Made from the softest and most flexible organic cotton denim.",
          "image_title":"unisex-grunge-jeans_lynda_29937",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/unisex-grunge-jeans_LYNDA_29937.jpg"},
          {"id":"516",
          "name":"Unisex Thermal Vest",
          "description":"Our thermal vest, made from organic bamboo with recycled plastic down filling, is a favorite of both men and women. You'll help the environment, and have a wear-easy piece for many occasions.","image_title":"unisex-thermal-vest_lynda_29944","image":"https://hplussport.com/wp-content/uploads/2016/12/unisex-thermal-vest_LYNDA_29944.jpg"},{"id":"518","name":"V-Neck Pullover","description":"This organic hemp jersey pullover is perfect in a pinch. Wear for casual days at the office, a game of hoops after work, or running your weekend errands.","image_title":"v-neck-long-sleeved-pullover_lynda_29946","image":"https://hplussport.com/wp-content/uploads/2016/12/v-neck-long-sleeved-pullover_LYNDA_29946.jpg"},{"id":"520","name":"V-Neck Sweater","description":"This medium-weight sweater, made from organic knitted cotton and bamboo, is the perfect solution to a chilly night at the campground or a misty walk on the beach.","image_title":"v-neck-sweater-for-men_lynda_29947","image":"https://hplussport.com/wp-content/uploads/2016/12/v-neck-sweater-for-men_LYNDA_29947.jpg"},{"id":"522","name":"V-Neck T-Shirt","description":"Our pre-shrunk organic cotton V-neck T-shirt is the ultimate in comfort and durability, with triple stitching at the collar, sleeves, and waist. So versatile you'll want one in every color!","image_title":"v-neck-t-shirt-for-men_lynda_29949","image":"https://hplussport.com/wp-content/uploads/2016/12/v-neck-T-shirt-for-men_LYNDA_29949.jpg"},{"id":"526","name":"Polo Shirt","description":"Our pre-shrunk organic cotton polo shirt is perfect for weekend activities, lounging around the house, and casual days at the office. With its triple-stitched sleeves and waistband, our polo has maximum durability.","image_title":"polo-shirt_lynda_29938","image":"https://hplussport.com/wp-content/uploads/2016/12/polo-shirt_LYNDA_29938.jpg"},{"id":"528","name":"Skater Graphic T-Shirt","description":"Hip at the skate park or around down, our pre-shrunk organic cotton graphic T-shirt has you covered.","image_title":"skater-knit-shirt_lynda_29939","image":"https://hplussport.com/wp-content/uploads/2016/12/skater-knit-shirt_LYNDA_29939.jpg"},{"id":"530","name":"Bamboo Thermal Ski Coat","description":"You'll be the most environmentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.","image_title":"ski-coat_lynda_29940","image":"https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg"},{"id":"532","name":"Slicker Jacket","description":"Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.","image_title":"slicker-jacket_lynda_29941","image":"https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg"},{"id":"534","name":"Cross-Back Training Tank","description":"Our cross-back training tank is made from organic cotton with 10% Lycra for form and support, and a flattering feminine cut.","image_title":"crossback-tank_lynda_29936","image":"https://hplussport.com/wp-content/uploads/2016/12/crossback-tank_LYNDA_29936.jpg"},{"id":"524","name":"V-Neck T-Shirt","description":"Our pre-shrunk organic cotton t-shirt, with its slightly fitted waist and elegant V-neck is designed to flatter. You'll want one in every color!","image_title":"v-neck-t-shirt-for-women_lynda_29948",
          "image":"https://hplussport.com/wp-content/uploads/2016/12/v-neck-T-shirt-for-women_LYNDA_29948.jpg"}]

        }
    }

    render(){
        return( 
          <div className='directory-menu'>
              {
                  this.state.sections.map(({id, name, image, size, linkUrl}) => (
                      <MenuItem key={id} title={name} imageUrl={image} size={size} linkUrl={linkUrl} />
                  ))
              }
          </div>
        )
    }

}

export default Directory;