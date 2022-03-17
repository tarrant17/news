
export const generateStringRandom = (longueur=2) => {
   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   const length = longueur;
   let randomStr = "";

   for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * characters.length);
      randomStr += characters[randomNum];
   }

   return randomStr
}

const generateRandomImage = () => {
   return "https://picsum.photos/800/600" + "/?nocache=" + generateStringRandom()
}

export const getNewsBouchons = (pageNumber) => {
   newsBouchons.data.value.forEach(element => {
      let randomImage = generateRandomImage()
      element.title= 'Page : ' + String.toString(pageNumber) + ' ' + generateStringRandom(10)
      element.image.thumbnail = randomImage
      element.image.url = randomImage
   });
   return newsBouchons
}

let newsBouchons = {
   data: {
      "_type": "news",
      "didUMean": "",
      "totalCount": 679,
      "relatedSearch": [

      ],
      value: [
         {
            id: "5802488815952859900",
            "title": "The Hits",
            "url": "https://www.voanews.com/a/6452998.html",
            "description": "blaVOA1 is the Voice of Americas 24/7 English language music network. Hear the freshest cuts from chart-toppers Beyonc, Justin Timberlake, Lady Gaga, Bruno Mars, Rihanna, Pink, One Direction, Taylor Swift, Katy Perry, and more.VOA1 is the Voice of Americas 24/7 English language music network. Hear the freshest cuts from chart-toppers Beyonc, Justin Timberlake, Lady Gaga, Bruno Mars, Rihanna, Pink, One Direction, Taylor Swift, Katy Perry, and more.VOA1 is the Voice of Americas 24/7 English language music network. Hear the freshest cuts from chart-toppers Beyonc, Justin Timberlake, Lady Gaga, Bruno Mars, Rihanna, Pink, One Direction, Taylor Swift, Katy Perry, and more.bla",
            "body": "\n\nVOA1 is the Voice of Americas 24/7 English language music network. Hear the freshest cuts from chart-toppers Beyonc, Justin Timberlake, Lady Gaga, Bruno Mars, Rihanna, Pink, One Direction, Taylor Swift, Katy Perry, and more.",
            "snippet": "... freshest cuts from chart-toppers Beyonc, Justin Timberlake, Lady Gaga, Bruno Mars, Rihanna, Pink, One Direction, <b><b>Taylor Swift</b></b>, Katy Perry, and more.",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "2022-03-08T11:05:00",
            "provider": {
               "name": "voanews",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://www.voanews.com/Content/responsive/VOA/img/top_logo_news.png",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100" + "/?nocache=" + generateStringRandom(),
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "voanews",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://www.voanews.com/a/6452998.html"
            }
         },
         {
            "id": "4546037252025289646",
            "title": "'Cats' Star Taylor Swift Raves About Zoe Kravitz's Catwoman",
            "url": "https://wegotthiscovered.com/movies/cats-star-taylor-swift-raves-about-zoe-kravitzs-catwoman/",
            "description": "Former 'Cats' star Taylor Swift has raved about Zoe Kravitz's purr-fect performance as Catwoman in 'The Batman'.",
            "body": "Click to skip\nClick to zoom\nIf youre wondering if this is Taylor outing herself as a secret Batman fan Well, maybe it is, but its likely she mostly checked out the movie to support her good friend. Swift and Kravitz are known to have had a close friendship for years. They were even part of the same COVID quarantine bubble back in 2020.\nSwift isnt the only celeb making their support of Kravitz known. Two previous Catwomen have likewise shared the love on social media, with both Michelle Pfeiffer (star of 1992s Batman Returns) and Halle Berry (2004s Catwoman) praising their successor on Instagram A lot of fans are also hyping up Kravitz as the best Catwoman weve ever had The overwhelming positivity for her Catwoman certainly means a lot for the Big Little Lies star as she recently revealed how she was rejected from The Dark Knight Rises for\nbeing too urban.\nGiven the high praise Kravitz has received from viewers, critics, and fellow celebs, it looks like the stars hard work has paid off. The actress went all in for this role, even studying cats and other feline species like lions to get into Catwomans headspace  in fact, she got so engrossed in playing the unique characteristics of her character that she had to be told to tone down the catlike aspectsof her portrayal.\nGo see Zoe Kravitz as Catwoman in The Batman, playing in theaters now.\nLoad More",
            "snippet": "Former 'Cats' star <b><b>Taylor Swift</b></b> has raved about Zoe Kravitz's purr-fect performance as Catwoman in 'The Batman'. If youre wondering if this is <b>Taylor</b> ...",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "2022-03-08T06:46:16",
            "provider": {
               "name": "wegotthiscovered",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://wegotthiscovered.com/wp-content/uploads/2022/03/Taylor-Swift-2-Getty.jpeg",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100",
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "wegotthiscovered",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://wegotthiscovered.com/movies/cats-star-taylor-swift-raves-about-zoe-kravitzs-catwoman/"
            }
         },
         {
            "id": "4885411440121754811",
            "title": "Taylor Swift called Zo Kravitz the catwoman of dreams after watching The Batman",
            "url": "https://d1softballnews.com/taylor-swift-called-zoe-kravitz-the-catwoman-of-dreams-after-watching-the-batman/",
            "description": "Taylor Swift loves Zo Kravitz as Catwoman. the batman premiered on March 4 and stars Robert Pattins",
            "body": "Leave a comment\n24 Views\nTaylor Swift loves Zo Kravitz as Catwoman. the batman premiered on March 4 and stars Robert Pattinson, Kravitz, Paul Dano, Jeffrey Wright, Andy Serkis and Colin Farrell.  On March 6, Swift posted on her Instagram story that seeing Kravitz was like seeing the cat lady of dreams.\n(L-R) Taylor Swift and Zoe Kravitz |\nTaylor Swift thinks Zo Kravitz is a great Catwoman\nsince it was released Red (Taylor Version) As of November 2021, Swift hasnt been posting much on social media.  However, this didnt stop Swift from jumping on Instagram to compliment Kravitzs performance as Selina Kyle/Catwoman.\nOn March 6, Swift posted a photo of Kravtiz and Pattinson on the batman on her Instagram story.  The photo appeared to have been taken during a small screening of the film.\nSwift captioned the photo, @zoeisabellakravitz IS THE CAT WOMAN OF DREAMS.  Batman was PHENOMENAL!!!\n\n src=https://www.youtube.com/embed/mqqft2x_Aa4?feature=oembed frameborder=0 allow=accelerometer;  self-reproduction;  clipboard-write;  encrypted media;  gyroscope;  picture in picture allowfullscreen>\nRELATED: The Batman Movie Review: Robert Pattinson Serves Sublime Detective Crime Thriller\nFans love that Taylor Swift gives Zo Kravitz a shout out\nAfter Swift wrote about Kravitz on her Instagram Story, Swifts fans took to social media to discuss the singers recent post.\nBecause Swift hasnt been as active on social media in recent months, some fans of the singer-songwriter were surprised that Swift returned to Instagram just to talk about Kravitz and the batman.\n*Take a 2 month break *Come back to praise Zoe Kravitz Love to watch it, one fan wrote on Reddit.\nOne Reddit user wrote: Who made Taylor break a 2+ month non-personal posting streak by posting about The Batman of all things?\nSwift is also known for hinting at upcoming releases on her social media.  Because of this, some fans joked that Swifts Instagram story about the batman it was actually a clue.\nSo the first thing he posts after his hiatus is about The Batman, a SUPER HERO movie.  Do you know who else is a DC superhero?  Thats right, SUPERMAN.  So Speak Now (TV) is next a fan joked on Reddit.\n\n src=https://www.youtube.com/embed/5UMCrq-bBCg?feature=oembed frameborder=0 allow=accelerometer;  self-reproduction;  clipboard-write;  encrypted media;  gyroscope;  picture in picture allowfullscreen>\nRELATED: Dylan OBrien thinks the relationship in Taylor Swifts All Too Well: The Short Film is nuanced\nTaylor Swift and Zo Kravitz are friends\nWhile Swift and Kravitz arent often seen together, the two have been friends for quite some time.  In 2020, nyt magazine editor Jake Silverstein revealed in an interview with Womens Wear Daily that Swift helped Kravitz with a photo shoot in London.\nDue to the coronavirus (COVID-19) pandemic, Kravitz took extra precautions for a photo shoot while in London.  At the time, Swift was also in London.\nSince the two were in the same pandemic bubble, Swift helped Kravitz with the photo shoot in London while a photographer gave Swift instructions via video call.\nZoe was being very strict about it anyway because shes shooting a movie, Silverstein told Womens Wear Daily.  And Taylor Swift was in her capsule and willing to help.\nRELATED: How Taylor Swifts Songs I Know Places and Peace Are Lyrically Connected",
            "snippet": "<b><b>Taylor Swift</b></b> loves Zo Kravitz as Catwoman. the batman premiered on March 4 and stars Robert Pattins.",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "2022-03-08T06:04:00",
            "provider": {
               "name": "d1softballnews",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://zonadeprensard.com/wp-content/uploads/2022/03/Taylor-Swift-Zoe-Kravitz-1200x720.jpg",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100",
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "d1softballnews",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://d1softballnews.com/taylor-swift-called-zoe-kravitz-the-catwoman-of-dreams-after-watching-the-batman/"
            }
         },
         {
            "id": "2561990468362435214",
            "title": "Taylor Swift Called Zo Kravitz 'the Cat Woman of Dreams' After Watching 'The Batman'",
            "url": "https://www.cheatsheet.com/entertainment/taylor-swift-zoe-kravitz-cat-woman-of-dreams-the-batman.html/",
            "description": "On her Instagram story, Taylor Swift praised her friend Zo Kravitz as Catwoman after watching 'The Batman.'",
            "body": "Taylor Swift\nloves Zo Kravitzas Catwoman. The Batman was released on March 4, and it stars Robert Pattinson, Kravitz, Paul Dano, Jeffrey Wright, Andy Serkis, and Colin Farrell. On March 6, Swift posted on her Instagram story that seeing Kravitz was like seeing the Cat Woman of dreams.\n(L-R) Taylor Swift and Zo Kravitz |\nTaylor Swift thinks Zo Kravitz is a great Catwoman\nEver since releasing Red (Taylors Version) in November 2021, Swift has not been posting on social media much. However, this did not stop Swift from jumping on Instagram to compliment Kravitzs portrayal as Selina Kyle / Catwoman.\nOn March 6, Swift posted a picture of Kravtiz and Pattinson in\non her Instagram story. The photo appeared to have been taken during a small screening of the movie.\nSwift captioned the photo, @zoeisabellakravitz IS THE CAT WOMAN OF DREAMS. The Batman was PHENOMENAL!!!\nRELATED:\nThe Batman Movie Review: Robert Pattinson Serves Sublime Detective Crime Thriller\nFans love Taylor Swift giving Zo Kravitz a shout-out\nAfter Swift wrote about Kravitz on her Instagram story, fans of Swift took to social media to discuss the singers recent post.\nBecause Swift has not been that active on social media over the past few months, some fans of the singer-songwriter were surprised Swift returned to Instagram just to talk about Kravitz and The Batman.\n*Goes on a 2 month break *Returns to praise Zoe Kravitz You love to see it, one fan wrote on Reddit\nA Reddit user wrote, Who had Taylor breaking an over 2 month non-personal post streak by posting about The Batman of all things?\nSwift is also known for dropping hintsabout upcoming releases on her social media. Because of this, some fans joked that Swifts Instagram story about The Batman was actually a clue.\nSo the first thing she posts after her hiatus is about The Batman, a SUPER HERO movie. You know who else is a DC super hero? Thats right, SUPERMAN. Therefore, Speak Now (TV) is next, a fan joked on Reddit.\nRELATED:\nDylan OBrien Thinks the Relationship in Taylor Swifts All Too Well: The Short Film Is Nuanced\nTaylor Swift and Zo Kravitz are friends\nWhile Swift and Kravitz are not spotted together often, the two have been friends for quite some time. In 2020, NYT MagazineeditorJake Silversteinrevealed in an interview with\nWomens Wear Daily\nthat Swift helped Kravitz with a photoshoot in London.\nBecause of the coronavirus (COVID-19) pandemic, Kravitz had extra precautions for a photoshoot while in London. At the time, Swift was also in London.\nSince the two were in the same pandemic bubble, Swift helped Kravitz out with the photoshoot in London while a photographer gave Swift instructions over a video call.\nZoe was being very strict about it anyway because shes shooting a movie, Silverstein told Womens Wear Daily. And Taylor Swift was in her pod and willing to assist.\nRELATED:",
            "snippet": "On her Instagram story, <b><b>Taylor Swift</b></b> praised her friend Zo Kravitz as Catwoman after watching 'The Batman.'. loves Zo Kravitzas Catwoman.",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "2022-03-08T03:39:13",
            "provider": {
               "name": "cheatsheet",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://www.cheatsheet.com/wp-content/uploads/2022/03/Taylor-Swift-Zoe-Kravitz-1200x720.jpg",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100",
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "cheatsheet",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://www.cheatsheet.com/entertainment/taylor-swift-zoe-kravitz-cat-woman-of-dreams-the-batman.html/"
            }
         },
         {
            "id": "8092108571402590652",
            "title": "A massive Tribeca spread next door to Taylor Swift asks $6M",
            "url": "https://nypost.com/2022/03/07/a-massive-tribeca-spread-next-door-to-taylor-swift-asks-6m/",
            "description": "Taylor Swift has spent a jaw-dropping $47.7 million over the years buying huge swaths of a Tribeca block, mainly in the 19th-century Sugar Loaf Building at 155 Franklin St. That's where she owns a duplex penthouse and half of the building's second floor.",
            "body": "Down-on-his-luck Peloton founder lists $55M Hamptons mansion at a loss\nBe Taylor Swifts neighbor  if she doesnt beat you to it.\nThe singer has spent a jaw-dropping $47.7 millionover the years buying huge swaths of a Tribeca block,mainly in the 19th-century Sugar Loaf Building at 155 Franklin St. Thats where sheowns a duplex penthouse and half ofthe buildingssecond floor.\nNow, the remaining half of the second floor is up for sale asking $6.25 million. The three-bedroom, 2-bathroom condo is 2,438 square feet. The classic loft  in a building that dates to 1882  features original details such as hardwood floors, steel columns, exposed brick and beamed ceilings.\nThe unit opens to a large foyer that leads to an open kitchen with a breakfast bar. Elsewhere inside, the master suite has two closets  and an ensuite bathroom with a double vanity, a soaking tub and a rain shower. The listing broker is Corcorans Jeff Wachtenheim.\nBuilt in 1882, this Tribeca loft has been home to a number of A-listers.\nEvan Joseph Photography for Corcoran.\nThis unit has three bedrooms, 2 bathrooms and boasts 2,438 square feet.\nEvan Joseph Photography for Corcoran.\nIt has a large open kitchen with a breakfast bar.\nEvan Joseph Photography for Corcoran.\nHave besties over for brunch!\nEvan Joseph Photography for Corcoran.\nIn 2018, Swift bought the 3,540-square-foot second-floor spread for $9.75 million from financier Jeremy Phillips in an off-market deal. She also owns two top-floor units that shecombined to create an 8,000-square-foot duplex penthouse. She bought those units for $19.95 million from Lord of the Rings director Peter Jackson in 2014.\nOther high-profile names have been linked to the building. Last year, Lord of the Rings actor Orlando Blooms former unit in the building sold in less than three weeks for $7.1 millionin an all cash deal. That unit had also been a temporary home to Mary-Kate and Ashley Olsen. Past and present residents of the Sugar Loaf Building have also included actor/comedian Aziz Ansariand Academy Award winning director Steven Soderbergh.\nSwift also owns an $18 million townhouse next door, which comes with its own gym and spa. Its all part of the pop stars\n, that stretches from Big Apple city streets to Rhode Island, Los Angeles and Nashville.\nShare this article:",
            "snippet": "<b><b>Taylor Swift</b></b> has spent a jaw-dropping $47.7 million over the years buying huge swaths of a Tribeca block, mainly in the 19th-century Sugar Loaf ...",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "2022-03-07T23:46:52",
            "provider": {
               "name": "nypost",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://nypost.com/wp-content/uploads/sites/2/2022/03/taylorswift-155-franklin-comp-2.jpg?quality=90&#038;strip=all&#038;w=1024",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100",
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "nypost",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://nypost.com/2022/03/07/a-massive-tribeca-spread-next-door-to-taylor-swift-asks-6m/"
            }
         },
         {
            "id": "7983642140587814168",
            "title": "Phoebe Bridgers Announces Summer 2022 Tour Dates",
            "url": "https://music.mxdwn.com/2022/03/07/news/phoebe-bridgers-announces-summer-2022-tour-dates/",
            "description": "Phoebe Bridgers has announced the live shows for her 2022 Reunion Tour. With four Grammy nominations, a debut onSaturday Night Live, festival appearances and collaborations with Taylor Swift, The Killers, Paul McCartney and Metallica, Bridgers has most recently won Billboard's 2022 omen in Music Trailblazer Award",
            "body": "Phoebe Bridgers\nhas announced the live shows for her 2022 Reunion Tour. With four Grammy nominations, a debut on Saturday Night Live, festival appearancesand collaborations with Taylor Swift, The Killers, Paul McCartney and Metallica, Bridgers has most recently won Billboards 2022 omen in Music Trailblazer Award and will be taking her Punisher album to fans across the United States, Canada, the UK and Europe.\nThe Reunion Tour will begin April 13 in Phoenix, Arizona, and conclude in Los Angeles, California after making stops in Indio, Las Vegas, Morrison, Austin, Tampa, Louisville, Omaha, Milwaukee, Dublin, Somerset, Birmingham, Milan, Madrid, Paris, London, Vancouver, Paso Robles and more.\nVerified Fan Presale will begin March 10, while Ticketmasters Verified Fan Registration is currently open until March 8. $1 of every sold headline show ticket will be donated to The Mariposa Fund, which is supported by The West Fund, which aids undocumented immigrants get reproductive health services.\nPunisher includes powerfully emotional ballads like Moon Song, I Know The End and Savior Complex, which have earned Bridgers acclaim across the world for her painfully real lyricism and smooth vocals.\nThe full list of tour dates can be viewed below.\nPhoto Credit: Boston Lynn Schulz\nThe 2022 Reunion Tour\n4/13: Arizona Federal Theatre  Phoenix, AZ\n4/15: Coachella  Indio, CA\n4/22: Coachella  Indio, CA\n5/13: The Amp at Craig Ranch  Las Vegas, NV\n5/14: Kilby Block Party  Salt Lake City, UT\n5/17: Red Rocks Amphitheatre  Morrison, CO\n5/19: The Pavilion at Toyota Music Factory  Dallas, TX\n5/20: Moody Amphitheater at Waterloo Park  Austin, TX\n5/21: The Lawn at White Oak Music Hall  Houston, TX\n5/22: Hangout Fest  Gulf Shores, AL\n5/24: The Cuban Club  Tampa, FL\n5/25: St Augustine Amphitheatre  St Augustine, FL\n5/27: Cadence Bank Amphitheatre at Chastain Park  Atlanta, GA\n5/28: Forecastle Festival  Louisville, KY\n5/31: Starlight Theatre  Kansas City, MO\n6/1: The Waiting Room Outdoors  Omaha, NE\n6/3: BMO Harris Pavilion  Milwaukee, WI\n6/4: Huntington Bank Pavilion at Northerly Island  Chicago, IL\n6/7: RBC Echo Beach  Toronto, ON\n6/8: MTelus  Montreal, QC\n6/9: Thompsons Point  Portland, ME\n6/11: The Anthem  Washington, DC\n6/12: The Anthem  Washington, DC\n6/13: Stone Pony Summer Stage  Asbury Park, NJ\n6/15: BRIC Celebrate Brooklyn! Festival at Prospect Park Bandshell  Brooklyn, NY\n6/20: Fairview Park  Dublin, Ireland\n6/22: Barrowland  Glasgow, UK\n6/24-25: Glastonbury  Somerset, UK\n6/26: O2 Academy  Birmingham, UK\n6/30: Roskilde Festival  Roskilde, Denmark\n7/2: Rock Werchter Festival  Werchter, Belgium\n7/3: Down The Rabbit Hole Festival  Ewijk, Netherlands\n7/5: Carroponte  Milan, Italy\n7/7: Bilbao BBK Festival  Bilbao, Spain\n7/8: Mad Cool Festival  Madrid, Spain\n7/9: NOS Alive Festival  Lisbon, Portugal\n7/14: Colours of Ostrava  Ostrava, Czech Republic\n7/17: Lollapalooza Paris  Paris, France\n7/22: Latitude Festival  Suffolk, UK\n7/23: O2 Apollo  Manchester, UK\n7/26: O2 Academy Brixton  London, UK\n8/7: Hinterland  Saint Charles, IA\n8/18: Spokane Pavilion  Spokane, WA\n8/20: Orpheum Theatre  Vancouver, BC\n8/23: Marymoor Park  Redmond, WA\n8/25: Edgefield Amphitheater  Troudale, OR\n8/27: Vina Robles Amphitheatre  Paso Robles, CA\n8/28: This Aint No Picnic  Los Angeles, CA\nTags",
            "snippet": "... debut onSaturday Night Live, festival appearances and collaborations with <b><b>Taylor Swift</b></b>, The Killers, Paul McCartney and Metallica, Bridgers has most ...",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "2022-03-07T22:56:34",
            "provider": {
               "name": "mxdwn",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://music-b26f.kxcdn.com/wp-content/uploads/2021/10/Phoebe-Bridgers_BS_20211021-7062.jpg",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100",
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "mxdwn",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://music.mxdwn.com/2022/03/07/news/phoebe-bridgers-announces-summer-2022-tour-dates/"
            }
         },
         {
            "id": "5044545741183958769",
            "title": "Taylor Swift Was A Huge Fan Of Zoe Kravitz In 'The Batman'",
            "url": "https://www.nylon.com/entertainment/taylor-swift-praises-zoe-kravitz-catwoman-batman",
            "description": "Swift had nothing but praise for Kravitzs Batman performance.",
            "body": "Taylor Swift Loved Zo Kravitz As Catwoman\nSwift had nothing but praise for Kravitzs Batman performance.\ntw\nIt appears Taylor Swiftwas among the many DC Comic fans who traveled to theaters to see The Batman this weekend. The blockbuster, directed by Matt Reeves, and starring Zo Kravitz(Selina Kyle / Catwoman) and Robert Pattinson(Bruce Wayne / Batman), premiered on Sunday, March 6th. In the 24 hours since its debut The Batman dominated the box-office, grossing roughly 128 million, and, perhaps more importantly, got Swift's stamp of approval in the process.\nAfter seeing the movie, the All Too Well singer fan-girled over Kravitz's performance. According to\nPeople\n, Swift posted a story on her Instagram account praising the actress portrayal as Catwoman. @zoeisabellakravitz is the Catwoman of my dreams, she wrote alongside an image of Kravitz in costume, The Batman was phenomenal.\nKravitz is the latest Hollywood star to take on the role, stepping into the shoes of many elite-actresses that came before her. Michelle Pfeiffer, Eartha Kitt, Anne Hathaway, and Halle Berry all starred as Catwoman at one point in their careers. Their depictions of the feisty-character all differed, but Kravitz re-imagined the role for the 2022 production, giving Catwoman a fresh, and queer, twist.\nJust last week the actress announced that she interpreted Catwoman as bisexual and played the role with that in mind. Though Catwoman, historically, has been written as queer in the DC Comicbooks, this was the first time an actress has attempted to portray that on screen.\nSwift did not comment on the details of Kravitz performance,  but according to her review, its certainly one worth seeing. The Batman is currently available to watch in theaters everywhere and will reportedly be available to streamon HBO Max next month.",
            "snippet": "<b><b>Taylor Swift</b></b> Loved Zo Kravitz As Catwoman. <b>Swift</b> had nothing but praise for Kravitzs Batman performance.",
            "keywords": "",
            "language": "en",
            "isSafe": false,
            "datePublished": "2022-03-07T21:52:31.862",
            "provider": {
               "name": "nylon",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://imgix.bustle.com/uploads/image/2022/3/7/46cb79b6-a1d6-4647-9fad-208029c3ed0e-tay.jpeg?w=1200&amp;h=630&amp;fit=crop&amp;crop=focalpoint&amp;fm=jpg&amp;fp-x=0.492&amp;fp-y=0.4272",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100",
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "nylon",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://www.nylon.com/entertainment/taylor-swift-praises-zoe-kravitz-catwoman-batman"
            }
         },
         {
            "id": "1813831857007375813",
            "title": "The Batman: Taylor Swift joins the fandom of the film and praises Zoe Kravitz as Catwoman",
            "url": "https://d1softballnews.com/the-batman-taylor-swift-joins-the-fandom-of-the-film-and-praises-zoe-kravitz-as-catwoman-film-and-television/",
            "description": "Taylor Swift has also seen batman. And it seems that she loved it. Or that is what she has shown on",
            "body": "Leave a comment\n45 Views\nTaylor Swift has also seen batman.  And it seems that she loved it.  Or that is what she has shown on her Instagram profile.  The interpreter of Enchated showed on March 6 his admiration for Zoe Kravitz What cat woman in an Instagram story.  She is the Catwoman of dreams, wrote the singer. But this has not been all.\nThe American has also praised the film: Batman has been phenomenal!, adds in the publication. And it is that to see this film, the artist has decided to go to a cinema to see it. This way you enjoy the moment more. Perhaps you have gone to the cinema closest to your house with a family member or friends. But what we do know for sure is that Taylor has thoroughly enjoyed one of the best movies released in 2022.\nTaylor Swift hails Zoe Kravitzs performance.\n/\nCapture of his official Instagram account.\nbatmanone of the best premieres of 2022\nAnd it is not surprising to us.  Since batman premiered on March 4 has become a box office success.  According The Hollywood Reportr, the film has grossed a total of 128.5 million dollars upon its US release. It now has more than 248 million Worldwide.  Likewise, it is being considered as one of the best releases of the yearafter Spider-Man: No Way Home (2021).\nIt is clear that the interpretation of Robert Pattinson What Batman and Zoe Kravitz What cat woman is being acclaimed by millions of viewers around the world.  For this reason, the congratulations of Taylor, a great friend of Zoe for a long time, were not going to be missing. several years.  Taylor even helped Kravitz on a photo shoot for the The New York Times Magazine about social distancing due to the pandemic.\nUndoubtedly, the support of friends is fundamental in our day to day and here Taylor Swift has demonstrated it perfectly.  And you, what did you think of Robert Pattinson and Zoe Kravitz?  Youve seen the movie?",
            "snippet": "<b><b>Taylor Swift</b></b> has also seen batman. And it seems that she loved it.",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "2022-03-07T19:57:46",
            "provider": {
               "name": "d1softballnews",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://los40es00.epimg.net/los40/imagenes/2022/03/07/cinetv/1646674239_141057_1646674379_rrss_normal.jpg",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100",
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "d1softballnews",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://d1softballnews.com/the-batman-taylor-swift-joins-the-fandom-of-the-film-and-praises-zoe-kravitz-as-catwoman-film-and-television/"
            }
         },
         {
            "id": "6113124002571566838",
            "title": "Taylor Swift Calls Zo Kravitz The Catwoman Of Dreams",
            "url": "https://www.buzzfeed.com/emilymaeczachor/taylor-swift-zoe-kravitz-praise-catwoman-the-batman",
            "description": "\"The Batman was PHENOMENAL!!!\"",
            "body": "'s debut as Catwoman in\nThe Batman\nare clearly missing out. For proof, feel free to consult fan reactions, critical consensus, and commendations from famous folks like Taylor Swift who praised her friend's performance on Instagram yesterday.\nDimitrios Kambouris / Getty Images, Cindy Ord / WireImage via Getty Images\nTaylor apparently contributed to\nThe Batman\n's massive turnout at theaters nationwide this past weekend, when Matt Reeves' anticipated movie finally premiered after years of stalled productiontimelines.\nTap to play or pause GIF\nTap to play or pause GIF\nWarner Bros. Pictures / Via\nExpectations surrounding the superhero storywere understandably high ahead of its release, and record-breaking box officenumbers seem to confirm Zo and Robert Pattinsonrose to meet the occasion.\nMike Marsland / Mike Marsland / WireImage via Getty Images\nThat might actually be an understatement. Outside of just ticket sales \nThe Batman",
            "snippet": "... fan reactions, critical consensus, and commendations from famous folks like <b><b>Taylor Swift</b></b> who praised her friend's performance on Instagram yesterday.",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "2022-03-07T19:28:06",
            "provider": {
               "name": "buzzfeed",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://img.buzzfeed.com/buzzfeed-static/static/2022-03/7/19/enhanced/bfcadcfe6c18/original-970-1646679811-12.jpg?crop=1250:654;0,0%26downsize=1250:*",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100",
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "buzzfeed",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://www.buzzfeed.com/emilymaeczachor/taylor-swift-zoe-kravitz-praise-catwoman-the-batman"
            }
         },
         {
            "id": "7995037418969193521",
            "title": "Taylor Swift Snapped A Photo From Inside Her Batman Screening In Order To Hype Up Zo Kravitz",
            "url": "https://www.cinemablend.com/superheroes/batman/taylor-swift-snapped-a-photo-from-inside-her-batman-screening-in-order-to-hype-up-zoe-kravitz",
            "description": "Taylor Swift couldn't wait to show her support for Zo Kravitz as Catwoman, and took a pic while watching The Batman.",
            "body": "Mild spoilers ahead for The Batman. Everybodys talking about The Batman , which premiered this weekend, and dominated the box office  as expected. While most of us were excited to see director Matt Reeves vision and Robert Pattinsons emo execution of the Dark Knight, some viewers with more famous names were excited to support their fellow celebrities performances. Taylor Swift was among the latter, as she apparently shared a photo from inside the theater to show her love for",
            "snippet": "<b><b>Taylor Swift</b></b> couldn't wait to show her support for Zo Kravitz as Catwoman, and took a pic while watching The Batman. Mild spoilers ahead for The ...",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "2022-03-07T18:47:32",
            "provider": {
               "name": "cinemablend",
               "favIcon": "",
               "favIconBase64Encoding": ""
            },
            "image": {
               "url": "https://cdn.mos.cms.futurecdn.net/8HXBUppnv8W5iHkCSr3U8R.jpg",
               "height": 0,
               "width": 0,
               "thumbnail": "https://picsum.photos/300/100",
               "thumbnailHeight": 0,
               "thumbnailWidth": 0,
               "base64Encoding": "",
               "name": null,
               "title": null,
               "provider": {
                  "name": "cinemablend",
                  "favIcon": "",
                  "favIconBase64Encoding": ""
               },
               "imageWebSearchUrl": null,
               "webpageUrl": "https://www.cinemablend.com/superheroes/batman/taylor-swift-snapped-a-photo-from-inside-her-batman-screening-in-order-to-hype-up-zoe-kravitz"
            }
         }
      ]
   }
}