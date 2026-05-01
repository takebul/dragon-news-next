import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      _id: "0282e0e58a5c404fbd15261f11c2ab6a",
      others_info: {
        is_todays_pick: false,
        is_trending: true,
      },
      category_id: "01",
      rating: {
        number: 4.5,
        badge: "Excellent",
      },
      total_view: 488,
      title:
        "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
      author: {
        name: "Jimmy Dane",
        published_date: "2022-08-24 17:27:34",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      thumbnail_url: "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
      image_url: "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
      details:
        "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.",
    },
    {
      _id: "f69a695f037cd9484cecaea37ca71011",
      others_info: {
        is_todays_pick: false,
        is_trending: true,
      },
      category_id: "01",
      rating: {
        number: 4.8,
        badge: "Excellent",
      },
      total_view: 400,
      title:
        "Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine",
      author: {
        name: "Jennifer Wood",
        published_date: "2022-08-30 16:38:45",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      thumbnail_url: "https://i.ibb.co/k8XBcMX/unsplash-Eh-Tc-C9s-YXsw-15.png",
      image_url: "https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png",
      details:
        "Tucker Carlson has rarely met a dictator's ass he didn't want to kiss, and Vladimir Putin is at the very top of that puckering up list. The Fox News host is something of a folk hero in Russia: Because of the pro-Putin propaganda he so often spews, the Kremlin has encouraged Russia's state TV to air as much of Tucker's face as possible — and they're certain to love his latest rant about how Putin is winning the war in Ukraine, which does not seem to be the case. But on Fox News, what Tucker says goes.",
    },
    {
      _id: "11468ed61aee84de492a8b04158a22f0",
      others_info: {
        is_todays_pick: false,
        is_trending: false,
      },
      category_id: "01",
      rating: {
        number: 4.5,
        badge: "Excellent",
      },
      total_view: 980,
      title: "Joe Biden announces $3 billion in Ukraine weapons aid",
      author: {
        name: "system",
        published_date: "2022-08-24 23:15:00",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      thumbnail_url: "https://i.ibb.co/HXC719r/unsplash-Eh-Tc-C9s-YXsw-19.png",
      image_url: "https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png",
      details:
        "WASHINGTON: President Joe Biden announced nearly $3 billion in military aid to Kyiv on Wednesday -- the biggest US package so far -- to mark Ukraine's independence day, six months after Russia invaded the country. The package aims to fortify Ukraine's military over the coming two years by committing the production and... read full story",
    },
    {
      _id: "7c4dfea0fafddc813673282a428429b7",
      others_info: {
        is_todays_pick: false,
        is_trending: true,
      },
      category_id: "01",
      rating: {
        number: 4.5,
        badge: "Excellent",
      },
      total_view: 0,
      title:
        "Biden announces $3 billion Ukraine military aid package on its Independence Day",
      author: {
        name: "Reuters",
        published_date: "2022-08-25 03:09:16",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      thumbnail_url: "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
      image_url: "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
      details:
        "Published: 25 Aug 2022, 09: 09 US president Joe Biden speaks as he attends the first virtual meeting of the I2U2 group with Israeli prime minister Yair Lapid and leaders of India and the United Arab Emirates, in Jerusalem 14 July, 2022ReutersUS President Joe Biden marked Ukraine's Independence Day on Wednesday with $3 billion in security assistance, Washington's largest aid package since Russia's invasion six months ago but one that could take months or even years to arrive in Kyiv.The aid announcement came as US officials warned that Russia appeared to be planning to launch fresh attacks in coming days on Ukraine's civilian infrastructure and government facilities.",
    },
    {
      _id: "30af81e91ab3eafc0bcae0de62f55d5c",
      others_info: {
        is_todays_pick: false,
        is_trending: true,
      },
      category_id: "01",
      rating: {
        number: 4.5,
        badge: "Excellent",
      },
      total_view: 320,
      title: "U.S. announces largest weapons package for Ukraine",
      author: {
        name: "John Pike",
        published_date: "2022-08-25 07:35:11",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      thumbnail_url: "https://i.ibb.co/1vcgPzg/unsplash-Eh-Tc-C9s-YXsw-12.png",
      image_url: "https://i.ibb.co/PxC67LV/unsplash-Eh-Tc-C9s-YXsw-1.png",
      details:
        "People's Daily Online (Xinhua) 08:16, August 25, 2022 The United States has committed more than 13.5 billion dollars in security assistance to Ukraine since President Joe Biden took office. WASHINGTON, Aug. 24 (Xinhua) -- The United States on Wednesday announced an additional tranche of security assistance to Ukraine worth nearly 3 billion U.S. dollars, the largest one-time weapons aid to Kiev that came as the Russia-Ukraine conflict reached the half-year mark. According to a breakdown by the Department of Defense (DoD), items in the newly-announced package include six additional National Advanced Surface-to-Air Missile Systems (NASAMS) with additional munitions for NASAMS, up to 245,000 rounds of 155mm artillery ammunition, up to 65,000 rounds of 120mm mortar ammunition, up to 24 counter-artillery radars, Puma Unmanned Aerial Systems (UAS) and support equipment for Scan Eagle UAS systems, Vampire counter-UAS systems, as well as laser-guided rocket systems.",
    },
    {
      _id: "919db97c34e0778b387dd40cdfa08130",
      others_info: {
        is_todays_pick: false,
        is_trending: true,
      },
      category_id: "01",
      rating: {
        number: 4.5,
        badge: "Excellent",
      },
      total_view: 89,
      title:
        "U.S. concerned about India's participation in Russia military exercises",
      author: {
        name: "MarketScreener",
        published_date: "2022-08-30 18:05:42",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      thumbnail_url: "https://i.ibb.co/HXC719r/unsplash-Eh-Tc-C9s-YXsw-19.png",
      image_url: "https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png",
      details:
        "Last month, Moscow announced plans to hold Vostok (East) exercises from Aug. 30 to Sept. 5, even as it wages a costly war in Ukraine. The military exercises are expected to include China, India, Belarus, Mongolia, Tajikistan and other countries, China's defense ministry has said. Asked about India's participation, Jean-Pierre told reporters as President Joe Biden flew to Pennsylvania that the United States was concerned about any country participating in military exercises with Russia while it is at war with Ukraine.",
    },
    {
      _id: "374df11ae3d9b8b9ce21f4dc53f59b85",
      others_info: {
        is_todays_pick: false,
        is_trending: true,
      },
      category_id: "01",
      rating: {
        number: 4.5,
        badge: "Excellent",
      },
      total_view: 798,
      title:
        "Zelensky says he had ‘great conversation' with Biden, discussed Kiev's further steps",
      author: {
        name: "system",
        published_date: "2022-08-25 18:45:00",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      thumbnail_url: "https://i.ibb.co/HXC719r/unsplash-Eh-Tc-C9s-YXsw-19.png",
      image_url: "https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png",
      details:
        "KIEV, August 25. /TASS/. Ukrainian President Vladimir Zelensky said he had a great phone conversation with his US counterpart Joe Biden and discussed with him Ukraine's further actions on Thursday. Had a great conversation with @POTUS. Thanked for the unwavering U.S. support for Ukrainian people - security and financial, he wrote on Twitter. We discussed Ukraine's further steps, Zelensky added. On Wednesday, US President Joe Biden announced $2.98 bln in military aid to Ukraine. On the same day, Ukrainian Prime Minister Denis Shmygal reported that the Ukrainian state budget received grant aid from the US in the amount of $3 bln.",
    },
    {
      _id: "be44c843d61859cc0b87cae85c55f9db",
      others_info: {
        is_todays_pick: false,
        is_trending: true,
      },
      category_id: "01",
      rating: {
        number: 4.5,
        badge: "Excellent",
      },
      total_view: 231,
      title:
        "US to name military mission in Ukraine and appoint commander – WSJ",
      author: {
        name: "Kumar Natasha",
        published_date: "2022-08-26 12:15:36",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      thumbnail_url: "https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png",
      image_url: "https://i.ibb.co/vz5K0FB/unsplash-Eh-Tc-C9s-YXsw-10.png",
      details:
        "Illustrative public photo In the coming weeks, the Joe Biden administration plans to name its military mission to support Ukraine and appoint a general to lead the military training and relief efforts. This is reported by The Wall Street Journal, citing US officials. The name of the operation formally recognizes US military support, akin to how the Pentagon dubbed the missions in Iraq and Afghanistan Operation Iraqi Freedom, Enduring Freedom and 'Guardian of Freedom'. The naming of training and assistance is of great bureaucratic importance, as it usually entails long-term dedicated funding and the possibility of special pay, rewards for military personnel participating in these missions.",
    },
  ];

  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto">
      <button className="btn bg-red-500 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={50}>
        {news.map((n) => (
          <span key={n._id}>{n.title} </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
