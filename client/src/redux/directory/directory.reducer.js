const INITIAL_STATE = {
    sections: [
        {"id":"259",
        "name":"Hawaiian Pizza",
        "description":"An 8-ounce serving of our refreshing H+ Sport raspberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
        "image_title":"mineral-water-raspberry_600px",
        "linkUrl": "shop/hawaiian-pizza",
        "image":"https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/155317413_150575326903814_9181031283758675577_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeF6uj_BfO_geZfDBAGxEmlyvF7ztq4Q7Jm8XvO2rhDsmZK9CfnnhKVVPaiuUSdZGh8MXaSJK4FnwJC9Xcxk1WaF&_nc_ohc=ZvS9j5OR5uwAX_wXA0L&_nc_ht=scontent.fcrk3-1.fna&oh=c308e77b064b8b9a80b2cf443ca49a61&oe=6080EEBC"
        },
        {"id":"440",
        "name":"Luxury Pizza",
        "description":"A daily dose of our Multi-Vitamins fulfills a day's nutritional needs for over 12 vitamins and minerals.",
        "image_title":"multi-vitamin_600px",
        "linkUrl": "shop/luxury-pizza",
        "image":"https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/154603202_150575383570475_1416622372392883804_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGvsxEf7AjASFtdeIX3HTtQbq_sKGIOsaZur-woYg6xpnsG3ro0y-WpCxwkVfWG5bm_LB8YuPfQn0ExBDmWKagt&_nc_ohc=huxM84eJ8_AAX--ySJh&_nc_ht=scontent.fcrk3-1.fna&oh=c8533abb1cc9ccd69585148e7a019330&oe=6082F386",
        "size": "large"},
        {"id":"479",
        "name":"Chicken Vegetables Pizza",
        "description":"Henry Twill, founder and CEO of H+ Sport, teams up with celebrity nutritionist Jill Bayner, CNS, to bring you recipes and tips designed to maximize your athletic performance, while\u00c2\u00a0minimizing your time in the kitchen.",
        "image_title":"in-the-kitchen-with-h-book-cover",
        "linkUrl": "shop/chicken-vegetables-pizza",
        "image":"https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/155463036_150575336903813_3583868109176858109_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHUZbrSlvv-7fv0vlZ8QOk6ueurhzDiK--566uHMOIr7-N9s88zIkLVlOkbZRQLU1PlQaOgQxoES6IxrooxqvcR&_nc_ohc=uWaLPXdOyUsAX_o09hi&_nc_ht=scontent.fcrk3-1.fna&oh=091e6254561882cb2c107851d01ae896&oe=60836011"
        },
        {"id":"483",
        "name":"Spicy Chicken",
        "description":"Whether dancing the samba, mastering a yoga pose, or scaling the climbing wall, our stretchy dance pants, made from 80% organic cotton and 20% Lycra, are the most versatile and comfortable workout pants you'll ever have the pleasure of wearing.",
        "image_title":"stretch-dance-pants_lynda_29942",
        "linkUrl": "shop/spicy-chicken",
        "image":"https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/154325249_149298480364832_3753888107488710410_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGJ7j1csgshjfae6jEbMZUAb9cRq_XnGkxv1xGr9ecaTEqeJbS43OOryi-TofEPIm7rv-Bc1LDfctzovXoWKC7L&_nc_ohc=GxNOba9A2E0AX-WjPWF&_nc_ht=scontent.fcrk3-1.fna&oh=50855899b799f7583f659d7d587849b3&oe=6083334B"
        },
        {"id":"484",
        "name":"Super Meat Pizza",
        "description":"Whether dancing the samba, mastering a yoga pose, or scaling the climbing wall, our stretchy dance pants, made from 80% organic cotton and 20% Lycra, are the most versatile and comfortable workout pants you'll ever have the pleasure of wearing.",
        "image_title":"stretch-dance-pants_lynda_29942",
        "linkUrl": "shop/super-meat-pizza",
        "image":"https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/153525489_149298537031493_1648332291280021796_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeE0nm7lt7xh0uN_WyXtqTWSYz3faDTwFEpjPd9oNPAUSr7-3Y-4hlMzQXQNWdhN3s47Fjtj9uD1KbMYE7WhJNWY&_nc_ohc=rPSp9pbOS_0AX-wAi_q&_nc_ht=scontent.fcrk3-1.fna&oh=afaac38c3b428b52d11208627dad5a45&oe=6080929C"
        },
        {"id":"584",
        "name":"Pepperoni Pizza",
        "description":"Whether dancing the samba, mastering a yoga pose, or scaling the climbing wall, our stretchy dance pants, made from 80% organic cotton and 20% Lycra, are the most versatile and comfortable workout pants you'll ever have the pleasure of wearing.",
        "image_title":"stretch-dance-pants_lynda_29942",
        "linkUrl": "shop/pepperoni-pizza",
        "image":"https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/157881094_155302776431069_3311032094053854171_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeE0nOjHGaHJxVs5rm9a9NIPWXCGRmQ-daVZcIZGZD51pajQxgr9-BVEw4mn_BhLoqYUajY5K2WzNoKlX-aKlOzU&_nc_ohc=DaVYYlYD2mYAX9yo3hX&_nc_ht=scontent.fcrk3-1.fna&oh=7462b49fca9a38f9c23b96451d4d805b&oe=6081F69B"
        },
        {"id":"684",
        "name":"Margarita Pizza",
        "description":"Whether dancing the samba, mastering a yoga pose, or scaling the climbing wall, our stretchy dance pants, made from 80% organic cotton and 20% Lycra, are the most versatile and comfortable workout pants you'll ever have the pleasure of wearing.",
        "image_title":"stretch-dance-pants_lynda_29942",
        "linkUrl": "shop/margarita-pizza",
        "image":"https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/158006554_155302616431085_430102889770117573_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFRBcimSCC_avWoXx_KTDnAYCHbjpGnRtFgIduOkadG0Zy2laoO07kE4GxQaS-ema__T-pcZpejWaeFCaTe9SNl&_nc_ohc=hfLUFQDKNCsAX98wFRR&_nc_ht=scontent.fcrk3-1.fna&oh=722622861a48104433dd34bdbd85a64f&oe=608222A4"
        },
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
   switch(action.type){
       default:
           return state;
   }
};

export default directoryReducer;