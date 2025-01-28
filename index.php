<?php require './partials/head.php'; ?>

<body class="flex flex-col h-screen bg-deepPurple text-white relative overflow-hidden">
    <!-- Top Half: Title and Paragraph -->
    <div class="flex-1 flex flex-col justify-center items-center px-4 md:px-0">
        <h1 class="text-4xl md:text-5xl font-extrabold text-glow text-center">Welcome to the Reverse Fortune Cookie...</h1>
        <p class="text-2xl md:text-3xl font-bold text-glow mt-6 text-center">For what do you seek guidance?</p>
    </div>

    <!-- Bottom Half: Form -->
    <div class="flex-1 flex flex-col justify-center items-center px-4 md:px-0">
        <form onsubmit="generateFortune(event)" class="flex flex-col items-center w-full max-w-md">
            <div class="relative w-full">
                <input 
                    type="text" 
                    id="question" 
                    class="torn-input p-4 text-gray-500 text-lg outline-none w-full"
                    placeholder="What do you want guidance on...">
            </div>
            <button type="submit" class="mt-4 p-2">
                <!-- Add PNG image at the center with glow -->
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img 
                        src="./images/fortuneCookie.png" 
                        alt="Center Image" 
                        class="w-80 object-cover glow-effect animate-pulse hover:scale-110 ease-in-out transition"
                    >
                </div>
            </button>

            <p class="text-xl font-bold text-center">Click the cookie to reveal your fortune...</p>
        </form>
    </div>

    <!-- Add fog overlay on the side -->
    <div class="shadow-overlay absolute top-0 left-0 w-full h-full"></div>

    <!-- Add PNG image at the bottom -->
    <div class="bottom-image absolute w-full"></div>

    <script src="./js/fortuneCookie.js"></script>
</body>
</html>
