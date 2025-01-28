function generateFortune(event) {
    event.preventDefault(); // Prevent form submission and page reload
    
    const problem = document.getElementById('question').value.toLowerCase();
    
    // Simplified sentiment or keyword-based categorization
    let category = "general";
    if (problem.includes("love") || problem.includes("romance") || problem.includes("heart")) {
        category = "love";
    } else if (problem.includes("work") || problem.includes("job") || problem.includes("career") || problem.includes("profession")) {
        category = "work";
    } else if (problem.includes("health") || problem.includes("wellness") || problem.includes("fitness") || problem.includes("well-being")) {
        category = "health";
    } else if (problem.includes("wealth") || problem.includes("money") || problem.includes("finance") || problem.includes("investment")) {
        category = "wealth";
    } else if (problem.includes("travel") || problem.includes("journey") || problem.includes("trip") || problem.includes("vacation")) {
        category = "travel";
    } else if (problem.includes("family") || problem.includes("parent") || problem.includes("siblings") || problem.includes("home")) {
        category = "family";
    } else if (problem.includes("friendship") || problem.includes("friends") || problem.includes("companionship") || problem.includes("buddy")) {
        category = "friendship";
    } else if (problem.includes("success") || problem.includes("achievement") || problem.includes("goal") || problem.includes("win")) {
        category = "success";
    } else if (problem.includes("creativity") || problem.includes("art") || problem.includes("innovation") || problem.includes("idea")) {
        category = "creativity";
    } else if (problem.includes("spirituality") || problem.includes("soul") || problem.includes("faith") || problem.includes("peace")) {
        category = "spirituality";
    } else if (problem.includes("luck") || problem.includes("fortune") || problem.includes("chance") || problem.includes("opportunity")) {
        category = "luck";
    } else if (problem.includes("self") || problem.includes("confidence") || problem.includes("self-esteem") || problem.includes("growth")) {
        category = "self";
    } else if (problem.includes("adventure") || problem.includes("exploration") || problem.includes("journey") || problem.includes("excursion")) {
        category = "adventure";
    } else if (problem.includes("change") || problem.includes("transformation") || problem.includes("new") || problem.includes("shift")) {
        category = "change";
    } else if (problem.includes("mindfulness") || problem.includes("focus") || problem.includes("present") || problem.includes("awareness")) {
        category = "mindfulness";
    } else if (problem.includes("dreams") || problem.includes("vision") || problem.includes("future") || problem.includes("goals")) {
        category = "dreams";
    } else if (problem.includes("relationships") || problem.includes("connection") || problem.includes("partnership") || problem.includes("love")) {
        category = "relationships";
    } else if (problem.includes("gratitude") || problem.includes("thankful") || problem.includes("appreciation") || problem.includes("thanks")) {
        category = "gratitude";
    } else if (problem.includes("gooning") || problem.includes("goon") || problem.includes("edging") || problem.includes("gooner")) {
        category = "gooning";
    } else if (problem.includes("coding") || problem.includes("code") || problem.includes("programming") || problem.includes("developer")) {
        category = "coding";
    }

    // Randomly select a fortune
    const fortunes = {
        general: [
            "Stay positive, good things are coming your way.",
            "Believe in yourself, your potential is limitless.",
            "Focus on the present, the future will take care of itself.",
            "Small steps lead to big changes.",
            "You are on the right path, keep going."
        ],
        love: [
            "Love will come when you least expect it.",
            "Trust your instincts, love is waiting for you.",
            "A special person is waiting for you around the corner.",
            "True love will find its way to you soon.",
            "Love is not about finding someone to live with, it’s about finding someone you can’t imagine living without."
        ],
        work: [
            "You will soon find success in your career.",
            "Your hard work will be noticed by those who matter.",
            "A new opportunity awaits you in your professional life.",
            "Your dedication is about to pay off.",
            "Don't be afraid to take risks; your next step in your career could be monumental."
        ],
        health: [
            "Relax and take it easy, your body needs rest.",
            "Your health is a reflection of your mindset.",
            "A positive mindset will help improve your physical well-being.",
            "Exercise will bring balance to your body and mind.",
            "Listen to your body, it’s telling you to take better care of yourself."
        ],
        wealth: [
            "Financial stability is on the horizon.",
            "Your smart decisions will lead to long-term wealth.",
            "Take action now and money will follow.",
            "Invest in your future, and you will see great returns.",
            "Opportunities for wealth will open up soon, be prepared."
        ],
        travel: [
            "Adventure is calling, pack your bags.",
            "A journey awaits you that will change your perspective.",
            "Your next trip will bring you unexpected joys.",
            "Explore new places, you will find peace in the unknown.",
            "Traveling soon will bring insights that will help you grow."
        ],
        family: [
            "Your family is your strength; cherish them always.",
            "A new family member is on the way.",
            "Family time will bring great joy and comfort to you.",
            "Strengthen your bonds with family; they are your foundation.",
            "Harmony within your family will bring peace to your life."
        ],
        friendship: [
            "A friendship will soon blossom into something beautiful.",
            "True friends are those who walk into your life when everyone else walks out.",
            "Cherish the friends who support you; they are rare and valuable.",
            "A new friendship is on the horizon; trust it.",
            "Old friends will reconnect, bringing back fond memories."
        ],
        success: [
            "Success is just around the corner, keep pushing forward.",
            "You are on the right path to achieve your dreams.",
            "Perseverance will bring you the success you seek.",
            "Greatness is within your grasp, just keep going.",
            "Your hard work and determination will lead to your success."
        ],
        creativity: [
            "Your creative ideas will soon take flight.",
            "Inspiration is all around you, open your mind to it.",
            "Embrace your creativity, it will lead to new opportunities.",
            "Your next idea will be groundbreaking.",
            "A spark of creativity will ignite a wonderful journey."
        ],
        spirituality: [
            "Your soul is at peace, trust your inner voice.",
            "The universe has a plan for you, be open to its guidance.",
            "Meditate and reflect, you’ll find clarity in the stillness.",
            "Spiritual growth is on the horizon, embrace it.",
            "Trust the process, the universe is aligning with your goals."
        ],
        luck: [
            "Good fortune is coming your way, stay positive.",
            "A stroke of luck will change the course of your day.",
            "Your luck will change for the better soon.",
            "Trust in your luck; it will bring you what you need.",
            "Fortune favors the bold – take that leap of faith."
        ],
        friendship: [
            "A true friend will make all the difference.",
            "A new friend will enter your life and make it richer.",
            "Cherish the friends who truly support you.",
            "You will find friendship in the most unexpected places.",
            "Friendship is the golden thread that ties the heart of all the world."
        ],
        self: [
            "Believe in yourself and great things will come.",
            "Your self-worth is not defined by others' opinions.",
            "You have the power to shape your own destiny.",
            "Invest in yourself, the returns will be beyond expectations.",
            "You are capable of more than you realize."
        ],
        adventure: [
            "The adventure of a lifetime is waiting for you.",
            "Take the leap, an exciting adventure awaits.",
            "Adventure will lead you to unforgettable moments.",
            "Embrace the unknown; it will bring growth and excitement.",
            "Life is too short to play it safe, embrace the thrill of adventure."
        ],
        change: [
            "Change is coming, but it will bring you growth.",
            "Embrace change; it’s the only constant in life.",
            "Change can be scary, but it brings new opportunities.",
            "You are on the verge of a big transformation.",
            "Welcome the change, it will lead you to new experiences."
        ],
        mindfulness: [
            "Live in the moment, for that is where your power lies.",
            "Be mindful of your thoughts, they shape your reality.",
            "Peace comes from within, embrace mindfulness.",
            "Let go of what you can’t control, and focus on what you can.",
            "In the silence, you will find clarity and peace."
        ],
        dreams: [
            "Dream big, the universe is ready to support your vision.",
            "Your dreams will soon become reality if you stay focused.",
            "Trust your dreams, they are guiding you to your true path.",
            "Dreams are the whispers of your soul, follow them.",
            "You are capable of achieving your wildest dreams."
        ],
        relationships: [
            "Open your heart, a wonderful relationship awaits.",
            "Love is not about finding the right person, but creating the right relationship.",
            "A beautiful relationship is blossoming in your life.",
            "Nurture your relationships; they are your true wealth.",
            "Trust in your relationships, they will guide you forward."
        ],
        gratitude: [
            "Gratitude is the key to unlocking more blessings in your life.",
            "Appreciate the little things, they make life extraordinary.",
            "A grateful heart will bring you endless joy.",
            "Gratitude will open doors to new opportunities.",
            "Focus on the positive, and more of it will come your way."
        ],
        gooning: [
            "Never stop gooning, it's what you were born to do.",
            "Gooning will bring you endless joy and fulfillment.",
            "Embrace your inner goon, it's your superpower.",
            "Gooning is the key to unlocking your true potential.",
            "You are a gooner, and that's something to be proud of."
        ],
        coding: [
            "Your code will compile on the first try.",
            "A bug-free project is in your future.",
            "Your coding skills are unmatched, keep up the good work.",
            "The next line of code you write will change the world.",
            "Coding is your superpower, use it wisely."
        ]
    };
    

    // Ensure the selected category has a fortune available
    const fortune = fortunes[category] && fortunes[category][Math.floor(Math.random() * fortunes[category].length)];
    
    // Display the fortune (for now, using an alert)
    alert(fortune);
}
