// Retrieve data from localStorage
const name = localStorage.getItem("name");
const theme = localStorage.getItem("theme");

// Define predefined images
const predefinedImages = {
"Capone": "Capone.jpg",
"Mash": "Mash.jpg",
"Jay Wise" :"Jay Wise.jpg",
"Bro Linus" : "Bro Linus.jpg",
"Rusty Bwoy" : "Rusty Bwoy.jpg",
"Karim" : "Karim.jpg",
"Juliana" : "Juliana.jpg",
"2PAC" : "2PAC.jpg",
"Rahama" : "Rahama.jpg",
"Jennifer" : "Jennifer.jpg" ,
"Bro Fortu" : "Bro Fortu.jpg",
"~HexByte" : "HexByte.jpg",
"Adubea " : "Adubea.jpg" ,
"Akua Boat" :"Akua Boat.jpg",
"Greatness " : "Greatness.jpg",
"Halifa" : "Halifa.jpg",
"Maame Mmae" : "Maame Mmae.jpg",
"Fadil" : "Fadil.jpg",
"Qwajho Bahd" : "Qwajho Bahd.jpg",
"Sandra" : "Sandra.jpg",
"Soulmate" : "Soulmate.jpg",
"Uncle Kofi" : "Uncle Kofi.jpg" ,
"Amatu" : "Amatu.jpg",
"Elise" : "Elise.jpg",
"Lily" : "Lily.jpg",
"Shaman" : "Shaman.jpg",
"Joey" : "Joey.jpg",
};

const defaultImage = "NYW.jpg"; // Default image if no match is found

// Personalized wishes
const wishes = {
  "Capone": "Happy New Year to all! As we step into this new year, may it bring with it countless opportunities to learn, grow, and evolve. May 2025 be a year where your dreams are realized, your goals are achieved, and your heart is filled with endless joy and peace. Let’s make this year a chapter of transformation, where we embrace new challenges with resilience, spread kindness, and take steps toward a better future. May every moment be a reminder that we are capable of achieving greatness. Here's to making this year one to remember!",
  "Mash": "Wishing you all a very Happy New Year! The start of a new year is always a time to reflect on the past, celebrate the present, and look forward to the future with hope and optimism. May this new year be filled with moments of laughter, love, and happiness. May you find strength in times of adversity, wisdom in moments of confusion, and the courage to go after your dreams without hesitation. Let the year ahead be full of exciting adventures, personal growth, and precious memories with the ones you hold dear.",
"Jay Wise" :"Happy New Year! As we enter 2025, let’s embrace all the new beginnings that this year has to offer. May it be a year full of new opportunities, personal growth, and endless possibilities. Leave behind any regrets or hardships of the past and step forward with renewed hope, confidence, and joy. May you find peace in the small moments, success in every challenge, and happiness in all your endeavours. Here’s to making each day count and building a year that we can look back on with pride.",
"Karim" : "Cheers to the New Year! The arrival of a new year is a perfect time to reflect on all the lessons we’ve learned and all the experiences that have shaped us. It’s a chance for new opportunities, new challenges, and new successes. May you have the courage to pursue your passions, the strength to overcome obstacles, and the wisdom to appreciate the beauty of life’s journey. Let’s welcome 2025 with open arms and positive hearts, ready to make it the best year yet. May it be a year full of happiness, good health, and success for all",
"Juliana" : "Happy New Year to everyone! As we say goodbye to the past year, let’s welcome 2025 with gratitude and excitement. This year is full of fresh starts and endless possibilities, and I hope it brings you closer to your dreams. May it be a year of personal growth, of challenges that make you stronger, and of moments that bring you joy. May the year ahead be filled with beautiful memories, meaningful connections, and the courage to be your true self. Here’s to making this year unforgettable! HAHAHA Enemy Welcome to 2025",
"2PAC" : " Happy New Year! This year, let’s choose to leave behind any doubts, fears, or regrets, and step forward into the future with a heart full of hope and courage. May the coming year bring you the clarity to pursue your passions, the resilience to overcome challenges, and the love that surrounds you each day. Here’s to fresh starts, new beginnings, and creating a life that you are truly proud of. Let’s welcome 2025 with open arms, knowing that it holds so much potential for us all. Cooking rice Is Ready",
"2PAC" : " Happy New Year! This year, let’s choose to leave behind any doubts, fears, or regrets, and step forward into the future with a heart full of hope and courage. May the coming year bring you the clarity to pursue your passions, the resilience to overcome challenges, and the love that surrounds you each day. Here’s to fresh starts, new beginnings, and creating a life that you are truly proud of. Let’s welcome 2025 with open arms, knowing that it holds so much potential for us all. Cooking rice Is Ready",
"Rahama" : "Here’s to a bright and hopeful New Year! As we enter 2025, let’s make a commitment to live with purpose, to follow our dreams, and to make the most of every opportunity. May this year be a time of growth, of embracing change, and of creating new memories that will last a lifetime. May you find strength in adversity, peace in uncertainty, and joy in all the little moments. Let’s make 2025 the year we chase our dreams, achieve our goals, and make a positive impact on the world around us. Wishing you love, happiness, and success in the year ahead!",
"Jennifer" : "Wishing everyone a fantastic New Year! As we enter the new year, let us remember that it’s a time to embrace change, welcome new beginnings, and challenge ourselves to become better versions of who we were yesterday. May 2025 bring you the success you deserve, the happiness you seek, and the peace that your heart longs for. May this year be filled with laughter, love, and moments of inspiration. Here’s to a year of making dreams come true, pushing past limitations, and growing into the best version of ourselves." ,
"Bro Fortu" : "Wishing everyone a prosperous and exciting New Year! Let’s step into 2025 with determination and optimism, ready to create new memories, chase our dreams, and cherish the moments that make life meaningful. Have a fantastic year ahead! THANKS for all the help Bro THANKS",
"~HexByte" : "Cheers to 2025! As the new year unfolds, may it bring happiness that lasts, peace that comforts, and success that rewards all your hard work. May you find strength in challenges and joy in simple things. Let’s make this year one of personal growth, kindness, and unforgettable moments with those we love. let clash together" ,
"Adubea " : "Happy New Year! May this year bring you closer to achieving your dreams, one step at a time. Let every moment of this new year inspire you to be kinder, work harder, and grow stronger. May it be filled with meaningful experiences, cherished memories, and countless moments of joy. Here’s to a brighter, more fulfilling year ahead!" ,
"Akua Boat" :"Happy New Year to all! As we stand on the threshold of a new year, let us reflect on all that we have learned and all that lies ahead. May this year be filled with love, laughter, and gratitude for the people around us. May you find success in all your endeavours and joy in every moment. Let’s embrace the year ahead with positivity, knowing that each day is a new opportunity to make a difference in our lives and the lives of others. Here’s to a year of growth, happiness, and endless possibilities!",
"Greatness " : "Wishing you a New Year that’s full of promise and potential! The beauty of a new year is that it offers us a clean slate, a chance to begin again, to write new stories, and to live with intention. May this year be filled with endless opportunities, the courage to pursue your dreams, and the determination to achieve them. May you find peace in your journey and strength in your challenges. Here’s to a year full of unforgettable moments, personal growth, and the happiness you deserve.",
"Halifa" : "HWishing you a prosperous and joyful New Year! May the coming year bless you with health, happiness, and endless opportunities to thrive. May your journey be filled with exciting adventures and your days be filled with positivity and gratitude. Here's to making every day count in 2025!",
"Maame Mmae" : "Happy New Year to all! Let’s welcome 2025 with hope in our hearts and a spirit of determination. May you find success in your endeavors, cherish the love of your family and friends, and experience the happiness that comes from chasing your dreams. Here’s to a year filled with possibilities!. can wait to see you 🙃",
"Fadil" : "Happy New Year! May your year be filled with laughter, your heart with love, and your days with new adventures. Let’s leave behind the worries of yesterday and embrace the endless possibilities of tomorrow. Wishing you and your loved ones a fantastic 2025!",
"Qwajho Bahd" : "Here’s to a fresh start in 2025! 🌟 May this year be a time of growth, happiness, and new beginnings. May you find the courage to pursue your passions, the strength to overcome obstacles, and the wisdom to Savor life’s little joys. Have an amazing year ahead!",
"Sandra" : ". A very Happy New Year to everyone! May this year be a wonderful adventure of personal growth, new achievements, and meaningful connections. Let go of what no longer serves you and embrace all the amazing opportunities ahead. Wishing you love, laughter, and success in 2025! ..... see you 11th 🙃",
"Soulmate" : "Happy New Year, my love! As we step into 2025, I pray to Allah to bless you with endless happiness, good health, and success in all that you do. You are the light of my life, and I am forever grateful for you. May this year bring us closer, strengthen our bond, and be filled with love, laughter, and unforgettable memories. Let’s embrace every moment, overcome every challenge together, and create a future full of joy and blessings. Here’s to a beautiful year ahead with you by my side. Alhamdulillah for you, always!",
"Uncle Kofi" : "Happy New Year! May this year bring light to guide your path, love to warm your heart, and joy to brighten your days. May you find purpose in your work, peace in your rest, and fulfillment in your relationships. Here’s to a fantastic 2025 filled with endless blessings!" ,
"Amatu" : "Wishing you a joyful New Year! As we step into 2025, let’s embrace new beginnings, welcome fresh challenges, and chase our goals with passion. May your days be filled with positivity, your nights with rest, and your heart with hope. Have an extraordinary year ahead!. Miss you girl 🤞",
"Elise" : "Here’s to a brilliant 2025! As we move forward into the new year, let’s carry the lessons of the past and the hope for a brighter future. May you find joy in every moment, success in every endeavor, and peace in every decision. Have a wonderful year ahead! Thanks for everything LC 🥰",
"Lily" : "Cheers to the New Year! May this year be the one where all your hard work pays off, your relationships deepen, and your dreams become reality. Wishing you a year of happiness, success, and countless blessings.",
"Shaman" : "Wishing everyone a magical New Year! As the calendar turns, let’s welcome the opportunities to create, connect, and celebrate. May this year be a beautiful journey where every moment is a step toward something incredible. Cheers to new beginnings and endless possibilities!",
"Joey" : "Happy New Year to all! May the coming year be filled with the hope of new possibilities, the courage to take bold steps, and the determination to achieve your dreams. Let’s make 2025 a year of success, happiness, and unforgettable experiences!",
"Bro Linus" : "Happy New Year to all! Let’s celebrate the endless possibilities that 2025 holds. May this year bring the realization of dreams, the strengthening of bonds, and the creation of beautiful memories. Let’s make this year our best one yet!. ThANK FORM THE HELP IN 2025 WELCOME TO 2025",
"Rusty Bwoy" : "Happy New Year! May this year bring clarity to your vision, energy to your efforts, and warmth to your relationships. Let every challenge shape you into a stronger person and every success bring you closer to your dreams. Wishing you love, laughter, and prosperity in 2025!",
};

const defaultWish = `Happy New Year, ${name}! Wishing you a spectacular New Year! May this year bring moments of joy, days of success, and a lifetime of cherished memories. Let’s step forward with hope, courage, and determination to make 2025 truly special. Happy New Year! As we turn the page to a new chapter, let’s fill it with stories of love, growth, and success. May you find inspiration in every challenge and gratitude in every blessing. Have an amazing year ahead!
!`;
const wish = wishes[name] || defaultWish;

// Display the message
document.getElementById("message").textContent = wish;

// Display the image
const imagePath = predefinedImages[name] || defaultImage;
document.getElementById("personImage").src = imagePath;

// Apply theme
if (theme === "fireworks") {
  document.body.style.background = "url('fireworks.jpg') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";
  document.body.style.color = "#fff";
} else {
  document.body.style.background = "#f9f9f9";
  document.body.style.color = "#333"
}
